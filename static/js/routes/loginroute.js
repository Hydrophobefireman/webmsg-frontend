import { getElement, load, urlencode, parseHash } from "../router/utils.js";
import { Requests as requests, retry, matInput, utilService } from "../ext.js";

const _errboxVisible = e => {
  const err = getElement(e, "__errorbox__");
  err.textContent = "Loading..";
  err.attrs.style.visibility = "visible";
  err.reRender(err);
  return err;
};
const _responses = {
  login: {
    fields_empty_or_session_error:
      "Check Your Username and Password or try to reload the page",
    no_such_user: "No Such User Exists",
    incorrect_password: "incorrect password"
  },
  register: {
    fields_empty_or_session_error:
      "Check Your Username and Password or try to reload the page",
    bad_request: "Bad Username or Password",
    username_taken: "Username Already Taken"
  }
};

function sendSignupReq(e) {
  const err = _errboxVisible(e);
  const user = getElement(e, "signupUserInput");
  const pass = getElement(e, "signupPasswordInput");
  if (user.attrs.hasError || e.attrs.hasError || pass.hasError) {
    return;
  }
  const username = user.$$element.value;
  const password = pass.$$element.value;
  const passwordConf = e.$$element.value;
  retry(
    async () => {
      const resp = await requests.post(
        "/register/check/",
        true,
        urlencode({
          user: username,
          password,
          checkpw: passwordConf,
          integrity: await utilService.getIntegrity()
        })
      );
      const data = await resp.json();
      if (!resp.ok || data.error) {
        const _err = _responses.register[data.error];
        err.textContent = _err || "An unknown error occured on our end..";
        return err.reRender(err);
      }
      if (data.success) {
        err.textContent = "Account Created. Please Login";
        return err.reRender(err);
      }
    },
    2,
    () =>
      (err.$$element.textContent = "An Unknown error occured..please try again")
  );
}

function sendLoginReq(e) {
  const err = _errboxVisible(e);
  const user = getElement(e, "loginUserInput");
  if (user.attrs.hasError || e.attrs.hasError) {
    return;
  }
  const username = user.$$element.value;
  const password = e.$$element.value;
  return retry(
    async () => {
      const resp = await requests.post(
        "/login/check/",
        true,
        urlencode({
          user: username,
          password,
          integrity: await utilService.getIntegrity()
        })
      );
      const data = await resp.json();
      if (!resp.ok || data.error) {
        const _err = _responses.login[data.error];
        err.textContent = _err || "An unknown error occured on our end..";
        return err.reRender(err);
      }
      if (data.success) {
        err.$$element.textContent = "Authenticated";
        const { qs } = parseHash(location);
        const params = new URLSearchParams(qs);
        const redir = params.get("continue");
        if (redir) {
          load(redir);
        } else {
          load(`/u/${data.user}`);
        }
        err.textContent = "";
        return err.reRender(err);
      }
    },
    2,
    e => (
      console.log(e),
      (err.textContent = "An error occured..please try again"),
      err.reRender(err)
    )
  );
}

function __inputChecker(a, b) {
  const c = (this.attrs.value || b.target.value).trim(),
    d = getElement(this, `${a}UserPH`);
  if (
    (d.attrs.class.delete("error"),
    (d.attrs.textContent = "username"),
    d.update(),
    c)
  ) {
    if (!isValid(c)) {
      d.attrs.class.add("error");
      d.attrs.textContent = "Invalid Username";
      d.update();
      return (this.attrs.hasError = true);
    } else {
      this.attrs.hasError = !1;
    }
    13 === b.keyCode && getElement(this, `${a}PasswordInput`).$$element.focus();
  }
}

function loginInputCheck(e) {
  __inputChecker.call(this, "login", e);
}

function signupInputCheck(e) {
  __inputChecker.call(this, "signup", e);
}
const isValid = a => {
  if (0 < a.length) return /^[0-9a-zA-Z_.-]+$/.test(a);
};

function passwordInputCheck(a, b, c = () => {}, d = "password") {
  const g = a.target.value,
    h = getElement(this, b);
  if (
    ((h.attrs.textContent = d),
    h.attrs.class.delete("error"),
    h.update(),
    13 === a.keyCode)
  )
    return !g.trim() || 4 > g.length
      ? (h.attrs.class.add("error"),
        (h.attrs.textContent = "Invalid Password"),
        h.update(),
        (this.attrs.hasError = !0))
      : ((this.attrs.hasError = !1), c());
}

const loginUserDiv = matInput("loginUserPH", "username", "loginUserInput", {
  keydown: loginInputCheck,
  keyup(e) {
    this.attrs.value = this.$$element.value;
    loginInputCheck.call(this, e);
  }
});

const signupUserDiv = matInput("signupUserPH", "username", "signupUserInput", {
  keydown: signupInputCheck,
  keyup(e) {
    this.attrs.value = this.$$element.value;
    loginInputCheck.call(this, e);
  }
});

const loginPasswordDiv = matInput(
  "loginPasswordPH",
  "password",
  "loginPasswordInput",
  {
    keydown(e) {
      return passwordInputCheck.call(this, e, "loginPasswordPH", () =>
        sendLoginReq(this)
      );
    },
    keyup() {
      this.attrs.value = this.$$element.value;
    }
  },
  !0
);
const signupPasswordDiv = matInput(
  "signupPasswordPH",
  "password",
  "signupPasswordInput",
  {
    keydown(e) {
      return passwordInputCheck.call(this, e, "signupPasswordPH", () =>
        getElement(this, "signupPassConfInput").$$element.focus()
      );
    },
    keyup() {
      this.attrs.value = this.$$element.value;
    }
  },
  !0
);

const signupPassConfDiv = matInput(
  "signupPassConfPH",
  "confirm password",
  "signupPassConfInput",
  {
    keydown(e) {
      return passwordInputCheck.call(
        this,
        e,
        "signupPassConfPH",
        () => sendSignupReq(this),
        "confirm password"
      );
    },
    keyup() {
      this.attrs.value = this.$$element.value;
    }
  },
  !0
);
const loginButton = {
  idx: "loginBtn",
  element: "button",
  attrs: {
    style: {
      "border-radius": "5px",
      margin: "10px"
    },
    class: ["ripple", "actionbtn"]
  },
  textContent: "Login",
  events: {
    click() {
      const c = getElement(this, "sgupbx"),
        d = getElement(this, "loginBox");
      c.remove();
      d.add();
    }
  }
};
const signupButton = {
  element: "button",
  attrs: {
    style: {
      "border-radius": "5px",
      margin: "10px"
    },
    class: ["ripple", "actionbtn"]
  },
  textContent: "signup",
  events: {
    click() {
      const c = getElement(this, "sgupbx"),
        d = getElement(this, "loginBox");
      c.add();
      d.remove();
    }
  }
};
const loginBox = {
  element: "div",
  attrs: {
    id: "loginBox",
    style: {
      border: "2px solid #e3e3e3"
    }
  },
  onrender() {
    this.remove();
  },
  children: [loginUserDiv, loginPasswordDiv],
  idx: "loginBox"
};
const signupBox = {
  element: "div",
  attrs: {
    id: "signupBox",
    style: {
      border: "2px solid #e3e3e3"
    }
  },
  onrender() {
    this.remove();
  },
  children: [signupUserDiv, signupPasswordDiv, signupPassConfDiv],
  idx: "sgupbx"
};
const errsAndNotices = {
  element: "div",
  idx: "__errorbox__",
  attrs: {
    style: {
      visibility: "hidden",
      color: "#ff0000",
      "font-weight": "bold"
    },
    textContent: ""
  }
};
export default {
  element: "div",
  attrs: {
    id: "auth-component",
    style: {
      margin: "auto",
      "text-align": "center"
    }
  },
  async beforeRender() {
    if (await utilService.getUser(true)) {
      const { qs } = parseHash(location);
      const params = new URLSearchParams(qs);
      const redir = params.get("continue");
      if (redir) {
        load(redir);
        return { stopExec: true };
      } else {
        const next = `/u/${utilService.HERE}`;
        if (this.getRouter().isUserGoingBack(next)) {
          return { stopExec: true };
        }
        load(next);
        return { stopExec: true };
      }
    }
  },
  onrender: () => console.log("Rendered Login Component"),
  children: [loginButton, signupButton, errsAndNotices, loginBox, signupBox],
  route: "/"
};
