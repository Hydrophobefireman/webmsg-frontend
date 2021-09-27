import "../css/main.css";
import "../css/chat.css";
import "../../assets/manifest.json";

import { ProdMode, Requests, getConnection } from "./ext.js";
import { Router, applyExternalCss } from "./router/router.js";

import { $ } from "./router/utils.js";
import { IDB } from "./idb.js";
import _ from "./custom-elements/matspinner.js";

applyExternalCss("https://fonts.pycode.tk/open-sans.css");
window.router = Router;
const router = Router;
const banner = $.id("app-banner");
if (banner) {
  banner.style.display = "block";
}
const logoutRoute = {
  route: "/logout/",
  element: "div",
  beforeRender() {
    return router.isUserGoingBack("/")
      ? { stopExec: !0 }
      : (localStorage.clear(),
        IDB.__clear__(),
        Requests.post("/api/logout/").then(() => {
          Router.load("/");
        }));
  },
  textContent: "Logging you out",
};
router.registerRoute(logoutRoute);
getConnection(router, false)
  .then(async () => {
    const chatRoute = import(
      /* webpackChunkName:"chat-route" */ "./routes/chatroute.js"
    );
    const userPageRoute = import(
      /*webpackChunkName:"user-page"*/ "./routes/userpageroute.js"
    );
    const loginRoute = import(
      /*webpackChunkName:"loginroute" */ "./routes/loginroute.js"
    );
    for (const i of [chatRoute, userPageRoute, loginRoute]) {
      router.registerRoute((await i).default),
        console.log("registered route..");
    }
  })
  .then(() => (console.log("Started router loading"), router.startLoad()));

const isSWReady = true;
try{if (ProdMode() && isSWReady && "serviceWorker" in navigator) {
  const reg = runtime.register();
  reg.then((e) => console.log("SW registered.", e.scope));
}
   }catch(e){}
