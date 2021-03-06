import { getSocket, Requests } from "../ext";
import {
  urlencode,
  getElement,
  _random,
  load,
  $,
  _getTime,
  Events,
  isKeyValObj
} from "../router/utils";
import { MatNotify } from "../custom-elements/matnotify.js";
import { IDB } from "../idb.js";
import { MessageElement } from "../custom-elements/message-element.js";
import { showNotification } from "../show-notification.js";
export const peerConnectionConfig = {
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" }
  ]
};
const generateInlineNotification = message => {
  const div = $.create("div", { notification: true, textContent: message });
  div.onclick = () => div.remove();
  return div;
};
export class BaseManager {
  static async validateChatId(id) {
    const req = await Requests.post(
        "/api/chat-stats",
        !0,
        urlencode({ chat_id: id })
      ),
      resp = await req.json();
    if (resp.$$serviceWorker$$) {
      return resp;
    }
    if (resp.error) return { error: resp.error };
    const { HERE: d, chat_with: e, chat_id: f, is_online } = resp;
    return { user: d, chat_id: f, peer: e, is_online };
  }

  _onIceCandidate({ candidate }) {
    if (candidate && this._pc) {
      return this._socket.send({
        type: "rtc_data",
        data: { icecandidate: candidate },
        peer: this._peer
      });
    }
  }
  _iceStateChange() {
    this._pc.oniceconnectionstatechange = async () => {
      try {
        if (this.__unrendering__) {
          return;
        }
        const state = this._pc.iceConnectionState;
        if (["closed", "disconnected", "failed"].includes(state)) {
          console.log("Connection is Dead..");
          this._isOfferer = null;
          this._pc = null;
          this._dc = null;
          this.__USEWEBSOCKETFALLBACK__ = true; //dont lose a second
          setTimeout(async () => {
            await this._startConn();
          }, 2);
          const data = await getChatData(this._chat_id);
          this.peer = data["peer"];
          this._is_online = data["is_online"];
          if (this.updateUI) {
            this.updateUI();
          }
        }
      } catch (e) {}
    };
  }
  _onDataChannel() {
    console.log(
      `[isOfferer:${this._isOfferer}] started data channel`,
      this._dc
    );
    this._dc.addEventListener("message", ({ data }) =>
      Events.emit("chat_message", data)
    );
    this.__USEWEBSOCKETFALLBACK__ = false;
  }
  async _startRTCPings() {
    const offerer = this._isOfferer;
    this._pc = new RTCPeerConnection(peerConnectionConfig);
    this._pc.onicecandidate = e => this._onIceCandidate(e);
    this._pc.oniceconnectionstatechange = e => this._iceStateChange(e);
    if (offerer) {
      this._dc = this._pc.createDataChannel(_random());
      const offer = await this._pc.createOffer();
      await this._pc.setLocalDescription(offer);
      this._socket.send({
        type: "rtc_data",
        data: { rtc: "offer", js: offer },
        peer: this._peer
      });
      Events.emit("on-dataChannel");
    } else {
      this._pc.ondatachannel = ({ channel }) => {
        this._dc = channel;
        return Events.emit("on-dataChannel");
      };
    }
  }
  async _parseRTCData($$data) {
    if (!$$data) {
      return;
    }
    console.log("Got rtc Data-->", $$data);
    const { rtc, js, icecandidate } = $$data;
    if (icecandidate) {
      if (this._pc) {
        return await this._pc.addIceCandidate(icecandidate);
      } else {
        // this._startConn();
      }
    }
    if (rtc === "offer") {
      await this._pc.setRemoteDescription(js);
      await this._pc.setLocalDescription(await this._pc.createAnswer());
      return this._socket.send({
        type: "rtc_data",
        data: { rtc: "answer", js: this._pc.localDescription },
        peer: this._peer
      });
    }
    if (rtc === "answer") {
      await this._pc.setRemoteDescription(js);
    }
  }

  _onWSmessage({ data: _rawData = {} }) {
    if (typeof _rawData !== "string") {
    }
    const $data = JSON.parse(_rawData);
    const { type, data, meta } = $data;
    if (meta.from !== this._peer && meta.from !== this._user) {
      if (type !== "start_chat" && type !== "online_status") {
        if (type === "message-relay") {
          data.sender = meta.from;
          if (data.sender === this._user) {
            return;
          }
          return showNotification(data);
        }
        return;
      }
      const notify = new MatNotify(
        "Start a Chat",
        `${meta.from} is ready to chat!`,
        () => load(`/chat/${data.common_chat_id}`),
        "Chat",
        console.log
      );
      document.body.appendChild(notify);
      return notify.startTick();
    }
    if (!this._is_online) {
      this._is_online = "--";
      this.updateUI();
    }
    if (type === "online_status") {
      const { isonline } = data;
      this._is_online = isonline ? "online" : "offline";
      this.updateUI();
      if (isonline) {
        return this._socket.send({ type: "get_role", peer: this._peer });
      } else {
        return;
      }
    }
    if (type === "get_role") {
      return this._socket.send({
        type: "send_role",
        data: { is_offerer: !!this._isOfferer },
        peer: this._peer
      });
    }
    if (type === "set_role") {
      if (typeof this._isOfferer === "boolean") {
        return;
      }
      this._isOfferer = data.is_offerer;
      return Events.emit("use-rtc");
    }
    if (type === "rtc_data") {
      this._parseRTCData(data);
    }
    if (type === "message-relay") {
      Events.emit("chat_message", data);
    }
    if (type === "binary-file") {
      const div = generateInlineNotification(`${this._peer} is sending a file`);
      document.body.appendChild(div);
      div.style.transform = "translate(0px,0px)";
      setTimeout(() => div.remove(), 1500);
    }
    if (type == "get-update") {
      const msgid = data.msgid;
      if (this.getElementByMessageId(msgid)) {
        this._socket.send({
          type: "update",
          peer: this._peer,
          data: {
            update_type: "read-update",
            details: {
              chat_id: this._chat_id,
              read: msgid,
              rstamp: _getTime()
            }
          }
        });
      }
    }
    if (type === "chat-update") {
      this._updateMessages([data]);
    }
    if (type == "ping-update") {
      this._updateMessages(data);
    }
  }
  get currentChatData() {
    return {
      chatID: this.chatID,
      user: this._user,
      peer: this._peer,
      is_online: this._is_online
    };
  }
  async _startConn() {
    this.updateUI();
    if (Events.EventCache["use-rtc"]) {
      Events.detroyEvt("use-rtc");
    }
    Events.listen("use-rtc", e => {
      if (e) {
        return this._startRTCPings();
      }
      return (this._canUseRTC = false);
    });
    this._pc = null;
    this._isOfferer = null;
    this._dc = null;
    if (!this._socket.isUsable || !this._socket.socket) {
      await this._socket.startConn("_/data/");
      this.__updateTimeout__();
    }
    this._socket.send({ type: "start_chat", peer: this._peer });
    this._socket.onmessage = e => this._onWSmessage.call(this, e);
    if (this._is_online == "offline") {
      console.log("use websockets");
      return (this._canUseRTC = false);
    }
  }
  get supportsRTC() {
    return !!window.RTCPeerConnection && !!window.RTCDataChannel;
  }
  get UseRTC() {
    return (
      this.supportsRTC && (this.PeerObject || {}).isOnline && this._canUseRTC
    );
  }
}
export class MessageManager extends BaseManager {
  updateUI() {
    try {
      const { peer, is_online } = this.currentChatData;
      this.peerbox = getElement(this._textarea, "peername");
      this.peerstatus = getElement(this._textarea, "peerstatus");
      this.peerbox.$$element.textContent = peer;
      this.peerstatus.$$element.textContent = is_online;
    } catch (_) {}
  }
  _onUserMessage({ detail }) {
    let _data;
    if (!detail) {
    }
    try {
      if (isKeyValObj(detail)) {
        _data = detail;
      } else {
        _data = JSON.parse(detail);
      }
    } catch (e) {
      return console.warn(e);
    }
    const { type, sender, data } = _data;
    if (type === "message-relay") {
      this._lastMessageID += 1;
      const obj = {};
      const dat = { ...data, sender, receiver: data.peer };
      obj[this._lastMessageID] = dat;
      console.log("UPDATE----->", obj);
      updateDb(dat.chat_id, obj);
      const div = new MessageElement(
        dat,
        this._lastMessageID,
        this._peer,
        this._user
      );
      this._textarea.$$element.appendChild(div);
      div.scrollIntoView();
      return this._lastMessageID;
    } else if (type === "typing" && sender === this._peer) {
      clearTimeout(this.___typingTimeout);
      this.peerstatus.$$element.textContent = "typing";
      this.___typingTimeout = setTimeout(() => {
        this.peerstatus.$$element.textContent = this._is_online;
      }, 700);
    }
  }
  _GenerateMessageTemplate(data, stamp = _getTime()) {
    if (!data) {
      throw new Error("Invalid Values");
    }
    const obj = {
      type: "message-relay",
      peer: this._peer,
      sender: this._user,
      data: {
        chat_id: this._chat_id,
        msgid: this._lastMessageID,
        stamp,
        peer: this._peer
      }
    };
    obj["data"]["message"] = data;
    return obj;
  }
  _sendTypingIndicator() {
    if (this._dc && this._dc.readyState === "open") {
      this._dc.send(JSON.stringify({ type: "typing", sender: this._user }));
    }
  }
  __sendMessage(data) {
    if (this.__USEWEBSOCKETFALLBACK__) {
      return this._socket.send(data);
    } else {
      return this._dc.send(JSON.stringify(data));
    }
  }
  _sendMessageAndUpdateDataBase(e) {
    const data = this._GenerateMessageTemplate(e);
    this._input.$$element.value = "";
    this.__sendMessage(data);
    const msgid = this._onUserMessage({
      detail: { ...data, sender: this._user, receiver: this._peer }
    });
    this._sendServerPing(e, msgid);
  }
  async _sendServerPing(data, msgid) {
    const details = {
      chat_id: this._chat_id,
      data: {
        sender: this._user,
        receiver: this._peer,
        message: data,
        stamp: _getTime()
      }
    };
    const resp = await Requests.post(
      "/api/instant-message/",
      true,
      JSON.stringify({
        details
      }),
      { "content-type": "application/json" }
    );
    const dat = await resp.json();
    const ms = dat.data;
    if (parseInt(ms) !== parseInt(msgid)) {
      console.log("check for errors");
    }
  }

  _setUpDataInputListeners() {
    this._input.events.keydown = e =>
      inputOnkeyDown.call(
        this._input,
        e,
        data => this._sendMessageAndUpdateDataBase.call(this, data),
        () => this._sendTypingIndicator.call(this)
      );
    this._input.events.keyup = () => inputOnKeyUp.call(this._input);
    this._input.reRender();
    this._submit_button.events = this._submit_button.events || {};
    this._submit_button.events.click = () =>
      this._sendMessageAndUpdateDataBase.call(
        this,
        this._input.$$element.value
      );
    this._submit_button.reRender();
  }
  async _updateMessages(udList) {
    for (const ud of udList) {
      const { update_type, msg, rstamp, chat_id } = ud;
      if (update_type === "read") {
        const db = await IDB.get(chat_id);
        if (db) {
          const chats = db.chats;
          chats[msg].read = true;
          chats[msg].rstamp = rstamp;
          db.chats = chats;
          await IDB.set(chat_id, db);
        }
        this.getElementByMessageId(msg).setRead(true, rstamp);
      }
    }
  }
  _renderFetchedMessages(data) {
    const keys = Object.keys(data),
      div = document.createElement("div");
    for (const id of keys) {
      const $data = data[id];
      this._lastMessageID = parseInt(id);
      if (!this.getElementByMessageId(id)) {
        if (!$data) {
        }
        const msg = new MessageElement($data, id, this._peer, this._user);
        div.appendChild(msg);
        this._textarea.$$element.appendChild(div);
      }
    }
  }
  async _getUpdatesFromServer() {
    const $data = (await IDB.get(this._chat_id)) || {};
    console.log("IDB Data Recieved");
    const data = $data.chats || {};
    this._renderFetchedMessages(data);
    this._lastMessageID = Object.keys(data).length - 1;
    this._latestMessageElement
      ? this._latestMessageElement.scrollIntoView()
      : void 0;
    const req = await Requests.post(
      "/api/updates/",
      true,
      urlencode({
        chat_id: this._chat_id,
        fetch_from: this._lastMessageID
      })
    );
    const resp = await req.json();
    const messages = resp.message_data.messages;
    this._renderFetchedMessages(messages);
    await updateDb(this._chat_id, messages);
    this._latestMessageElement
      ? this._latestMessageElement.scrollIntoView()
      : void 0;
  }
  async _sendBinaryFile(_f) {
    const div = generateInlineNotification(`Sending File to ${this._peer}`);
    document.body.appendChild(div);
    div.style.transform = "translate(0px,0px)";
    setTimeout(() => div.remove(), 1500);
    const resp = new Response(_f);
    const fle = await resp.arrayBuffer();
    this._socket.send({ type: "binary-file", data: {}, peer: this._peer });
    const req = await Requests.post("/@/binary/", true, fle);
    const fr = await req.json();
    const url = fr.url;
    this._sendMessageAndUpdateDataBase({ media: true, mediaURL: url });
  }

  get _latestMessageElement() {
    if (!this._lastMessageID) {
      return;
    }
    return this.getElementByMessageId(this._lastMessageID);
  }
  getElementByMessageId(id) {
    return $.q(`text-message[msg-id="${id}"]`);
  }
  __updateTimeout__() {
    this.__socketInterval__ = setInterval(async () => {
      const msgs = await this._getUnreadMessages();
      if (!msgs) {
        return;
      }
      this._socket.send({
        type: "fetch-update",
        data: {
          msgids: msgs,
          chat_id: this._chat_id
        },
        peer: this._peer
      });
    }, 5000);
  }
  async _getUnreadMessages() {
    const resp = [],
      messages = (await IDB.get(this._chat_id)) || {},
      chats = messages.chats;
    if (chats) {
      for (const i of Object.keys(chats)) {
        const msg = chats[i];
        if (msg.read || msg.sender !== this._user) continue;
        else resp.push(i);
      }
      return resp.length ? resp : null;
    }
    return null;
  }
  constructor(initDict, textarea, socket = getSocket()) {
    super();
    clearInterval(this.__socketInterval__);
    Events.destroyAll();
    Events.listen("attach-img", ({ detail }) =>
      this._sendBinaryFile.call(this, detail)
    );
    Events.listen("chat_message", e => this._onUserMessage.call(this, e));
    Events.listen("on-dataChannel", e => this._onDataChannel(e));
    Events.listen("unmount-router", () => {
      Events.destroyAll();
      if (this._pc) {
        this._socket.close();
        clearInterval(this.__socketInterval__);
        this.__unrendering__ = true;
        this._pc.close();
        this._pc = this._dc = this._peer = this._chat_id = this._isOfferer = null;
      }
    });
    this.__unrendering__ = false;
    this.__USEWEBSOCKETFALLBACK__ = true;
    this._isOfferer = null;
    this._canUseRTC = true;
    const { user, chat_id, peer, is_online } = initDict;
    this._user = user;
    this._peer = peer;
    this._is_online = is_online;
    this._chat_id = chat_id;
    this._textarea = textarea;
    this._input = getElement(this._textarea, "chat_type");
    this._submit_button = getElement(this._textarea, "sendbtn");
    this._socket = socket;
    this._getUpdatesFromServer();
    this._startConn();
    this._setUpDataInputListeners();
  }
}
export async function getChatData(id) {
  return await MessageManager.validateChatId(id);
}
function inputOnkeyDown(a, funcOnEnter, funcOnKeyDown) {
  return (
    85 === a.keyCode && a.ctrlKey
      ? (a.preventDefault(),
        void ((this.$$element.value = this.$$element.value.slice(
          this.$$element.selectionStart,
          this.$$element.value.length
        )),
        this.$$element.setSelectionRange(0, 0)))
      : 13 === a.keyCode
      ? (this.attrs.value || "").trim()
        ? funcOnEnter(this.$$element.value)
        : void 0
      : (this.attrs.value = this.$$element.value),
    funcOnKeyDown()
  );
}
function inputOnKeyUp() {
  const inpVal = (this.$$element.value || "").trim(),
    sendButton = getElement(this, "sendbtn"),
    attachBtn = getElement(this, "attachbtn");
  return (
    inpVal
      ? attachBtn.$$element.parentElement &&
        ((attachBtn.$$element.style.transform = "translate(200px,0px)"),
        setTimeout(() => (sendButton.add(), attachBtn.remove()), 170))
      : (attachBtn.add(),
        sendButton.remove(),
        setTimeout(
          () => (attachBtn.$$element.style.transform = "translate(0px,0px)"),
          20
        )),
    (this.attrs.value = this.$$element.value)
  );
}
export async function updateDb(chat_id, new_data, new_message = true) {
  const data = (await IDB.get(chat_id)) || {};
  if (new_message) {
    const chats = data.chats;
    const dat = { ...chats, ...new_data };
    data.chats = dat;
    return await IDB.set(chat_id, data);
  } else {
    data.meta = new_data;
    return await IDB.set(chat_id, data);
  }
}
