import { Router, applyExternalCss } from "./router/router.js";
import { $ } from "./router/utils.js";
import { getConnection, ProdMode, Requests } from "./ext.js";
import "../css/main.css";
import "../css/chat.css";
import "../../assets/manifest.json";
import _ from "./custom-elements/matspinner.js";
import chatRoute from "./routes/chatroute.js";
import userPageRoute from "./routes/userpageroute.js";
import loginRoute from "./routes/loginroute.js";
import runtime from "serviceworker-webpack-plugin/lib/runtime";
import { IDB } from "./idb.js";
applyExternalCss("https://fonts.googleapis.com/css?family=Open+Sans");
window.router = Router;
const router = Router;
const banner = $.id("app-banner");
if (banner) {
  banner.style.display = "block";
}
const logoutRoute = {
  route: "/logout/",
  element: "div",
  async beforeRender() {
    return router.isUserGoingBack("/")
      ? { stopExec: !0 }
      : (localStorage.clear(),
        await IDB.__clear__(),
        Requests.post("/api/logout/", !0, "").then(() => {
          Router.load("/");
        }));
  },
  textContent: "Logging you out"
};
router.registerRoute(logoutRoute);
(async () => {
  for (var i of [chatRoute, userPageRoute, loginRoute]) {
    router.registerRoute(i);
  }
})();
getConnection(router, false).then(() => router.startLoad());
const isSWReady = true;
if ("serviceWorker" in navigator && isSWReady && ProdMode()) {
  const reg = runtime.register();
  reg.then(e => console.log("SW registered.", e.scope));
}
