(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{275:function(n,e,a){"use strict";a.r(e);a(47),a(22);var t=a(3),o={name:"NewChannelPopup",props:{currentServer:Number},data:function(){return{clickingMain:!1,channelName:"",socket:new WebSocket(t.a.wsUrl)}},methods:{createChannel:function(){this.socket.send(JSON.stringify(["newChannel",localStorage.getItem("seshkey"),{name:this.channelName,server:this.currentServer}])),this.clickingMain=!1,this.$emit("closeModal")},closeModal:function(n){!1!==this.clickingMain&&"x"!==n||(this.clickingMain=!1,this.$emit("closeModal"))}}},i=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{staticClass:"newServerPopup",attrs:{id:"newChannelPopup"},on:{click:function(e){return n.closeModal("reg")}}},[a("div",{staticClass:"newChannelPopup-content",on:{click:function(e){n.clickingMain=!0}}},[a("span",{staticClass:"close",on:{click:function(e){return n.closeModal("x")}}},[n._v("×")]),n._v(" "),n._m(0),n._v(" "),a("div",{staticClass:"newChannelPopup-actions"},[a("input",{directives:[{name:"model",rawName:"v-model",value:n.channelName,expression:"channelName"}],staticClass:"newChannelPopupInput",domProps:{value:n.channelName},on:{input:function(e){e.target.composing||(n.channelName=e.target.value)}}}),n._v(" "),a("div",{staticClass:"newChannelPopupCreate",on:{click:function(e){return n.createChannel()}}},[n._v("Create!")])])])])};i._withStripped=!0;var l=a(1);var r=function(n){a(304)},c=Object(l.a)(o,i,[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"newChannelPopup-header"},[e("h3",[this._v("Create a new channel")])])}],!1,r,"data-v-461fe1ae",null);c.options.__file="src\\components\\MessagesPageComponents\\NewChannelPopup.vue";e.default=c.exports},304:function(n,e,a){var t=a(305);"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,a(9).default)("6e4a6e94",t,!1,{})},305:function(n,e,a){(e=a(8)(!1)).push([n.i,"\n.newServerPopup[data-v-461fe1ae] {\n    /* display: none; */\n    /* Hidden by default */\n    position: fixed;\n    /* Stay in place */\n    z-index: 2;\n    /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%;\n    /* Full width */\n    height: 100vh;\n    /* Full height */\n    overflow: auto;\n    /* Enable scroll if needed */\n    background-color: rgb(0,0,0);\n    /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.7);\n    text-align: left;\n    color: #0B3241;\n    /* Black w/ opacity */\n}\n.newChannelPopup-content[data-v-461fe1ae] {\n    background-color: var(--aquifer-medium-4);\n    margin: 12% auto;\n    /* 15% from the top and centered */\n    height: 40%;\n    padding: 20px;\n    border: var(--aquifer-light-1) 5px solid;\n    border-radius: 10px;\n    width: 80%;\n    /* Could be more or less, depending on screen size */\n}\n.close[data-v-461fe1ae] {\n    color: var(--aquifer-text-dark-2);\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n.close[data-v-461fe1ae]:hover,\n.close[data-v-461fe1ae]:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n.newChannelPopupInput[data-v-461fe1ae] {\n    background-color: var(--aquifer-light-1);\n    width: 80%;\n    padding: 1% 5% 1% 5%;\n    margin-left: 5%;\n    height: 25px;\n}\n.newChannelPopupCreate[data-v-461fe1ae] {\n    width: calc(20% - 10px);\n    height: 40px;\n    line-height: 40px;\n    padding: 5px;\n    margin-top: 10px;\n    margin-left: calc(40% - 5px);\n    text-align: center;\n    background-color: var(--aquifer-light-1);\n}\n",""]),n.exports=e}}]);