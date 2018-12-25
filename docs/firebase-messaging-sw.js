importScripts("https://www.gstatic.com/firebasejs/5.5.5/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.5.5/firebase-messaging.js");
firebase.initializeApp({
  apiKey: "AIzaSyCrdjBktQNWizVmfjK50I7BGsIQcNFmKcI",
  databaseURL: "https://webmsg-py.firebaseio.com",
  storageBucket: "webmsg-py.appspot.com",
  authDomain: "webmsg-py.firebaseapp.com",
  messagingSenderId: "193257233140",
  projectId: "webmsg-py"
});
const messaging = firebase.messaging();
self.addEventListener("install", console.log);
self.addEventListener("notificationclick", e => {
  const notification = e.notification;
  console.log(notification);
  const data = notification.data;
  const chat_id = data.chat_id;
  e.notification.close();
  e.waitUntil(
    clients
      .matchAll({
        type: "window"
      })
      .then(clientList => {
        for (const client of clientList) {
          if (client.url == `/#/chat/${chat_id}` && "focus" in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(`/#/chat/${chat_id}`);
        }
      })
  );
});
messaging.setBackgroundMessageHandler(payload => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const data = JSON.parse(payload.data.data);
  const notificationOpts = {
    requireInteraction: true,
    icon: "/favicon.ico",
    data: { chat_id: data.chat_id }
  };
  let title;
  if (data.message && data.message.media) {
    notificationOpts["body"] = `Message from ${data.sender}`;
    notificationOpts["image"] = data.message.mediaURL;
    title = "New Message";
  } else {
    title = data.sender;
    notificationOpts["body"] = data.message;
  }
  return self.registration.showNotification(title, notificationOpts);
});
