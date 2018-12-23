import { Router, applyExternalCss } from "./router/router.js";
import { $ } from "./router/utils.js";
import { getConnection, ProdMode, Requests } from "./ext.js";
import "../css/main.css";
import "../css/chat.css";
import "../../assets/manifest.json";
import _ from "./matspinner.js";
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
router.registerRoute(logoutRoute);
const routeDict = {
  "/u/": "userpageroute.js",
  "/": "loginroute.js",
  "/chat/": "chatroute.js"
};
const $import = x => (console.log(`importing "${x}"`), import(`${x}`));
(async () => {
  const i = router.getRouteName(router.currentRoute);
  if (routeDict[i]) {
    router.lazyload(i, $import(`./routes/${routeDict[i]}`));
  } else if (i === "/logout/") {
    router.startLoad();
  }
  routeDict[i] = undefined;
  for (const rt of Object.keys(routeDict)) {
    if (!routeDict[rt]) {
      continue;
    }
    router.lazyload(rt, $import(`./routes/${routeDict[rt]}`), {
      element: "div",
      route: rt,
      textContent: "loading",
      children: [
        {
          element: "mat-spinner",
          attrs: { svgstyle: "display:block;margin:auto" }
        }
      ]
    });
  }
})();
getConnection(router, false);
const isSWReady = false;
if ("serviceWorker" in navigator && isSWReady && ProdMode()) {
  navigator.serviceWorker.register("/sw.js").then(reg => {
    reg.update();
    console.log(`SW registered. ${reg.scope}`);
  });
}
