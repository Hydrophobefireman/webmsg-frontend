import { safeDefine, $ } from "../router/utils.js";

export class MatNotify extends HTMLElement {
  createTemplate() {
    const style = `.action{cursor:pointer}.__div{font-weight:bold}.action,.bxcs{background-color:#fff}input{width:90%;border-radius:20px;border:2px solid #e3e3e3;padding:4px;outline:0}.bxcs{position:fixed;width:85%;margin:auto;right:0;left:0;top:2px;border-radius:10px;height:auto;padding:10px;z-index:20;box-shadow:0 2px 8px 0 #04040426}.action{color:#4749e4;font-weight:700;border:none;outline:0}`;
    const el = $.create("div", { class: "bxcs" });
    const ttl = $.create("div", { class: "__div", textContent: this.title });
    const body = $.create("div", {
      textContent: this.body,
      class: "body"
      //   events: { click: this.bodyOnClick }
    });
    const action1 = $.create("button", {
      class: "action",
      textContent: this.action1
    });

    const actionbar = $.create("div");
    el.appendChild(ttl);
    el.appendChild(body);
    el.appendChild(actionbar);
    actionbar.appendChild(action1);
    const tmpl = $.create("template");
    tmpl.innerHTML = el.outerHTML + `<style>${style}</style>`;
    return tmpl;
  }
  startTick(timer = 4000) {
    this.$$timer = setTimeout(() => this.remove(), timer);
  }
  constructor(
    title,
    body,
    bodyOnClick,
    action1,
    action1onClick,
    input = null,
    onInput
  ) {
    super();
    this.title = title;
    this.body = body;
    this.bodyOnClick = bodyOnClick;
    this.action1 = action1;
    this.action1onClick = action1onClick || {};
    this.input = input;
    const e = this.createTemplate(),
      f = this.attachShadow({ mode: "open" });
    f.appendChild(e.content.cloneNode(!0));
    f.querySelector(".body").onclick = () => {
      bodyOnClick();
    };
    if (this.action1onClick.showInput) {
      let inp;
      const action = f.querySelector(".action");
      if (this.input) {
        inp = $.create("input", { id: "input" });
      }
      inp.onkeydown = e => {
        if (e.keyCode === 13) {
          return inp.replaceWith(action), onInput(e), this.remove();
        }
      };
      action.onclick = () => {
        action.replaceWith(inp);
        inp.focus();
        clearTimeout(this.$$timer);
        // this.remove();
      };
    } else {
      f.querySelector(".action").onclick = arg => action1onClick(arg);
    }
  }
}
safeDefine("mat-notify", MatNotify);
