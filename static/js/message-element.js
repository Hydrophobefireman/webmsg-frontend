import { safeDefine, stampFormat } from "./router/utils.js";
import imgSrc from "../../assets/attachment.svg";
export class MessageElement extends HTMLElement {
  constructor(
    { message, sender, receiver, stamp, read, rstamp, seen_read, edited },
    id,
    peer,
    user
  ) {
    super();
    //#d2e3fc
    this.message = message;
    if (typeof message !== "string") {
      this.media = this.message.media;
      this.mediaURL = this.message.mediaURL;
    }
    this.sender = sender;
    this.receiver = receiver;
    this.stamp = stamp;
    this.edited = edited;
    this.read = read;
    this.rstamp = rstamp;
    this.seen_read = seen_read;
    this.$id = id;
    const template = document.createElement("template");
    this.user = user;
    template.innerHTML = `<style>:host{display:flex;flex-direction:column}:host.received{textalign:left}:host.sent{text-align:right}[message]{text-align:justify;margin:5px;margin-bottom:0px;width:fit-content;border-radius:15px;max-width:45%;display:inline-flex;padding:6px;cursor:pointer;overflow-wrap:break-word;word-break:break-word}[message].sent{background:#d2e3fc;color:#174ea6;margin-left:auto}[message].received{margin-right:auto;background-color:#f1f3f4;color:#000000de}[time]{display:flex;font-weight:200;color: #0000005e;font-size:12px;margin:10px;margin-top:2px;-webkit-transition:.2s;transition:.2s;-webkit-transform:translate(0,0);transform:translate(0,0)}[time].sent{flex-direction:row-reverse;}[time].received{flex-direction:row}</style><div message></div><div time></div>`;
    const f = this.attachShadow({ mode: "open" });
    f.appendChild(template.content.cloneNode(!0));
    this.msg = f.querySelector("div[message]");
    this.time = f.querySelector("div[time]");
    // msg.addEventListener("click", () => console.log(this));
    this.setAttribute("msg-id", this.$id);
    if (this.sender === peer) {
      this.msg.classList.add("received");
      this.time.classList.add("received");
      this.classList.add("received");
    } else if (this.sender === user) {
      this.msg.classList.add("sent");
      this.time.classList.add("sent");
      this.classList.add("sent");
    }
    try {
      this.msg.appendChild(this._messageOrMedia());
    } catch (e) {
      console.log(e, this);
    }
    this.time.textContent = this._GetInformativeTime();
    this.onclick = () => {};
  }
  setRead(val, rstamp) {
    this.read = val;
    this.rstamp = rstamp;
    this.shadowRoot.querySelector(
      "div[time]"
    ).textContent = this._GetInformativeTime();
  }
  _messageOrMedia() {
    if (this.media) {
      const el = document.createElement("img");
      el.src = imgSrc;
      this.msg.onclick = () => {
        const a = document.createElement("a");
        a.href = this.mediaURL;
        a.target = "__blank";
        a.click();
      };
      return el;
    }
    if (this.message) {
      return document.createTextNode(this.message);
    }
  }
  _GetInformativeTime() {
    let info,
      detail = "",
      edited = "";
    if (this.edited) {
      edited = "[edited]";
    }
    if (this.sender !== this.user) {
      info = this.stamp;
    } else if (!this.read) {
      detail = "sent ";
      info = this.stamp;
    } else {
      if (this.read) {
        detail = "read ";
      }
      info = this.rstamp;
    }
    return edited + detail + stampFormat(info);
  }
}
safeDefine("text-message", MessageElement);
