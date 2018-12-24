import img from "../../../assets/attachment.svg";
import menuSvg from "../../../assets/menu.svg";
import { getElement, $, Events } from "../router/utils";
import { getChatData, MessageManager, updateDb } from "./chat-logic.js";
import { noAuth } from "../ext";
import { IDB } from "../idb";

const typingBox = {
  element: "div",
  attrs: {
    class: "inpbox_"
  },
  children: [
    {
      element: "input",
      idx: "chat_type",
      attrs: {
        class: "textBox",
        spellcheck: "false",
        autocomplete: "none"
      },
      events: {
        // keydown: inputOnkeyDown,
        // keyup: inputOnKeyUp
      }
    },
    {
      element: "img",
      idx: "attachbtn",
      events: {
        click() {
          // var a=document.createElement("input");
          const f = $.create("input", { type: "file" });
          f.oninput = () => Events.emit("attach-img", f.files[0]);
          f.click();
        },
        contextmenu(e) {
          e.preventDefault();
        }
      },
      attrs: {
        src: img,
        class: "attach-img"
      }
    },
    {
      idx: "sendbtn",
      element: "button",
      textContent: "send",
      attrs: { class: "send-btn" },
      onrender() {
        this.remove();
      }
    }
  ]
};
const headerComponent = {
  idx: "header",
  element: "div",
  attrs: {
    class: "header-div"
  },
  children: [
    {
      element: "div",
      attrs: { style: "display:grid" },
      children: [
        { element: "div", idx: "peername", attrs: { class: "peername" } },
        { element: "div", idx: "peerstatus", attrs: { class: "peerstatus" } }
      ]
    },
    {
      element: "div",
      attrs: { class: "menuimg" },
      children: [
        {
          element: "img",
          attrs: { src: menuSvg },
          events: {
            click() {},
            contextmenu(e) {
              return e.preventDefault();
            }
          }
        }
      ]
    }
  ]
};
const contentComponent = {
  element: "div",
  idx: "contentmain",
  attrs: {
    class: "ChatContent"
  }
};
const footerComponent = {
  element: "div",
  idx: "inputbox",
  attrs: {
    class: "footer"
  },
  children: [typingBox]
};
export default {
  route: "/chat/",
  element: "div",
  attrs: {},
  async beforeRender(args) {
    const stopExec = await noAuth(this.currentRoute, this.getRouter().navData);
    if (stopExec) {
      return { stopExec };
    }
    const chatID = (args || [])[0];
    if (!chatID) {
      this.getRouter().pushStatus(500, "No Chat ID Provided");
      return { stopExec: true };
    }
  },
  onUnmount() {
    console.log("unmounting");
    Events.emit("unmount-router");
    return (
      (document.body.style.overflow = "auto"),
      (document.body.style.background = document.documentElement.style.background =
        "#e3e3e3")
    );
  },
  async onrender(args) {
    const mainContent = getElement(this, "contentmain");
    let _fromDB;
    let manager;
    document.body.style.overflow = "hidden";
    document.body.style.background = document.documentElement.style.background =
      "#fff";
    const chatID = args[0];
    const spinner = $.create("mat-spinner", {
      style: "position:absolute;top:0;bottom:0;right:0;left:0;margin-top:30%"
    });
    this.getRouter().root.appendChild(spinner);
    const dbGet = (await IDB.get(chatID)) || {};
    const meta = dbGet.meta;
    if (meta) {
      spinner.remove();
      _fromDB = true;
      manager = new MessageManager(meta, mainContent);
    }
    const data = await getChatData(chatID);
    if (manager) {
      const prev = manager._is_online;
      manager._is_online = data.is_online;
      if (
        (prev === "offline" || !manager._canUseRTC) &&
        data.is_online === "online"
      ) {
        manager._startConn();
      }
      manager.updateUI();
    }
    const _data = data;
    _data["is_online"] = undefined;
    spinner.remove();
    updateDb(chatID, _data, false);
    if (meta) {
      if (meta.peer !== data.peer || meta.chat_id !== data.chat_id) {
        console.error("error!");
        return this.getRouter().pushStatus(
          500,
          "An Error occured while loading the chat data..please reload the page and try again"
        );
      }
    }

    if (data.error) {
      return this.getRouter().pushStatus(500, data.error);
    } else {
      if (_fromDB) {
        return;
      }
      return new MessageManager(data, mainContent);
    }
  },
  children: [headerComponent, contentComponent, footerComponent]
};
