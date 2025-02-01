(()=>{"use strict";var n={365:(n,t,e)=>{e.d(t,{A:()=>i});var o=e(601),r=e.n(o),a=e(314),c=e.n(a)()(r());c.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Italiana&family=Playfair:wght@300;400&display=swap);"]),c.push([n.id,':root{\n  --primary-bg: #d9d9d9;\n  --menu-bg: #bababa;\n  --font-color: #000;\n\n  --font-nav: "Italiana", serif; \n  --font-content: "Playfair", serif; \n}\n\n*,*::before,*::after{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody{\n  background-color: var(--primary-bg);\n  color:var(--font-color);\n  font-family: var(--font-content);\n  width: 100dvw;\n  height: 100dvh;\n}\n\nh1{\n  font-family: var(--font-nav);\n  font-weight: 300;\n  text-transform: uppercase;\n}\n\nheader, button{\n  font-family: var(--font-nav);\n  font-size: 2rem;\n}\n\nheader{\n  display:flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  width:90%;\n}\n\n.container{\n  width: 90%;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\nnav{\n  display:flex;\n}\n\n.logo{\n  cursor: pointer;\n  font-size: 2.5rem;\n}\n\n\nbutton{\n  text-transform: uppercase;\n  background: none;\n  border:none;\n  cursor: pointer;\n}\n\nbutton::after{\n  content: "";\n  display:block;\n  width: 0;\n  height: 2px;\n  background-color: #000;\n  transition: width .3s;\n}\n\nbutton:hover::after,\n.active::after{\n  width: 100%;\n}\n\n\nbutton + button{\n  margin-left: 2rem;\n}\n\n#content{\n  margin-top: 2em;\n  height: 100%;\n}\n\n/* SECTION STYLES */\n\n/* HOME */\n.home-section{\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  /* height:calc(100vh - 600px); */\n  height:100%;\n}\n.home__title{\n  font-size: 4rem;\n}\n\n\n/* MENU */\n.menu-section{\n  display:flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.menu__title{\n  font-size: 3rem;\n  margin-bottom: 1em;\n}\n\n.menu__grid{\n  display:grid;\n  max-width: 700px;\n  grid-template-columns: repeat(3, 200px);\n  gap:2em;\n}\n\n.menu__item{\n  background-color: var(--menu-bg);\n  font-size: 2rem;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 1em;\n}\n\n/* Contact */\n.contact-section{\n  display:flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* max-width: 500px; */\n}\n.contact__title{\n  text-transform: uppercase;\n  font-size: 4rem;\n}\n\n.contact__item{\n  display:flex;\n  /* justify-content: space-between; */\n  align-items: flex-end;\n}\n\n\n.contact__item-logo{\n  display:none;\n}\n\n.contact__item > img{\n  width: 40px;\n  height: 40px;\n  \n}\n\n.contact__wrapper{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 500px;\n}\n\n.contact__item{\n  /* background-color: palevioletred; */\n  width: 100%;\n  display: flex;\n  gap:2em;\n  align-items: center;\n  padding: 0.5em 0;\n}\n\n.contact__item > span{\n  font-size: 2rem;\n}',""]);const i=c},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],l=o.base?s[0]+o.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=e(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=e(a[c]);t[i].references--}for(var s=o(n,r),l=0;l<a.length;l++){var d=e(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},206:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0;var o=e(72),r=e.n(o),a=e(206),c=e.n(a),i=e(659),s=e.n(i),l=e(56),d=e.n(l),u=e(540),p=e.n(u),m=e(113),f=e.n(m),h=e(365),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=p(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals;const v=function(){const n=document.getElementById("content"),t=document.createElement("section");t.setAttribute("class","home-section");const e=document.createElement("h1");e.textContent="coming soon.",e.setAttribute("class","home__title"),t.appendChild(e),n.appendChild(t)},y=e.p+"84e25f69f8fbf1c8fb31.svg",b=e.p+"47e816984a875ad6d489.svg",x=e.p+"6af58fcfbefc052e1863.svg";e.p;function _(){document.getElementById("content").innerHTML=""}document.addEventListener("DOMContentLoaded",(()=>{v(),function(){const n=document.querySelector(".logo"),t=document.querySelector(".home");let e=null;function o(n){console.log(e),e&&e.classList.remove("active"),n.classList.add("active"),e=n}n.addEventListener("click",(()=>o(t))),o(t),document.querySelectorAll("button").forEach((n=>{n.addEventListener("click",(()=>{o(n)}))}))}(),document.querySelector(".home").classList.add("active")})),document.querySelector("header").addEventListener("click",(n=>{const t=n.target.classList[0];"home"===t||"logo"===t?(_(),v()):"menu"===t?(_(),function(){const n=document.getElementById("content"),t=document.createElement("section");t.setAttribute("class","menu-section");const e=document.createElement("h1");e.textContent="our menu",e.setAttribute("class","menu__title");const o=document.createElement("div");o.setAttribute("class","menu__grid");for(let n=0;n<6;n++){const n=document.createElement("div");n.setAttribute("class","menu__item"),n.textContent="something delicious.",o.appendChild(n)}t.appendChild(e),t.appendChild(o),n.appendChild(t)}()):"contact"===t&&(_(),function(){const n=document.getElementById("content"),t=document.createElement("section");t.setAttribute("class","contact-section");const e=document.createElement("h1");e.textContent="contact us!",e.setAttribute("class","contact__title");const o=document.createElement("div");o.setAttribute("class","contact__wrapper"),[{img:x,alt:"phone",text:"+123 456 789"},{img:y,alt:"location",text:"somePlace, abc.123"},{img:b,alt:"mail",text:"email@address.com"}].forEach((({img:n,alt:t,text:e})=>{const r=document.createElement("div");r.setAttribute("class","contact__item");const a=document.createElement("img"),c=document.createElement("span");a.src=n,a.alt=t,c.textContent=e,r.append(a,c),o.appendChild(r)})),t.appendChild(e),t.appendChild(o),n.appendChild(t)}())}))})();