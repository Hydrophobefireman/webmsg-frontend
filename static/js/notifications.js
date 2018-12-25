import { urlencode, $, _getTime } from "./router/utils.js";
import { Requests } from "./ext.js";
import { showNotification } from "./show-notification.js";
if (!!window.Notification) {
  if (typeof firebase === "undefined")
    throw new Error(
      "hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js"
    );
  firebase.initializeApp({
    apiKey: "AIzaSyCrdjBktQNWizVmfjK50I7BGsIQcNFmKcI",
    databaseURL: "https://webmsg-py.firebaseio.com",
    storageBucket: "webmsg-py.appspot.com",
    authDomain: "webmsg-py.firebaseapp.com",
    messagingSenderId: "193257233140",
    projectId: "webmsg-py"
  });
}
export async function notificationInit() {
  if (typeof window.Notification === "function") {
    const messaging = firebase.messaging();
    try {
      console.log("Supports Notifications");
      messaging.usePublicVapidKey(
        "BGhv7XYjPBkpVoOEPbq2E19Is1ti_MYfboTDazKE0jgxPENxDqe0-U2p1OKEEgG4JH4Ycl8Wbxdv-UrrP_LcLmw"
      );
      await messaging.requestPermission();
      // Callback fired if Instance ID token is updated.
      await messaging.getToken();
      const token_stuff = async () => {
        const token = await messaging.getToken();
        console.log("Token refreshed:");
        console.log(token);
        return await Requests.post(
          "/api/set-notification-token/",
          true,
          urlencode({ token })
        );
      };
      await token_stuff();
      messaging.onTokenRefresh(token_stuff);
    } catch (e) {
      console.warn(e);
      console.log("Permission-Denied");
    }
    if (Notification.permission === "granted") {
      console.log("Granted Notification Perm");
      messaging.onMessage(async payload => {
        const data = JSON.parse(payload.data.data);
        showNotification(data);
      });
    }
  }
}
