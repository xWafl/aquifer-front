(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{240:function(n,e,a){"use strict";a.r(e);a(21);var o={name:"ChannelPopup",props:{channel:Object},data:function(){return{clickingMain:!1}},methods:{deleteChannel:function(){this.$emit("deleteChannel",this.channel.id),this.$emit("closeModal")},closeModal:function(n){!1!==this.clickingMain&&"x"!==n||(this.clickingMain=!1,this.$emit("closeModal"))}}},t=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{staticClass:"channelPopup",attrs:{id:"channelPopup"},on:{click:function(e){return n.closeModal("reg")}}},[a("div",{staticClass:"channelPopup-content",on:{click:function(e){n.clickingMain=!0}}},[a("span",{staticClass:"close",on:{click:function(e){return n.closeModal("x")}}},[n._v("×")]),n._v(" "),a("div",{staticClass:"channelPopup-header"},[a("h3",[n._v("Channel options")]),n._v(" "),a("p",[n._v("Channel name: "+n._s(n.channel.name))]),n._v(" "),a("p",[n._v("Channel id: "+n._s(n.channel.id))])]),n._v(" "),a("div",{staticClass:"channelPopup-actions"},[a("p",{staticClass:"channelPopup-action",on:{click:n.deleteChannel}},[n._v("Delete channel")])])])])};t._withStripped=!0;var i=a(3);var l=function(n){a(257)},c=Object(i.a)(o,t,[],!1,l,"data-v-4bea7234",null);c.options.__file="src\\components\\MessagesPageComponents\\ChannelPopup.vue";e.default=c.exports},257:function(n,e,a){var o=a(258);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,a(14).default)("4f80bd52",o,!1,{})},258:function(n,e,a){(e=a(6)(!1)).push([n.i,"\n.channelPopup[data-v-4bea7234] {\n    /* display: none; */\n    /* Hidden by default */\n    position: fixed;\n    /* Stay in place */\n    z-index: 2;\n    /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%;\n    /* Full width */\n    height: 100vh;\n    /* Full height */\n    overflow: auto;\n    /* Enable scroll if needed */\n    background-color: rgb(0,0,0);\n    /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.7);\n    text-align: left;\n    color: var(--aquifer-text-dark-2);\n    /* Black w/ opacity */\n}\n.channelPopup-content[data-v-4bea7234] {\n    background-color: var(--aquifer-medium-4);\n    margin: 10% auto;\n    /* 15% from the top and centered */\n    height: 60%;\n    padding: 20px;\n    border: 1px solid #264F5F;\n    width: 80%;\n    /* Could be more or less, depending on screen size */\n}\n.close[data-v-4bea7234] {\n    color: var(--aquifer-text-dark-2);\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n.close[data-v-4bea7234]:hover,\n.close[data-v-4bea7234]:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n.channelPopup-action[data-v-4bea7234]:hover {\n     background-color: var(--aquifer-light-3);\n     margin: -10px;\n     padding: 10px;\n}\n",""]),n.exports=e}}]);