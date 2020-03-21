(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{271:function(e,t,n){"use strict";n.r(t);n(196),n(47),n(24),n(284),n(33),n(22);var r=n(0),a=n.n(r),i=n(285),o={name:"Message",components:{LinkPrevue:n.n(i).a},props:{user:Object,utcTime:Number,message:String},data:function(){return{previewLinks:[]}},computed:{formattedTime:function(){return a()(this.utcTime).calendar()},formattedMsg:function(){var e=this;return this.message.replace(/(\*\*)[^*\n]+(\*\*)/g,(function(e){return"<strong>"+e.match(/[^*]/g).join("")+"</strong>"})).replace(/(\*)[^*\n]+(\*)/g,(function(e){return"<em>"+e.match(/[^*]/g).join("")+"</em>"})).replace(/(__)[^*\n]+(__)/g,(function(e){return'<span style="text-decoration: underline;">'+e.match(/[^\_]/g).join("")+"</span>"})).replace(/(~~)[^*\n]+(~~)/g,(function(e){return"<del>"+e.match(/[^~]/g).join("")+"</del>"})).replace(/(`)[^*\n]+(`)/g,(function(e){return'<code style="background-color: var(--aquifer-text-dark-2);">'+e.match(/[^`]/g).join("")+"</code>"})).replace(/(http:\/\/|https:\/\/)[^ <>]*/g,(function(t){return e.previewLinks.push(t),'<a target="_blank" href='+t+">"+t+"</a>"}))}}},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message"},[n("p",[n("span",{staticClass:"message-username"},[e._v(e._s(e.user.username))]),e._v(" "),n("span",{staticClass:"message-date"},[e._v(e._s(e.formattedTime))])]),e._v(" "),n("p",{staticClass:"message-content"},[n("span",{domProps:{innerHTML:e._s(e.formattedMsg)}})]),e._v(" "),e._l(e.previewLinks,(function(e){return n("LinkPrevue",{key:e,attrs:{url:e}})}))],2)};s._withStripped=!0;var u=n(1);var d=function(e){n(282)},c=Object(u.a)(o,s,[],!1,d,"data-v-43ea76e8",null);c.options.__file="src\\components\\MessagesPageComponents\\Message.vue";t.default=c.exports},282:function(e,t,n){var r=n(283);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(9).default)("49217a10",r,!1,{})},283:function(e,t,n){(t=n(8)(!1)).push([e.i,"\n.message[data-v-43ea76e8] {\n    width: 94%;\n    background-color: var(--aquifer-medium-2);\n    /* height: 50px; */\n    text-align: left;\n    padding: 10px 3% 10px 3%;\n    word-wrap: break-word;\n}\n.message[data-v-43ea76e8]:hover {\n    background-color: var(--aquifer-dark-1);\n}\n.message-username[data-v-43ea76e8] {\n    color: darkred;\n    font-size: 20px;\n}\n.message-date[data-v-43ea76e8] {\n    font-size: 10px;\n    color: var(--aquifer-text-dark-2);\n}\n.message-content[data-v-43ea76e8] {\n    color: #ccc;\n}\n",""]),e.exports=t},284:function(e,t,n){"use strict";var r=n(197),a=n(12),i=n(23),o=n(17),s=n(198),u=n(199);r("match",1,(function(e,t,n){return[function(t){var n=o(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var o=a(e),d=String(this);if(!o.global)return u(o,d);var c=o.unicode;o.lastIndex=0;for(var l,p=[],f=0;null!==(l=u(o,d));){var v=String(l[0]);p[f]=v,""===v&&(o.lastIndex=s(d,i(o.lastIndex),c)),f++}return 0===f?null:p}]}))},285:function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=2)}([function(e,t,n){var r=n(5)(n(1),n(6),(function(e){n(7)}),"data-v-1b901162",null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"link-prevue",props:{url:{type:String,default:""},cardWidth:{type:String,default:"400px"},onButtonClick:{type:Function,default:void 0},showButton:{type:Boolean,default:!0},apiUrl:{type:String,default:"https://linkpreview-api.herokuapp.com/"}},watch:{url:function(e){this.response=null,this.getLinkPreview()}},created:function(){this.getLinkPreview()},data:function(){return{response:null,validUrl:!1}},methods:{viewMore:function(){void 0!==this.onButtonClick?this.onButtonClick(this.response):window.open(this.url,"_blank").focus()},isValidUrl:function(e){return this.validUrl=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/.test(e),this.validUrl},getLinkPreview:function(){var e=this;this.isValidUrl(this.url)&&this.httpRequest((function(t){e.response=JSON.parse(t)}),(function(){e.response=null,e.validUrl=!1}))},httpRequest:function(e,t){var n=new XMLHttpRequest,r="url="+this.url;n.open("POST",this.apiUrl,!0),n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&e(n.responseText),4===n.readyState&&500===n.status&&t()},n.send(r)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n.n(r);t.default=a.a},function(e,t,n){(t=e.exports=n(4)(void 0)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Hind+Siliguri:400,600);",""]),t.push([e.i,".wrapper[data-v-1b901162]{overflow:auto;border-radius:7px 7px 7px 7px;background-color:#fff;-webkit-box-shadow:0 14px 32px 0 rgba(0,0,0,.15);-moz-box-shadow:0 14px 32px 0 rgba(0,0,0,.15);box-shadow:0 14px 32px 0 rgba(0,0,0,.15)}.card-img[data-v-1b901162]{width:100%}.card-img img[data-v-1b901162]{width:100%;border-radius:7px 7px 0 0}img[data-v-1b901162]{vertical-align:middle;border-style:none}.card-info[data-v-1b901162]{border-radius:0 0 7px 7px;background-color:#fff}.card-text[data-v-1b901162]{width:80%;margin:0 auto;text-align:justify}.card-text h1[data-v-1b901162]{text-align:center;font-size:24px;color:#474747;margin:5px 0;font-family:Hind Siliguri,sans-serif}.card-text p[data-v-1b901162]{font-family:Hind Siliguri,sans-serif;color:#8d8d8d;font-size:15px;overflow:hidden;margin:0;text-align:center}.card-btn[data-v-1b901162]{margin:1em 0;position:relative;text-align:center}.card-btn a[data-v-1b901162]{border-radius:2em;font-family:Hind Siliguri,sans-serif;font-size:14px;letter-spacing:.1em;color:#fff;background-color:#ffa9be;padding:10px 20px;text-align:center;display:inline-block;text-decoration:none!important;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-ms-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.card-btn a[data-v-1b901162]:hover{background-color:#ff8fab}.spinner[data-v-1b901162]{margin-top:40%;margin-left:45%;height:28px;width:28px;animation:rotate-data-v-1b901162 .8s infinite linear;border:5px solid #868686;border-right-color:transparent;border-radius:50%}@keyframes rotate-data-v-1b901162{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r);return[n].concat(r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}))).concat([a]).join("\n")}return[n].join("\n")}e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t){e.exports=function(e,t,n,r,a){var i,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,o=e.default);var u,d="function"==typeof o?o.options:o;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns),r&&(d._scopeId=r),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=u):n&&(u=n),u){var c=d.functional,l=c?d.render:d.beforeCreate;c?d.render=function(e,t){return u.call(t),l(e,t)}:d.beforeCreate=l?[].concat(l,u):[u]}return{esModule:i,exports:o,options:d}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[!e.response&&e.validUrl?n("div",{style:{width:e.cardWidth},attrs:{id:"loader-container"}},[e._t("loading",[n("div",{staticClass:"spinner"})])],2):e._e(),e._v(" "),e.response?n("div",[e._t("default",[n("div",{staticClass:"wrapper",style:{width:e.cardWidth}},[n("div",{staticClass:"card-img"},[n("img",{attrs:{src:e.response.images[0]}})]),e._v(" "),n("div",{staticClass:"card-info"},[n("div",{staticClass:"card-text"},[n("h1",[e._v(e._s(e.response.title))]),e._v(" "),n("p",[e._v(e._s(e.response.description))])]),e._v(" "),n("div",{staticClass:"card-btn"},[e.showButton?n("a",{attrs:{href:"javascript:;"},on:{click:e.viewMore}},[e._v("View More")]):e._e()])])])],{img:e.response.images[0],title:e.response.title,description:e.response.description,url:e.url})],2):e._e()])},staticRenderFns:[]}},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),n(8)("f1f23ef6",r,!0)},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(i(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var o=[];for(a=0;a<n.parts.length;a++)o.push(i(n.parts[a]));c[n.id]={id:n.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return g;r.parentNode.removeChild(r)}if(h){var i=f++;r=p||(p=a()),t=o.bind(null,r,i,!1),n=o.bind(null,r,i,!0)}else r=a(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function o(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(9),c={},l=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,v=!1,g=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var a=d(e,t);return r(a),function(t){for(var n=[],i=0;i<a.length;i++){var o=a[i];(s=c[o.id]).refs--,n.push(s)}for(t?r(a=d(e,t)):a=[],i=0;i<n.length;i++){var s;if(0===(s=n[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete c[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var i=t[a],o=i[0],s={id:e+":"+a,css:i[1],media:i[2],sourceMap:i[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}}])}}]);