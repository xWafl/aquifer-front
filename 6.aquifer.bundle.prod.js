(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{182:function(n,e,a){"use strict";a.r(e);var o=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{staticClass:"channelPopup",attrs:{id:"channelPopup"},on:{click:function(e){return n.closeModal("reg")}}},[a("div",{staticClass:"channelPopup-content",on:{click:function(e){n.clickingMain=!0}}},[a("span",{staticClass:"close",on:{click:function(e){return n.closeModal("x")}}},[n._v("×")]),n._v(" "),a("div",{staticClass:"channelPopup-header"},[a("h3",[n._v("Channel options")]),n._v(" "),a("p",[n._v("Channel name: "+n._s(n.channel.name))]),n._v(" "),a("p",[n._v("Channel id: "+n._s(n.channel.id))])]),n._v(" "),a("div",{staticClass:"channelPopup-actions"},[a("p",{staticClass:"channelPopup-action",on:{click:n.deleteChannel}},[n._v("Delete channel")])])])])};o._withStripped=!0;a(8);var t={name:"ChannelPopup",props:{channel:Object},data:()=>({clickingMain:!1}),methods:{deleteChannel(){this.$emit("deleteChannel",this.channel.id),this.$emit("closeModal")},closeModal(n){!1!==this.clickingMain&&"x"!==n||(this.clickingMain=!1,this.$emit("closeModal"))}}},c=(a(208),a(2)),i=Object(c.a)(t,o,[],!1,null,"23524c32",null);i.options.__file="src/components/MessagesPageComponents/ChannelPopup.vue";e.default=i.exports},192:function(n,e,a){var o=a(209);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,a(7).default)("c6dd50de",o,!1,{})},208:function(n,e,a){"use strict";var o=a(192);a.n(o).a},209:function(n,e,a){var o=a(5),t=a(210);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[n.i,t,""]]);var c={insert:"head",singleton:!1},i=(o(t,c),t.locals?t.locals:{});n.exports=i},210:function(n,e,a){(e=a(6)(!1)).push([n.i,".channelPopup[data-v-23524c32]{position:fixed;z-index:2;left:0;top:0;width:100%;height:100vh;overflow:auto;background-color:#000;background-color:rgba(0,0,0,0.7);text-align:left;color:var(--aquifer-text-dark-2)}.channelPopup-content[data-v-23524c32]{background-color:var(--aquifer-medium-4);margin:12% auto;height:40%;padding:20px;width:80%;border:var(--aquifer-light-1) 5px solid;border-radius:10px}.close[data-v-23524c32]{color:var(--aquifer-text-dark-2);float:right;font-size:28px;font-weight:bold}.close[data-v-23524c32]:hover,.close[data-v-23524c32]:focus{color:black;text-decoration:none;cursor:pointer}.channelPopup-action[data-v-23524c32]:hover{background-color:var(--aquifer-light-3);margin:-10px;padding:10px}\n",""]),n.exports=e}}]);