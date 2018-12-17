import { safeDefine } from "./router/utils.js";

export class MatCheckBox extends HTMLElement {
  set checked(val) {
    const $button = this.button;
    this._checked = !!val;
    if (val) {
      $button.classList.add("clicked");
    } else {
      $button.classList.remove("clicked");
    }
    const evt = new Event("check");
    evt.checked = this.checked;
    this.dispatchEvent(evt);
  }
  set oncheck(val) {
    this.eventListener = val;
    this.addEventListener("check", val);
  }
  get checked() {
    return this._checked;
  }
  static get observedAttributes() {
    return ["checked"];
  }
  attributeChangedCallback(b, _, val) {
    let a;
    if (val === "false" || val === "0") {
      a = false;
    } else {
      a = true;
    }
    return "checked" === b ? (this.checked = a) : void 0;
  }
  _createTemplate() {
    const a = `.box{-webkit-tap-highlight-color:transparent;background-color:#fff;cursor:pointer;border-radius:100px;height:20px;width:50px;display:inline-flex;border:2px solid #e3e3e3}.button{box-shadow:0 1px 5px 0 #0009;display:block;margin-top:auto;margin-bottom:auto;height:inherit;border-radius:100%;border:none;width:20px;transition:all .2s ease-in-out 0s;cursor:pointer;outline:0}.button.clicked{margin-left:30px;background-color:#090090}`,
      b = document.createElement("div");
    b.className = "box";
    const c = document.createElement("button");
    (c.className = "button"), b.appendChild(c);
    const f = document.createElement("template"),
      g = document.createElement("style");
    return (g.innerHTML = a), (f.innerHTML = g.outerHTML + b.outerHTML), f;
  }
  constructor() {
    super();
    const e = this._createTemplate(),
      f = this.attachShadow({ mode: "open" });
    f.appendChild(e.content.cloneNode(!0));
    this.button = (() => this.shadowRoot.querySelector("button"))();

    this.addEventListener("click", e => {
      e.stopImmediatePropagation();
      if (this.checked) {
        return (this.checked = false);
      } else {
        return (this.checked = true);
      }
    });
  }
}
safeDefine("mat-checkbox", MatCheckBox);
