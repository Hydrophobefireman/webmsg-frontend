import { Router, applyExternalCss } from "./router/router.js";
import { $ } from "./router/utils.js";
import { getConnection, ProdMode, Requests } from "./ext.js";
import "../css/main.css";
import "../css/chat.css";
import "../../assets/manifest.json";
import _ from "./matspinner.js";
import chatRoute from "./routes/chatroute.js";
import userPageRoute from "./routes/userpageroute.js";
import loginRoute from "./routes/loginroute.js";
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
  beforeRender() {
    return router.isUserGoingBack("/")
      ? { stopExec: !0 }
      : Requests.post("/api/logout/", !0, "").then(() => Router.load("/"));
  },
  textContent: "Logging you out"
};
(async () => {
  for (var i of [chatRoute, userPageRoute, loginRoute]) {
    router.registerRoute(i);
  }
})();
getConnection(router, false).then(() => router.startLoad());
const isSWReady = false;
if ("serviceWorker" in navigator && isSWReady && ProdMode()) {
  navigator.serviceWorker.register("/sw.js").then(reg => {
    reg.update();
    console.log(`SW registered. ${reg.scope}`);
  });
}
