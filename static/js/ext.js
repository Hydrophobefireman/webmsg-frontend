import { $, urlencode, makeCSS, getElement, load } from "./router/utils.js";
import MatSpinner from "./matspinner.js";
export const ProdMode = () => location.hostname !== "localhost";
export const _URLHOST = window.location.host.includes("localhost")
  ? "localhost:5000"
  : "webmsg.herokuapp.com";
export const URLBASE = `${window.location.protocol}//${_URLHOST}`;
export const localWebsocketURL = a =>
  `${
    "https:" === window.location.protocol ? "wss://" : "ws://"
  }${_URLHOST}/${a}`;
class SocketConn {
  __defaultOnMessage(e) {
    const data = JSON.parse(e.data);
    this._socketID = data.socket_id;
  }
  startConn(_ws_) {
    return new Promise((resolve, reject) => {
      this.socket = new WebSocket(localWebsocketURL(_ws_));
      this.socket.onopen = () => {
        this.socket.send("__init__");
        this.socket.onmessage = __defaultOnMessage;
        this._pingPongs();
        resolve(this.socket);
      };
      this.socket.onerror = e => reject(e);
    });
  }
  close() {
    try {
      this.socket.close();
    } catch (e) {
      console.warn(e);
    }
  }
  send(data) {
    return this.socket.send(JSON.stringify(data));
  }
  sendString(data) {
    return this.socket.send(data);
  }
  set onmessage(func) {
    this.socket.onmessage = e => {
      if (e.data === "ping" || e.data === "pong") {
        return;
      }
      return func(e);
    };
  }

  get readyState() {
    return this.socket.readyState;
  }
  get isUsable() {
    return [this.socket.OPEN, this.socket.CONNECTING].includes(
      this.socket.readyState
    );
  }
  _pingPongs() {
    this.pingtimer = setTimeout(() => {
      if (this.socket.readyState === this.socket.OPEN) {
        this.socket.send("ping");
        this._pingPongs();
      } else {
        clearTimeout(this.pingtimer);
      }
    }, 20000);
  }
  constructor() {}
}
let __socket__;
export const getSocket = () => {
  return __socket__
    ? __socket__ && __socket__.socket
    : ((__socket__ = new SocketConn()), __socket__);
};
export class Requests {
  static async get(_url, relative = true, headers = {}) {
    let url;
    if (relative) {
      url = URLBASE + _url;
    } else {
      url = _url;
    }
    return await fetch(url, {
      headers,
      credentials: "include"
    });
  }
  static async post(
    _url,
    relative = true,
    data,
    headers = {
      "content-type": "application/x-www-form-urlencoded"
    }
  ) {
    let url;
    if (relative) {
      url = URLBASE + _url;
    } else {
      url = _url;
    }
    return await fetch(url, {
      method: "post",
      body: data,
      headers,
      credentials: "include"
    });
  }
}
function onblur(c, d) {
  if (!c.attrs.value || !c.attrs.value.trim()) {
    const f = getElement(c, d);
    f.attrs.class.delete("moveup");
    f.attrs.class.add("movedown");
    f.update();
    setTimeout(() => (f.attrs.class.delete("movedown"), f.update()), 110);
  }
}
function onfocus(c, d) {
  const f = getElement(c, d);
  f.attrs.class.add("moveup");
  f.attrs.class.delete("movedown");
  f.update();
}
export const matInput = (() => {
  const a = (b, listeners, d, placeHolderId) => {
    const defaultListeners = {};
    if (!listeners.blur) {
      defaultListeners.blur = function() {
        onblur(this, placeHolderId);
        this.update();
      };
    }
    if (!listeners.focus) {
      defaultListeners.focus = function() {
        this.attrs.untouched = false;
        onfocus(this, placeHolderId);
      };
      if (!listeners.keyup) {
        defaultListeners.keyup = function() {
          return (this.attrs.value = this.$$element.value);
        };
      }
    }
    return {
      idx: b,
      element: "input",
      attrs: {
        type: d ? "password" : "text",
        spellcheck: !1,
        class: "paper-input"
      },
      onrender() {
        this.attrs.value
          ? this.$$element.focus()
          : ((this.attrs.untouched = !0), (this.attrs.clean = !0));
      },
      events: {
        ...listeners,
        ...defaultListeners
      }
    };
  };
  return (
    placeHolderId,
    placeHolderText,
    inputId,
    inputEventListeners,
    isPassword = false
  ) => ({
    element: "div",
    children: [
      {
        idx: placeHolderId,
        onrender() {
          const n = getElement(this, inputId);
          n &&
            n.$$element &&
            n.$$element.value.trim() &&
            (this.attrs.class = new Set(["_animate", "moveup"]));
        },
        element: "div",
        textContent: placeHolderText,
        attrs: { class: "_animate" }
      },
      a(inputId, inputEventListeners, isPassword, placeHolderId)
    ]
  });
})();
const connErrComponent = router => ({
  element: "div",
  status: 503,
  textContent:
    "An error occured while contacting the server..please reload the page and try again",
  attrs: {
    style: {
      margin: "auto",
      "text-align": "center"
    },
    class: "_errComponent"
  },
  children: [
    {
      element: "button",
      attrs: {
        style: {
          background: "#fff",
          color: "#000",
          border: "1px solid #6f70ee",
          "border-radius": "20px",
          display: "block",
          margin: "auto",
          "margin-top": "20px",
          padding: "8px",
          width: "20%",
          outline: "none",
          cursor: "pointer"
        },
        class: "ripple"
      },
      textContent: "Reload",
      events: {
        click() {
          return getConnection(router);
        }
      }
    }
  ]
});
const _getConnOnError = (e, router) => {
  console.log(e);
  return (
    router.registerRoute(connErrComponent(router), !0),
    setTimeout(() => router.pushStatus(503), 500)
  );
};
const _makeRequest = async () => {
  $.empty(router.root);
  router.root.appendChild(
    new MatSpinner(
      null,
      null,
      makeCSS({
        margin: "auto",
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      })
    )
  );
  router.root.appendChild(
    (() => {
      const div = $.create("div", {
        style: "margin:auto;text-align:center"
      });
      div.textContent = "Connecting to the server";
      return div;
    })()
  );
  await Requests.get("/api/gen_204");
  setTimeout(() => router.startLoad(), 450);
};
export async function getConnection(router) {
  return retry(_makeRequest, 2, e => _getConnOnError(e, router));
}

class UtilsService {
  _setVars() {
    this.chatID = this.THERE = null;
  }
  async getIntegrity() {
    const a = await (await Requests.post(
      "/api/integrity/",
      true,
      urlencode({
        integrity: this.Integrity
      })
    )).json();
    const resp = a.key;
    this.Integrity = resp;
    return resp;
  }
  async getUser(forceRecheck = false, getName = false) {
    if (this.HERE && !forceRecheck) {
      if (getName) {
        return this.HERE;
      }
      return true;
    }
    try {
      const resp = await Requests.get("/api/getuser");
      if (resp.ok) {
        const user = await resp.text();
        this.HERE = user.substr(3);
        if (getName) {
          return this.HERE;
        }
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  constructor() {
    this._setVars();
  }
}
export const utilService = new UtilsService();
export const retry = async (func, rCount, onerror) => {
  let d;
  for (let e = 0; e < rCount; e++) {
    try {
      return await func();
    } catch (f) {
      d = f;
    }
    await (() =>
      new Promise(resolve => {
        setTimeout(() => resolve(), 100);
      }))();
  }
  onerror(d);
};

export const noAuth = async data => {
  const user = await utilService.getUser(!0, !0);
  if (!user) {
    return (
      console.log("Not logged in"),
      load(`/?${urlencode({ continue: data || location.hash.substr(1) })}`),
      { stopExec: !0 }
    );
  } else {
    return false;
  }
};
