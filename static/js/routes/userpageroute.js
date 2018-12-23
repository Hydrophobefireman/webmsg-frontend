import {
  matInput,
  noAuth,
  getSocket,
  Requests,
  utilService,
  retry
} from "../ext.js";
import { load, getElement, urlencode, makeCSS, $ } from "../router/utils.js";
import { MatCheckBox as _ } from "../checkbox.js";
const SetNotificationService = () => {
  console.log("TODO");
};
const respButton = (textContent, href) => ({
  element: "button",
  children: [
    {
      element: "a",
      textContent,
      attrs: { href: `#/chat/${href}`, class: "result_name" }
    }
  ],
  events: {
    click(e) {
      load(`/chat/${href}`);
      return e.preventDefault();
    }
  },
  attrs: { class: "searchresult" }
});
const searchInput = matInput("searchHint", "Search for users", "userSearch", {
  async keydown(e) {
    if (e.keyCode === 85 && e.ctrlKey) {
      e.preventDefault();
      this.$$element.value = "";
      return;
    }
    if (e.keyCode === 13) {
      const results = getElement(this, "resultBox");
      results.attrs.textContent = "";
      results.update();
      results.children = [];
      results.reRender();
      const data = (this.attrs.value || "").trim();
      if (data) {
        const spinner = getElement(this, "search-spinner");
        spinner.add();
        const rtoken = await Requests.get(
          `/api/user-search/tokens/${await utilService.getIntegrity()}`
        );
        const token = await rtoken.text();
        const search = await Requests.post(
          "/api/users/",
          true,
          urlencode({ token, user: data })
        );
        const response = await search.json();
        const users = response.users || [];
        if (!users.length) {
          results.attrs.textContent = "No Users Found";
          results.update();
          return spinner.remove();
        }
        const components = [];
        for (const dat of users) {
          components.push(respButton(dat.user, dat.chat_id));
        }
        results.children = components;
        spinner.remove();
        results.reRender(results);
      }
    }
  }
});
function prevChatsFetch(e) {
  const el = getElement(this, "prevChatsData");
  const msg = getElement(this, "prevChatsMessage");
  this.attrs._checked = e.checked;
  async function fetches() {
    if (prevChats) {
      el.children = prevChats;
      el.add();
    } else {
      this.remove();
      msg.remove();
      const spinner = getElement(this, "loading-spinner");
      spinner.add();
      const resp = await Requests.post(
        "/api/chat_ids/",
        true,
        urlencode({ user: await utilService.getUser(false, true) })
      );
      const data = await resp.json();
      const users = data.previous_chats || [];
      if (!users.length) {
        spinner.remove();
        msg.attrs.textContent =
          "An error occured while searching for your chats";
        msg.update();
        throw new Error("$bad length");
      }
      const components = [];
      for (const dat of users) {
        components.push(respButton(dat.user, dat.chat_id));
      }
      prevChats = components;
      el.children = components;
      el.safeRerender(el);
      spinner.remove();
      this.add();
    }
    msg.add();
    msg.attrs.textContent = "Your Previous Chats";
    msg.update();
  }
  if (e.checked) {
    fetches.call(this);
  } else {
    msg.attrs.textContent = "Click to show your previous chats";
    msg.update();
    el.remove();
  }
}
let prevChats;

const resultsBox = {
  element: "div",
  attrs: {},
  idx: "resultBox",
  children: []
};
const searchArea = {
  element: "div",
  attrs: {},
  children: [
    searchInput,
    {
      idx: "search-spinner",
      element: "mat-spinner",
      attrs: { svgstyle: "margin:auto;margin-top:10px" },
      onrender() {
        this.remove();
      }
    },
    resultsBox
  ]
};
const prevChatsBox = {
  idx: "prevChatsUI",
  element: "div",
  attrs: {
    style: {
      width: "80%",
      margin: "auto",
      "border-top": "1px solid #000",
      "margin-top": "10px"
    }
  },
  async onrender() {},
  children: [
    {
      attrs: { boxstyle: makeCSS({ "margin-top": "20px" }) },
      element: "mat-checkbox",
      events: {
        async check(e) {
          retry(() => prevChatsFetch.call(this, e), 1, err => {
            console.log(err);
            getElement(this, "loading-spinner").remove();
            const msg = getElement(this, "prevChatsMessage");
            msg.attrs.textContent = "Could not find previus chats";
            msg.update();
            return this.remove();
          });
        }
      }
    },
    {
      idx: "prevChatsMessage",
      element: "div",
      textContent: "Click to show your previous chats"
    },
    {
      idx: "loading-spinner",
      element: "mat-spinner",
      attrs: { svgstyle: "margin:auto" },
      onrender() {
        this.remove();
      }
    },
    {
      idx: "prevChatsData",
      element: "div",
      onrender() {
        this.remove();
      }
    }
  ]
};
export default {
  element: "div",
  route: "/u/",
  attrs: {},
  async beforeRender(routerArgs) {
    $.empty(this.getRouter().root);
    const auth = noAuth(this.currentRoute, this.getRouter().navData);
    if (auth) {
      return auth;
    }
    const UserArg = routerArgs[0];
    if (!UserArg || UserArg !== user)
      return load(`/u/${user}`), { stopExec: !0 };
  },
  onrender() {
    SetNotificationService();
    return (document.documentElement.style.backgroundColor = document.body.style.backgroundColor =
      "#ffffff");
  },
  onUnmount() {
    return (document.documentElement.style.backgroundColor = document.body.style.backgroundColor =
      "#e3e3e3");
  },
  children: [searchArea, prevChatsBox]
};
