import { Router } from "./router/router.js";
import { getConnection, ProdMode, Requests } from "./ext.js";
import { loginComponent } from "./routes/loginroute.js";
import { userComponent } from "./routes/userpageroute.js";
import "../css/main.css";
import "../../assets/manifest.json";
import { $ } from "./router/utils.js";
window.router = Router;
const router = Router;
$.id("app-banner").style.display = "block";
const logoutRoute = {
  route: "/logout",
  element: "div",
  beforeRender() {
    Requests.post("/api/logout/", true, "").then(() => Router.load("/"));
  },
  textContent: "Logging you out"
};
const currRoutes = [loginComponent, logoutRoute, userComponent];
for (const r of currRoutes) {
  router.registerRoute(r);
}
getConnection(router);
const isSWReady = false;
if ("serviceWorker" in navigator && isSWReady && ProdMode()) {
  navigator.serviceWorker.register("/sw.js").then(reg => {
    reg.update();
    console.log(`SW registered. ${reg.scope}`);
  });
}
