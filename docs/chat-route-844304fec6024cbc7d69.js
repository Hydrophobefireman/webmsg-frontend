(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{216:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n(137);var r=n(17),a=n.n(r),s=n(53),i=n.n(s),c=n(37),o=n.n(c),u=n(18),d=n.n(u),l=n(54),p=n.n(l),h=n(55),_=n.n(h),f=n(1),m=function(e){function t(e,n,r,s,c){var u,d=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,l=arguments.length>6?arguments[6]:void 0;a()(this,t),(u=i()(this,o()(t).call(this))).title=e,u.body=n,u.bodyOnClick=r,u.action1=s,u.action1onClick=c||{},u.input=d;var p=u.createTemplate(),h=u.attachShadow({mode:"open"});if(h.appendChild(p.content.cloneNode(!0)),h.querySelector(".body").onclick=function(){r()},u.action1onClick.showInput){var _,m=h.querySelector(".action");u.input&&(_=f.a.create("input",{id:"input"})),_.onkeydown=function(e){if(13===e.keyCode)return _.replaceWith(m),l(e),u.remove()},m.onclick=function(){m.replaceWith(_),_.focus(),clearTimeout(u.$$timer)}}else h.querySelector(".action").onclick=function(e){return c(e)};return u}return p()(t,e),d()(t,[{key:"createTemplate",value:function(){var e=f.a.create("div",{class:"bxcs"}),t=f.a.create("div",{class:"__div",textContent:this.title}),n=f.a.create("div",{textContent:this.body,class:"body"}),r=f.a.create("button",{class:"action",textContent:this.action1}),a=f.a.create("div");e.appendChild(t),e.appendChild(n),e.appendChild(a),a.appendChild(r);var s=f.a.create("template");return s.innerHTML=e.outerHTML+"<style>".concat(".action{cursor:pointer}.__div{font-weight:bold}.action,.bxcs{background-color:#fff}input{width:90%;border-radius:20px;border:2px solid #e3e3e3;padding:4px;outline:0}.bxcs{position:fixed;width:85%;margin:auto;right:0;left:0;top:2px;border-radius:10px;height:auto;padding:10px;z-index:20;box-shadow:0 2px 8px 0 #04040426}.action{color:#4749e4;font-weight:700;border:none;outline:0}","</style>"),s}},{key:"startTick",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4e3;this.$$timer=setTimeout((function(){return e.remove()}),t)}}]),t}(_()(HTMLElement));Object(f.l)("mat-notify",m)},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r),s=(n(30),n(7)),i=n.n(s),c=n(1),o=n(216),u=n(51),d=function(e){if(Object(c.k)(location.href).path==="/chat/".concat(e.chat_id))console.log("not showing notification for current chat");else{var t;t=e.message&&e.message.media?"media message":e.message;var n=new o.a(e.sender,t,(function(){return Object(c.i)("/chat/".concat(e.chat_id))}),"reply",{showInput:!0},!0,function(){var t=i()(a.a.mark((function t(n){var r,s,i,o,d;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.target.value,(s=Object(u.d)()).isUsable&&s.socket){t.next=5;break}return t.next=5,s.startConn("_/data/");case 5:return i=Object(c.c)(),t.next=8,u.h.getUser(!1,!0);case 8:o=t.sent,d={details:{chat_id:e.chat_id,data:{sender:o,receiver:e.sender,message:r,stamp:i}}},u.b.post("/api/instant-message/",!0,JSON.stringify(d),{"content-type":"application/json"}),s.send({type:"message-relay",peer:e.sender,sender:o,data:{peer:e.sender,sender:o,type:"message-relay",data:{stamp:i,message:r,chat_id:e.chat_id,peer:e.sender}}});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());document.body.appendChild(n),n.startTick(2e3)}}},218:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYuNSA2djExLjVjMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTRWNWMwLTEuMzggMS4xMi0yLjUgMi41LTIuNXMyLjUgMS4xMiAyLjUgMi41djEwLjVjMCAuNTUtLjQ1IDEtMSAxcy0xLS40NS0xLTFWNkgxMHY5LjVjMCAxLjM4IDEuMTIgMi41IDIuNSAyLjVzMi41LTEuMTIgMi41LTIuNVY1YzAtMi4yMS0xLjc5LTQtNC00UzcgMi43OSA3IDV2MTIuNWMwIDMuMDQgMi40NiA1LjUgNS41IDUuNXM1LjUtMi40NiA1LjUtNS41VjZoLTEuNXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+Cg=="},219:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZwogIHdpZHRoPSI0MCIKICBoZWlnaHQ9IjQwIgogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCj4KICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIj48L3BhdGg+CiAgPHBhdGgKICAgIGQ9Ik0xMiA4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptMCAyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnoiCiAgPjwvcGF0aD4KPC9zdmc+Cg=="},220:function(e,t,n){var r=n(2),a=n(221);r({global:!0,forced:parseInt!=a},{parseInt:a})},221:function(e,t,n){var r=n(3),a=n(140).trim,s=n(96),i=r.parseInt,c=/^[+-]?0[Xx]/,o=8!==i(s+"08")||22!==i(s+"0x16");e.exports=o?function(e,t){var n=a(String(e));return i(n,t>>>0||(c.test(n)?16:10))}:i},223:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=(n(30),n(7)),i=n.n(s),c=n(218),o=n.n(c),u=n(219),d=n.n(u),l=n(1),p=(n(94),n(138),n(139),n(69),n(141),n(56),n(31),n(95),n(142),n(98),n(143),n(144),n(70),n(36),n(220),n(52),n(93),n(145),n(68),n(137),n(135)),h=n.n(p),_=n(53),f=n.n(_),m=n(37),g=n.n(m),v=n(71),b=n.n(v),y=n(54),x=n.n(y),k=n(17),I=n.n(k),C=n(18),w=n.n(C),M=n(51),j=n(216),S=n(99),O=n(55),T=n.n(O),D=document.createElement("template");D.innerHTML="<style>:host{display:flex;flex-direction:column}:host.received{text-align:left}:host.sent{text-align:right}[message]{-webkit-tap-highlight-color:transparent;text-align:left;margin:5px;margin-bottom:0px;width:fit-content;border-radius:15px;max-width:45%;display:inline-flex;padding:6px;cursor:pointer;overflow-wrap:break-word;word-break:break-word}[message].sent{background:#d2e3fc;color:#174ea6;margin-left:auto}[message].received{margin-right:auto;background-color:#f1f3f4;color:#000000de}[time]{display:flex;font-weight:200;color: #0000005e;font-size:12px;margin:10px;margin-top:2px;-webkit-transition:.2s;transition:.2s;-webkit-transform:translate(0,0);transform:translate(0,0)}[time].sent{flex-direction:row-reverse;}[time].received{flex-direction:row}</style><div message></div><div time></div>";var L=function(e){function t(e,n,r,a){var s,i=e.message,c=e.sender,o=e.receiver,u=e.stamp,d=e.read,l=e.rstamp,p=e.seen_read,h=e.edited;I()(this,t),(s=f()(this,g()(t).call(this))).message=i,"string"!=typeof i&&(s.media=s.message.media,s.mediaURL=s.message.mediaURL),s.sender=c,s.receiver=o,s.stamp=u,s.edited=h,s.read=d,s.rstamp=l,s.seen_read=p,s.$id=n,s.user=a;var _=s.attachShadow({mode:"open"});_.appendChild(D.content.cloneNode(!0)),s.msg=_.querySelector("div[message]"),s.time=_.querySelector("div[time]"),s.setAttribute("msg-id",s.$id),s.sender===r?(s.msg.classList.add("received"),s.time.classList.add("received"),s.classList.add("received")):s.sender===a&&(s.msg.classList.add("sent"),s.time.classList.add("sent"),s.classList.add("sent"));try{s.msg.appendChild(s._messageOrMedia())}catch(e){console.log(e,b()(s))}return s.time.textContent=s._GetInformativeTime(),s.onclick=function(){},s}return x()(t,e),w()(t,[{key:"setRead",value:function(e,t){this.read=e,this.rstamp=t,this.shadowRoot.querySelector("div[time]").textContent=this._GetInformativeTime()}},{key:"_messageOrMedia",value:function(){var e=this;if(this.media){var t=document.createElement("img");return t.src=o.a,this.msg.onclick=function(){var t=document.createElement("a");t.href=e.mediaURL,t.target="__blank",t.click()},t}if(this.message)return document.createTextNode(this.message)}},{key:"_GetInformativeTime",value:function(){var e,t="",n="";return this.edited&&(n="[edited]"),this.sender!==this.user?e=this.stamp:this.read?(this.read&&(t="read "),e=this.rstamp):(t="sent ",e=this.stamp),n+t+Object(l.n)(e)}}]),t}(T()(HTMLElement));Object(l.l)("text-message",L);var E=n(217);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]},R=function(e){var t=l.a.create("div",{notification:!0,textContent:e});return t.onclick=function(){return t.remove()},t},B=function(e){var t,n,r,s,c;function o(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object(M.d)();I()(this,o),n=f()(this,g()(o).call(this)),clearInterval(n.__socketInterval__),l.b.destroyAll(),l.b.listen("attach-img",(function(e){var t=e.detail;return n._sendBinaryFile.call(b()(n),t)})),l.b.listen("chat_message",(function(e){return n._onUserMessage.call(b()(n),e)})),l.b.listen("on-dataChannel",(function(e){return n._onDataChannel(e)})),l.b.listen("unmount-router",(function(){l.b.destroyAll(),n._pc&&(n._socket.close(),clearInterval(n.__socketInterval__),n.__unrendering__=!0,n._pc.close(),n._pc=n._dc=n._peer=n._chat_id=n._isOfferer=null)})),n.__unrendering__=!1,n.__USEWEBSOCKETFALLBACK__=!0,n._isOfferer=null,n._canUseRTC=!0;var a=e.user,s=e.chat_id,i=e.peer,c=e.is_online;return n._user=a,n._peer=i,n._is_online=c,n._chat_id=s,n._textarea=t,n._input=Object(l.e)(n._textarea,"chat_type"),n._submit_button=Object(l.e)(n._textarea,"sendbtn"),n._socket=r,n._getUpdatesFromServer(),n._startConn(),n._setUpDataInputListeners(),n}return x()(o,e),w()(o,[{key:"updateUI",value:function(){try{var e=this.currentChatData,t=e.peer,n=e.is_online;this.peerbox=Object(l.e)(this._textarea,"peername"),this.peerstatus=Object(l.e)(this._textarea,"peerstatus"),this.peerbox.$$element.textContent=t,this.peerstatus.$$element.textContent=n}catch(e){}}},{key:"_onUserMessage",value:function(e){var t,n=this,r=e.detail;try{t=Object(l.h)(r)?r:JSON.parse(r)}catch(e){return console.warn(e)}var a=t,s=a.type,i=a.sender,c=a.data;if("message-relay"===s){this._lastMessageID+=1;var o={},u=A({},c,{sender:i,receiver:c.peer});o[this._lastMessageID]=u,console.log("UPDATE-----\x3e",o),F(u.chat_id,o);var d=new L(u,this._lastMessageID,this._peer,this._user);return this._textarea.$$element.appendChild(d),d.scrollIntoView(),this._lastMessageID}"typing"===s&&i===this._peer&&(clearTimeout(this.___typingTimeout),this.peerstatus.$$element.textContent="typing",this.___typingTimeout=setTimeout((function(){n.peerstatus.$$element.textContent=n._is_online}),700))}},{key:"_GenerateMessageTemplate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(l.c)();if(!e)throw new Error("Invalid Values");var n={type:"message-relay",peer:this._peer,sender:this._user,data:{chat_id:this._chat_id,msgid:this._lastMessageID,stamp:t,peer:this._peer}};return n.data.message=e,n}},{key:"_sendTypingIndicator",value:function(){this._dc&&"open"===this._dc.readyState&&this._dc.send(JSON.stringify({type:"typing",sender:this._user}))}},{key:"__sendMessage",value:function(e){return this.__USEWEBSOCKETFALLBACK__?this._socket.send(e):this._dc.send(JSON.stringify(e))}},{key:"_sendMessageAndUpdateDataBase",value:function(e){var t=this._GenerateMessageTemplate(e);this._input.$$element.value="",this.__sendMessage(t);var n=this._onUserMessage({detail:A({},t,{sender:this._user,receiver:this._peer})});this._sendServerPing(e,n)}},{key:"_sendServerPing",value:(c=i()(a.a.mark((function e(t,n){var r,s,i,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={chat_id:this._chat_id,data:{sender:this._user,receiver:this._peer,message:t,stamp:Object(l.c)()}},e.next=3,M.b.post("/api/instant-message/",!0,JSON.stringify({details:r}),{"content-type":"application/json"});case 3:return s=e.sent,e.next=6,s.json();case 6:i=e.sent,c=i.data,parseInt(c)!==parseInt(n)&&console.log("check for errors");case 9:case"end":return e.stop()}}),e,this)}))),function(e,t){return c.apply(this,arguments)})},{key:"_setUpDataInputListeners",value:function(){var e=this;this._input.events.keydown=function(t){return W.call(e._input,t,(function(t){return e._sendMessageAndUpdateDataBase.call(e,t)}),(function(){return e._sendTypingIndicator.call(e)}))},this._input.events.keyup=function(){return H.call(e._input)},this._input.reRender(),this._submit_button.events=this._submit_button.events||{},this._submit_button.events.click=function(){return e._sendMessageAndUpdateDataBase.call(e,e._input.$$element.value)},this._submit_button.reRender()}},{key:"_updateMessages",value:(s=i()(a.a.mark((function e(t){var n,r,s,i,c,o,u,d,l,p,h,_;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!0,r=!1,s=void 0,e.prev=3,i=t[Symbol.iterator]();case 5:if(n=(c=i.next()).done){e.next=23;break}if(o=c.value,u=o.update_type,d=o.msg,l=o.rstamp,p=o.chat_id,"read"!==u){e.next=20;break}return e.next=11,S.a.get(p);case 11:if(!(h=e.sent)){e.next=19;break}return(_=h.chats)[d].read=!0,_[d].rstamp=l,h.chats=_,e.next=19,S.a.set(p,h);case 19:this.getElementByMessageId(d).setRead(!0,l);case 20:n=!0,e.next=5;break;case 23:e.next=29;break;case 25:e.prev=25,e.t0=e.catch(3),r=!0,s=e.t0;case 29:e.prev=29,e.prev=30,n||null==i.return||i.return();case 32:if(e.prev=32,!r){e.next=35;break}throw s;case 35:return e.finish(32);case 36:return e.finish(29);case 37:case"end":return e.stop()}}),e,this,[[3,25,29,37],[30,,32,36]])}))),function(e){return s.apply(this,arguments)})},{key:"_renderFetchedMessages",value:function(e){for(var t=Object.keys(e),n=document.createElement("div"),r=0,a=t;r<a.length;r++){var s=a[r],i=e[s];if(this._lastMessageID=parseInt(s),!this.getElementByMessageId(s)){var c=new L(i,s,this._peer,this._user);n.appendChild(c),this._textarea.$$element.appendChild(n)}}}},{key:"_getUpdatesFromServer",value:(r=i()(a.a.mark((function e(){var t,n,r,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get(this._chat_id);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return t=e.t0,console.log("IDB Data Recieved"),n=t.chats||{},this._renderFetchedMessages(n),this._lastMessageID=Object.keys(n).length-1,this._latestMessageElement&&this._latestMessageElement.scrollIntoView(),e.next=13,M.b.post("/api/updates/",!0,Object(l.o)({chat_id:this._chat_id,fetch_from:this._lastMessageID}));case 13:return r=e.sent,e.next=16,r.json();case 16:return s=e.sent,i=s.message_data.messages,this._renderFetchedMessages(i),e.next=21,F(this._chat_id,i);case 21:this._latestMessageElement&&this._latestMessageElement.scrollIntoView();case 22:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"_sendBinaryFile",value:(n=i()(a.a.mark((function e(t){var n,r,s,i,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=R("Sending File to ".concat(this._peer)),document.body.appendChild(n),n.style.transform="translate(0px,0px)",setTimeout((function(){return n.remove()}),1500),r=new Response(t),e.next=7,r.arrayBuffer();case 7:return s=e.sent,this._socket.send({type:"binary-file",data:{},peer:this._peer}),e.next=11,M.b.post("/@/binary/",!0,s);case 11:return i=e.sent,e.next=14,i.json();case 14:c=e.sent,o=c.url,this._sendMessageAndUpdateDataBase({media:!0,mediaURL:o});case 17:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"getElementByMessageId",value:function(e){return l.a.q('text-message[msg-id="'.concat(e,'"]'))}},{key:"__updateTimeout__",value:function(){var e=this;this.__socketInterval__=setInterval(i()(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._getUnreadMessages();case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return");case 5:e._socket.send({type:"fetch-update",data:{msgids:n,chat_id:e._chat_id},peer:e._peer});case 6:case"end":return t.stop()}}),t)}))),5e3)}},{key:"_getUnreadMessages",value:(t=i()(a.a.mark((function e(){var t,n,r,s,i,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,S.a.get(this._chat_id);case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0={};case 6:if(n=e.t0,!(r=n.chats)){e.next=22;break}s=0,i=Object.keys(r);case 10:if(!(s<i.length)){e.next=21;break}if(c=i[s],!(o=r[c]).read&&o.sender===this._user){e.next=17;break}return e.abrupt("continue",18);case 17:t.push(c);case 18:s++,e.next=10;break;case 21:return e.abrupt("return",t.length?t:null);case 22:return e.abrupt("return",null);case 23:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"_latestMessageElement",get:function(){if(this._lastMessageID)return this.getElementByMessageId(this._lastMessageID)}}]),o}(function(){function e(){I()(this,e)}var t,n,r,s;return w()(e,[{key:"_onIceCandidate",value:function(e){var t=e.candidate;if(t&&this._pc)return this._socket.send({type:"rtc_data",data:{icecandidate:t},peer:this._peer})}},{key:"_iceStateChange",value:function(){var e=this;this._pc.oniceconnectionstatechange=i()(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.__unrendering__){t.next=3;break}return t.abrupt("return");case 3:if(n=e._pc.iceConnectionState,!["closed","disconnected","failed"].includes(n)){t.next=17;break}return console.log("Connection is Dead.."),e._isOfferer=null,e._pc=null,e._dc=null,e.__USEWEBSOCKETFALLBACK__=!0,setTimeout(i()(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._startConn();case 2:case"end":return t.stop()}}),t)}))),2),t.next=13,N(e._chat_id);case 13:r=t.sent,e.peer=r.peer,e._is_online=r.is_online,e.updateUI&&e.updateUI();case 17:t.next=21;break;case 19:t.prev=19,t.t0=t.catch(0);case 21:case"end":return t.stop()}}),t,null,[[0,19]])})))}},{key:"_onDataChannel",value:function(){console.log("[isOfferer:".concat(this._isOfferer,"] started data channel"),this._dc),this._dc.addEventListener("message",(function(e){var t=e.data;return l.b.emit("chat_message",t)})),this.__USEWEBSOCKETFALLBACK__=!1}},{key:"_startRTCPings",value:(s=i()(a.a.mark((function e(){var t,n,r=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this._isOfferer,this._pc=new RTCPeerConnection(U),this._pc.onicecandidate=function(e){return r._onIceCandidate(e)},this._pc.oniceconnectionstatechange=function(e){return r._iceStateChange(e)},!t){e.next=15;break}return this._dc=this._pc.createDataChannel(Object(l.d)()),e.next=8,this._pc.createOffer();case 8:return n=e.sent,e.next=11,this._pc.setLocalDescription(n);case 11:this._socket.send({type:"rtc_data",data:{rtc:"offer",js:n},peer:this._peer}),l.b.emit("on-dataChannel"),e.next=16;break;case 15:this._pc.ondatachannel=function(e){var t=e.channel;return r._dc=t,l.b.emit("on-dataChannel")};case 16:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"_parseRTCData",value:(r=i()(a.a.mark((function e(t){var n,r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if(console.log("Got rtc Data--\x3e",t),n=t.rtc,r=t.js,!(s=t.icecandidate)){e.next=11;break}if(!this._pc){e.next=11;break}return e.next=8,this._pc.addIceCandidate(s);case 8:return e.abrupt("return",e.sent);case 11:if("offer"!==n){e.next=21;break}return e.next=14,this._pc.setRemoteDescription(r);case 14:return e.t0=this._pc,e.next=17,this._pc.createAnswer();case 17:return e.t1=e.sent,e.next=20,e.t0.setLocalDescription.call(e.t0,e.t1);case 20:return e.abrupt("return",this._socket.send({type:"rtc_data",data:{rtc:"answer",js:this._pc.localDescription},peer:this._peer}));case 21:if("answer"!==n){e.next=24;break}return e.next=24,this._pc.setRemoteDescription(r);case 24:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"_onWSmessage",value:function(e){var t=e.data,n=void 0===t?{}:t,r=JSON.parse(n),a=r.type,s=r.data,i=r.meta;if(i.from!==this._peer&&i.from!==this._user){if("start_chat"!==a&&"online_status"!==a){if("message-relay"===a){if(s.sender=i.from,s.sender===this._user)return;return Object(E.a)(s)}return}var c=new j.a("Start a Chat","".concat(i.from," is ready to chat!"),(function(){return Object(l.i)("/chat/".concat(s.common_chat_id))}),"Chat",console.log);return document.body.appendChild(c),c.startTick()}if(this._is_online||(this._is_online="--",this.updateUI()),"online_status"===a){var o=s.isonline;return this._is_online=o?"online":"offline",this.updateUI(),o?this._socket.send({type:"get_role",peer:this._peer}):void 0}if("get_role"===a)return this._socket.send({type:"send_role",data:{is_offerer:!!this._isOfferer},peer:this._peer});if("set_role"===a){if("boolean"==typeof this._isOfferer)return;return this._isOfferer=s.is_offerer,l.b.emit("use-rtc")}if("rtc_data"===a&&this._parseRTCData(s),"message-relay"===a&&l.b.emit("chat_message",s),"binary-file"===a){var u=R("".concat(this._peer," is sending a file"));document.body.appendChild(u),u.style.transform="translate(0px,0px)",setTimeout((function(){return u.remove()}),1500)}if("get-update"==a){var d=s.msgid;this.getElementByMessageId(d)&&this._socket.send({type:"update",peer:this._peer,data:{update_type:"read-update",details:{chat_id:this._chat_id,read:d,rstamp:Object(l.c)()}}})}"chat-update"===a&&this._updateMessages([s]),"ping-update"==a&&this._updateMessages(s)}},{key:"_startConn",value:(n=i()(a.a.mark((function e(){var t=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.updateUI(),l.b.EventCache["use-rtc"]&&l.b.detroyEvt("use-rtc"),l.b.listen("use-rtc",(function(e){return e?t._startRTCPings():t._canUseRTC=!1})),this._pc=null,this._isOfferer=null,this._dc=null,this._socket.isUsable&&this._socket.socket){e.next=10;break}return e.next=9,this._socket.startConn("_/data/");case 9:this.__updateTimeout__();case 10:if(this._socket.send({type:"start_chat",peer:this._peer}),this._socket.onmessage=function(e){return t._onWSmessage.call(t,e)},"offline"!=this._is_online){e.next=15;break}return console.log("use websockets"),e.abrupt("return",this._canUseRTC=!1);case 15:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"currentChatData",get:function(){return{chatID:this.chatID,user:this._user,peer:this._peer,is_online:this._is_online}}},{key:"supportsRTC",get:function(){return!!window.RTCPeerConnection&&!!window.RTCDataChannel}},{key:"UseRTC",get:function(){return this.supportsRTC&&(this.PeerObject||{}).isOnline&&this._canUseRTC}}],[{key:"validateChatId",value:(t=i()(a.a.mark((function e(t){var n,r,s,i,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.b.post("/api/chat-stats",!0,Object(l.o)({chat_id:t}));case 2:return n=e.sent,e.next=5,n.json();case 5:if(!(r=e.sent).$$serviceWorker$$){e.next=8;break}return e.abrupt("return",r);case 8:if(!r.error){e.next=10;break}return e.abrupt("return",{error:r.error});case 10:return s=r.HERE,i=r.chat_with,c=r.chat_id,o=r.is_online,e.abrupt("return",{user:s,chat_id:c,peer:i,is_online:o});case 12:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}());function N(e){return P.apply(this,arguments)}function P(){return(P=i()(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.validateChatId(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t,n){return 85===e.keyCode&&e.ctrlKey?(e.preventDefault(),this.$$element.value=this.$$element.value.slice(this.$$element.selectionStart,this.$$element.value.length),this.$$element.setSelectionRange(0,0)):13===e.keyCode?(this.attrs.value||"").trim()&&t(this.$$element.value):this.attrs.value=this.$$element.value,n()}function H(){var e=(this.$$element.value||"").trim(),t=Object(l.e)(this,"sendbtn"),n=Object(l.e)(this,"attachbtn");return e?n.$$element.parentElement&&(n.$$element.style.transform="translate(200px,0px)",setTimeout((function(){return t.add(),n.remove()}),170)):(n.add(),t.remove(),setTimeout((function(){return n.$$element.style.transform="translate(0px,0px)"}),20)),this.attrs.value=this.$$element.value}function F(e,t){return z.apply(this,arguments)}function z(){return(z=i()(a.a.mark((function e(t,n){var r,s,i,c,o=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!(o.length>2&&void 0!==o[2])||o[2],e.next=3,S.a.get(t);case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0={};case 6:if(s=e.t0,!r){e.next=16;break}return i=s.chats,c=A({},i,{},n),s.chats=c,e.next=13,S.a.set(t,s);case 13:return e.abrupt("return",e.sent);case 16:return s.meta=n,e.next=19,S.a.set(t,s);case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G,J,K={element:"div",attrs:{class:"inpbox_"},children:[{element:"input",idx:"chat_type",attrs:{class:"textBox",spellcheck:"false",autocomplete:"none"},events:{}},{element:"img",idx:"attachbtn",events:{click:function(){var e=l.a.create("input",{type:"file"});e.oninput=function(){return l.b.emit("attach-img",e.files[0])},e.click()},contextmenu:function(e){e.preventDefault()}},attrs:{src:o.a,class:"attach-img"}},{idx:"sendbtn",element:"button",textContent:"Send",attrs:{class:"send-btn"},onrender:function(){this.remove()}}]},V={idx:"header",element:"div",attrs:{class:"header-div"},children:[{element:"div",attrs:{style:"display:grid"},children:[{element:"div",idx:"peername",attrs:{class:"peername"}},{element:"div",idx:"peerstatus",attrs:{class:"peerstatus"}}]},{element:"div",attrs:{class:"menuimg"},children:[{element:"img",attrs:{src:d.a},events:{click:function(){},contextmenu:function(e){return e.preventDefault()}}}]}]},Q={element:"div",idx:"inputbox",attrs:{class:"footer"},children:[K]};t.default={route:"/chat/",element:"div",attrs:{},beforeRender:(J=i()(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.f)(this.currentRoute,this.getRouter().navData);case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",{stopExec:n});case 5:if((t||[])[0]){e.next=9;break}return this.getRouter().pushStatus(500,"No Chat ID Provided"),e.abrupt("return",{stopExec:!0});case 9:case"end":return e.stop()}}),e,this)}))),function(e){return J.apply(this,arguments)}),onUnmount:function(){return console.log("unmounting"),l.b.emit("unmount-router"),document.body.style.overflow="auto",document.body.style.background=document.documentElement.style.background="#e3e3e3"},onrender:(G=i()(a.a.mark((function e(t){var n,r,s,i,c,o,u,d,p,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(l.e)(this,"contentmain"),document.body.style.overflow="hidden",document.body.style.background=document.documentElement.style.background="#fff",i=t[0],c=l.a.create("mat-spinner",{style:"position:absolute;top:0;bottom:0;right:0;left:0;margin-top:30%"}),this.getRouter().root.appendChild(c),e.next=8,S.a.get(i);case 8:if(e.t0=e.sent,e.t0){e.next=11;break}e.t0={};case 11:return o=e.t0,(u=o.meta)&&(c.remove(),r=!0,s=new B(u,n)),e.next=16,N(i);case 16:if(!(d=e.sent).$$serviceWorker$$){e.next=19;break}return e.abrupt("return");case 19:if(s&&(p=s._is_online,s._is_online=d.is_online,"offline"!==p&&s._canUseRTC||"online"!==d.is_online||s._startConn(),s.updateUI()),(h=d).is_online=void 0,c.remove(),F(i,h,!1),!u){e.next=28;break}if(u.peer===d.peer&&u.chat_id===d.chat_id){e.next=28;break}return console.error("error!"),e.abrupt("return",this.getRouter().pushStatus(500,"An Error occured while loading the chat data..please reload the page and try again"));case 28:if(!d.error){e.next=32;break}return e.abrupt("return",this.getRouter().pushStatus(500,d.error));case 32:if(!r){e.next=34;break}return e.abrupt("return");case 34:return e.abrupt("return",new B(d,n));case 35:case"end":return e.stop()}}),e,this)}))),function(e){return G.apply(this,arguments)}),children:[V,{element:"div",idx:"contentmain",attrs:{class:"ChatContent"}},Q]}}}]);