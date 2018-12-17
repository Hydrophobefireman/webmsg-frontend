export const isKeyValObj = a => a.constructor === Object;
export const trace = (a, b = "warn") => {
  console[b](`[logger]--->${a}`);
};
export const load = hash => {
  if ("string" == typeof hash)
    return "/" === hash[0]
      ? (location.hash = hash)
      : (location.hash = `/${hash}`);
};
export const parseHash = a => {
  let b, c;
  if ("#" === a[0]) b = a.substr(1);
  else
    try {
      (c = new URL(a)), (b = c.hash.substr(1));
    } catch (n) {
      (b = "/"), console.log(n);
    }
  const d = b.split("?"),
    [l, m] = [0 === b.length ? "/" : d[0], d[1]];
  return { path: l, qs: m };
};
export const noop = () => {};
export const asyncNoop = async () => {};
export const __random__ = (a = 15) => {
  return [...Array(a)]
    .map(() => (~~(16 * Math.random())).toString(16))
    .join("");
};
export const _random = (a = 15) =>
  [...Array(a)]
    .join(".")
    .replace(/[.]/g, b =>
      (
        b ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (b / 4)))
      ).toString(16)
    );
const _s = (() => {
  const a = document.createElement("style");
  return (a.innerHTML = ""), document.head.appendChild(a), a.sheet;
})();
export const sheet = _s;
const _getRules = (a, b = sheet) => {
  const c = Array.from(b.rules);
  return c.filter(d => d.selectorText === a)[0];
};

export const setattrs = (element, attributes, stylesheet = sheet) => {
  const attrs = Object.keys(attributes);
  for (const key of attrs) {
    if (!["$$element", "$$parent"].includes(key)) {
      const value = attributes[key];
      if (key === "class") {
        // const classList = element.classList;
        // while (classList.length > 0) {
        //   classList.remove(classList.item(0));
        // }
        if (typeof value === "string") {
          element.className = value;
        } else {
          element.className = [...value].join(" ");
        }
      } else if (key === "events") {
        for (const event of value) {
          const listener = value[event];
          element.addEventListener(event, listener);
        }
      } else if (key === "style") {
        let csstext, inserNewRule, selector;
        if (isKeyValObj(value)) {
          csstext = makeCSS(value);
        } else {
          csstext = value;
        }
        selector =
          element.getAttribute("_routercontent") || attributes._routercontent;
        if (selector) {
          const sheetRule = _getRules(`[_routercontent="${selector}"]`);
          if (sheetRule) {
            sheetRule.style = csstext;
          } else {
            inserNewRule = true;
          }
        } else {
          selector = _random();
          inserNewRule = true;
        }
        if (inserNewRule) {
          element.setAttribute("_routercontent", selector);
          stylesheet.insertRule(`[_routercontent='${selector}']{${csstext}}`);
        }
      } else if (
        ["___innerHTML___", "innerText", "textContent"].includes(key)
      ) {
        if (key === "___innerHTML___") {
          element.innerHTML = value;
        } else {
          element.textContent = value;
        }
      } else {
        element.setAttribute(key, value);
      }
    }
  }
};
export const $ = {
  q: (a, b = !0) => {
    return b
      ? document.querySelector(a)
      : Array.from(document.querySelectorAll(a));
  },
  id: a => document.getElementById(a),
  className: (a, b = !0) => {
    const c = Array.from(document.getElementsByClassName(a));
    return b ? c[0] : c;
  },
  create: (a, b, c = sheet) => {
    const d = document.createElement(a);
    return b && "object" == typeof b && setattrs(d, b, c), d;
  },
  get: (a, b) => a.getAttribute(b),
  set: (a, b, c) => a.setAttribute(b, c),
  empty: a => {
    let b;
    for (b = a.lastChild; b; ) a.removeChild(b), (b = a.lastChild);
  }
};
export const isFunction = a => a instanceof Function;
export const isAsync = a => "AsyncFunction" === a.constructor.name;
export const changeCSS = (a, b, c = !1) => {
  let d;
  const e = _getRules(a);
  if (!e) return sheet.insertRule(`${a}{${b}}`);
  if (c) return (e.style = makeCSS(b));
  d = makeObjectFromCss(b);
  for (const f of Object.keys(d)) e.style[f] = d[f];
};
export const makeObjectFromCss = a => {
  if ("object" == typeof a) return a;
  const b = a.split(";");
  return b.reduce((c, d) => {
    const e = d.split(":"),
      f = {};
    return 1 < e.length
      ? ((f[e[0].trim()] = e[1].trim()), Object.assign(c, f))
      : c;
  }, {});
};
export const urlencode = a => {
  return `${Object.keys(a)
    .map(b => `${encodeURIComponent(b)}=${encodeURIComponent(a[b])}`)
    .join("&")}`;
};

export const makeCSS = a => {
  if ("string" == typeof a) return a;
  const b = [];
  for (const c of Object.keys(a)) b.push(`${c}:${a[c]}`);
  return b.join(";");
};
export const stampFormat = a => {
  try {
    return Intl.DateTimeFormat("auto", {
      hour: "numeric",
      hour12: !0,
      minute: "numeric",
      second: "numeric",
      year: "numeric",
      month: "numeric",
      day: "numeric"
    }).format(new Date(a));
  } catch (b) {
    return new Date(a).toLocaleString();
  }
};
export const _getTime = () => new Date().getTime();
const tmplate = (() => {
  const a = document.createElement("template"),
    b = makeCSS({
      margin: "5px",
      width: "fit-content",
      "border-radius": "15px",
      "max-width": "45%",
      display: "flex",
      padding: "6px",
      "margin-top": "5px",
      color: "#fff",
      cursor: "pointer",
      "text-align": "left",
      "overflow-wrap": "break-word",
      "word-break": "break-word"
    });
  return (a.innerHTML = `<style>:host{${b}}</style><slot></slot>`), a;
})();
export class MessageElement extends HTMLElement {
  set _id(a) {
    (this._id_ = a), this.setAttribute("data-msgid", a);
  }
  get _id() {
    return this._id_;
  }
  constructor(a, b) {
    super();
    const c = this.attachShadow({
      mode: "open"
    });
    c.appendChild((a || tmplate).content.cloneNode(!0)),
      (this.meta = null),
      (this.data = null),
      (this._id_ = 0),
      b && (this.meta = b),
      (this._messagedata = null);
  }
}
export const blobToArrayBuffer = a =>
  new Promise((b, c) => {
    const d = new FileReader();
    (d.onload = e => b(e.target.result)),
      (d.onerror = e => c(e)),
      d.readAsArrayBuffer(a);
  });
export const arrayBufferToBlob = (a, b) =>
  new Blob([a], {
    type: b
  });
export const arrayBufferToBase64 = a =>
  new Promise(b => {
    const c = new Blob([a], {
        type: "application/octet-binary"
      }),
      d = new FileReader();
    (d.onload = e => {
      const f = e.target.result;
      b(f.substr(f.indexOf(",") + 1));
    }),
      d.readAsDataURL(c);
  });
export const base64ToArrayBuffer = async a => {
  const b = await fetch(`data:application/octet-stream;base64,${a}`);
  return await b.arrayBuffer();
};
export const base64ToBlob = async (a, b) =>
  arrayBufferToBlob(await base64ToArrayBuffer(a), b);
export const ImgAsBlob = async a => {
  try {
    const b = await fetch(a),
      c = await b.blob();
    return URL.createObjectURL(c);
  } catch (b) {
    return (
      console.warn(
        `An error occured while fetching:${a}.Returning ${a} back...`
      ),
      a
    );
  }
};
export function slidein(a) {
  (a.style.overflow = "hidden"),
    (a.style.padding = "0px"),
    (a.style.opacity = 0),
    (a.style.height = "0"),
    (a.style.border = "none"),
    (a.style.width = "0");
}
export function slideout(a) {
  (a.style.padding = "5px"),
    (a.style.opacity = 1),
    (a.style.height = "auto"),
    (a.style.width = "auto"),
    (a.style.border = "2px solid #e3e3e3"),
    (a.style.overflow = "visible");
}
export const apptSize = a => {
  const b = 0 | (a / 1048576);
  if (b) return `${b} MB`;
  const c = 0 | (a / 1024);
  return c ? `${c} KB` : `${a} b`;
};
export const makeComponent = (
  element,
  attrs = {},
  beforeRender = () => {},
  onrender = () => {},
  textContent = null,
  events = {},
  children = [],
  route = null,
  selector,
  onUnmount = () => {},
  idx = null
) => ({
  element,
  attrs,
  beforeRender,
  onrender,
  textContent,
  events,
  children,
  selector,
  route,
  onUnmount,
  idx
});
export const getElement = (a, b) => {
  if (a) {
    const c = a.routeCache();
    if (c) {
      return c[b];
    }
    return null;
  }
  return null;
};

export function safeDefine(name, cls) {
  if (!window.customElements.get(name)) {
    return window.customElements.define(name, cls);
  }
}

$.q("noscript").remove();
