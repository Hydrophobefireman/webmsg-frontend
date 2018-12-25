import { load, parseHash, _getTime } from "./router/utils.js";
import { MatNotify } from "./custom-elements/matnotify.js";
import { Requests, getSocket, utilService } from "./ext.js";
export const showNotification = data => {
  if (parseHash(location.href).path === `/chat/${data.chat_id}`) {
    console.log("not showing notification for current chat");
  } else {
    let body;
    if (data.message && data.message.media) {
      body = "media message";
    } else {
      body = data.message;
    }
    const notif = new MatNotify(
      data.sender,
      body,
      () => load(`/chat/${data.chat_id}`),
      "reply",
      { showInput: true },
      true,
      async ({ target: { value } }) => {
        const socket = getSocket();
        if (!socket.isUsable || !socket.socket) {
          await socket.startConn("_/data/");
        }
        const stamp = _getTime();
        const user = await utilService.getUser(false, true);
        const notif = {
          details: {
            chat_id: data.chat_id,
            data: {
              sender: user,
              receiver: data.sender,
              message: value,
              stamp
            }
          }
        };
        Requests.post("/api/instant-message/", true, JSON.stringify(notif), {
          "content-type": "application/json"
        });
        socket.send({
          type: "message-relay",
          peer: data.sender,
          sender: user,
          data: {
            peer: data.sender,
            sender: user,
            type: "message-relay",
            data: {
              stamp,
              message: value,
              chat_id: data.chat_id,
              peer: data.sender
            }
          }
        });
      }
    );
    document.body.appendChild(notif);
    notif.startTick(2000);
  }
};
