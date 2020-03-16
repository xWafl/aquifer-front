(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MessagesPageComponents/Channel.vue":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MessagesPageComponents/Channel.vue ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_colorVars_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/colorVars.css */ \"./src/assets/colorVars.css\");\n/* harmony import */ var _assets_colorVars_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_colorVars_css__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Channel\",\n  props: {\n    channelName: String\n  }\n});\n\n//# sourceURL=webpack:///./src/components/MessagesPageComponents/Channel.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MessagesPageComponents/ChannelList.vue":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MessagesPageComponents/ChannelList.vue ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Channel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Channel.vue */ \"./src/components/MessagesPageComponents/Channel.vue\");\n/* harmony import */ var _assets_colorVars_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/colorVars.css */ \"./src/assets/colorVars.css\");\n/* harmony import */ var _assets_colorVars_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_colorVars_css__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n // const isOpen = ws => ws.readyState === ws.OPEN;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"ChannelList\",\n  components: {\n    Channel: _Channel_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function data() {\n    return {\n      currentlySelected: 0,\n      clicks: {\n        num: 0,\n        channel: 0\n      }\n    };\n  },\n  props: {\n    channels: Object\n  },\n  methods: {\n    changeSelection: function changeSelection(channelId) {\n      this.currentlySelected = channelId;\n      console.log(\"New channel: \" + channelId);\n      this.$emit(\"changedSelection\", channelId); // console.log(channelName);\n    },\n    oneClick: function oneClick(newChannelId) {\n      this.changeSelection(newChannelId); // console.log(this.clicks);\n\n      this.clicks.num++;\n\n      if (this.clicks.num === 1) {\n        var self = this;\n        this.clicks.channel = newChannelId;\n        this.timer = setTimeout(function () {\n          self.clicks.num = 0;\n        }, 700);\n      } else {\n        if (newChannelId === this.clicks.channel) {\n          clearTimeout(this.timer);\n          var selectedChannel = this.channels[this.currentlySelected];\n          this.$emit(\"openChannelModal\", selectedChannel); // console.log(this.modalDetails);\n\n          this.clicks.num = 0;\n        }\n      }\n    },\n    newChannel: function newChannel() {\n      this.$emit(\"openNewChannelModal\"); // socket.send(JSON.stringify([\"newChannel\", {name: \"blah\"}]))\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/MessagesPageComponents/ChannelList.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-01320146\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/ChannelList.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-01320146","scoped":true,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/ChannelList.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.channelList[data-v-01320146] {\\n    grid-column: 2 / 5;\\n    grid-row: 1 / 20;\\n    /* background: #4B6D93; */\\n    background-color: var(--aquifer-medium-1);\\n    border: solid black;\\n    border-width: 0 2px 2px 2px;\\n}\\n@media only screen and (max-width: 1100px) {\\n.channelList[data-v-01320146] {\\n        grid-column: 2 / 6;\\n}\\n}\\n.channelHover[data-v-01320146] {\\n    transition: background-color 0.1s;\\n}\\n.channelHover[data-v-01320146]:hover {\\n    background-color: var(--aquifer-medium-2);\\n}\\n.coloredBackground[data-v-01320146] {\\n    background-color: var(--aquifer-medium-3);\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/MessagesPageComponents/ChannelList.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22id%22:%22data-v-01320146%22,%22scoped%22:true,%22sourceMap%22:false%7D!./node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-226c6388\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/Channel.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-226c6388","scoped":true,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/Channel.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.channel[data-v-226c6388] {\\n    width: 90%;\\n    /* height: 20px; */\\n    margin: -10px 0px -10px 0px;\\n    text-align: left;\\n    user-select: none;\\n    padding: 0px 5% 0px 5%;\\n    color: var(--aquifer-text-dark-1);\\n    /* text-overflow: clip; */\\n    /* white-space: nowrap; */\\n    /* overflow: hidden; */\\n    display: block;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/MessagesPageComponents/Channel.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22id%22:%22data-v-226c6388%22,%22scoped%22:true,%22sourceMap%22:false%7D!./node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-01320146\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MessagesPageComponents/ChannelList.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-01320146","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MessagesPageComponents/ChannelList.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"channelList\" },\n    [\n      _vm._l(_vm.channels, function(channel) {\n        return _c(\"Channel\", {\n          key: channel.id,\n          class: {\n            coloredBackground: channel.id === _vm.currentlySelected,\n            channelHover: channel.id !== _vm.currentlySelected\n          },\n          attrs: { channelName: channel.name },\n          nativeOn: {\n            click: function($event) {\n              return _vm.oneClick(channel.id)\n            }\n          }\n        })\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { attrs: { id: \"newChannel\" }, on: { click: _vm.newChannel } },\n        [_vm._v(\"\\n        New Channel\\n    \")]\n      )\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\nif (false) {}\n\n//# sourceURL=webpack:///./src/components/MessagesPageComponents/ChannelList.vue?./node_modules/vue-loader/lib/template-compiler?%7B%22id%22:%22data-v-01320146%22,%22hasScoped%22:true,%22optionsId%22:%220%22,%22buble%22:%7B%22transforms%22:%7B%7D%7D%7D!./node_modules/vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-226c6388\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MessagesPageComponents/Channel.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-226c6388","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MessagesPageComponents/Channel.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"channel\" }, [\n    _c(\"h3\", [_vm._v(\"# \" + _vm._s(_vm.channelName))])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\nif (false) {}\n\n//# sourceURL=webpack:///./src/components/MessagesPageComponents/Channel.vue?./node_modules/vue-loader/lib/template-compiler?%7B%22id%22:%22data-v-226c6388%22,%22hasScoped%22:true,%22optionsId%22:%220%22,%22buble%22:%7B%22transforms%22:%7B%7D%7D%7D!./node_modules/vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-01320146\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/ChannelList.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-01320146","scoped":true,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/ChannelList.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/style-compiler?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-01320146\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChannelList.vue */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"id\\\":\\\"data-v-01320146\\\",\\\"scoped\\\":true,\\\"sourceMap\\\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/ChannelList.vue\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"5abf9b62\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/MessagesPageComponents/ChannelList.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22id%22:%22data-v-01320146%22,%22scoped%22:true,%22sourceMap%22:false%7D!./node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-226c6388\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/Channel.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-226c6388","scoped":true,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/Channel.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/style-compiler?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-226c6388\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Channel.vue */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"id\\\":\\\"data-v-226c6388\\\",\\\"scoped\\\":true,\\\"sourceMap\\\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/Channel.vue\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"37b7136d\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/MessagesPageComponents/Channel.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22id%22:%22data-v-226c6388%22,%22scoped%22:true,%22sourceMap%22:false%7D!./node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "./src/components/MessagesPageComponents/Channel.vue":
/*!***********************************************************!*\
  !*** ./src/components/MessagesPageComponents/Channel.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Channel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Channel.vue */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MessagesPageComponents/Channel.vue\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_226c6388_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Channel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-226c6388\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Channel.vue */ \"./node_modules/vue-loader/lib/template-compiler/index.js?{\\\"id\\\":\\\"data-v-226c6388\\\",\\\"hasScoped\\\":true,\\\"optionsId\\\":\\\"0\\\",\\\"buble\\\":{\\\"transforms\\\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MessagesPageComponents/Channel.vue\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ \"./node_modules/vue-loader/lib/runtime/component-normalizer.js\");\nvar disposed = false\nfunction injectStyle (context) {\n  if (disposed) return\n  __webpack_require__(/*! !vue-style-loader!css-loader!../../../node_modules/vue-loader/lib/style-compiler/index?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-226c6388\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Channel.vue */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"id\\\":\\\"data-v-226c6388\\\",\\\"scoped\\\":true,\\\"sourceMap\\\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/Channel.vue\")\n}\n/* script */\n\n\n/* template */\n\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-226c6388\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\n\nvar Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Channel_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_226c6388_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Channel_vue__WEBPACK_IMPORTED_MODULE_1__[\"render\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_226c6388_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Channel_vue__WEBPACK_IMPORTED_MODULE_1__[\"staticRenderFns\"],\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src\\\\components\\\\MessagesPageComponents\\\\Channel.vue\"\n\n/* hot reload */\nif (false) {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//# sourceURL=webpack:///./src/components/MessagesPageComponents/Channel.vue?");

/***/ }),

/***/ "./src/components/MessagesPageComponents/ChannelList.vue":
/*!***************************************************************!*\
  !*** ./src/components/MessagesPageComponents/ChannelList.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ChannelList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./ChannelList.vue */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MessagesPageComponents/ChannelList.vue\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_01320146_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ChannelList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-01320146\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./ChannelList.vue */ \"./node_modules/vue-loader/lib/template-compiler/index.js?{\\\"id\\\":\\\"data-v-01320146\\\",\\\"hasScoped\\\":true,\\\"optionsId\\\":\\\"0\\\",\\\"buble\\\":{\\\"transforms\\\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MessagesPageComponents/ChannelList.vue\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ \"./node_modules/vue-loader/lib/runtime/component-normalizer.js\");\nvar disposed = false\nfunction injectStyle (context) {\n  if (disposed) return\n  __webpack_require__(/*! !vue-style-loader!css-loader!../../../node_modules/vue-loader/lib/style-compiler/index?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-01320146\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./ChannelList.vue */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"id\\\":\\\"data-v-01320146\\\",\\\"scoped\\\":true,\\\"sourceMap\\\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/ChannelList.vue\")\n}\n/* script */\n\n\n/* template */\n\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-01320146\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\n\nvar Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ChannelList_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_01320146_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ChannelList_vue__WEBPACK_IMPORTED_MODULE_1__[\"render\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_01320146_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ChannelList_vue__WEBPACK_IMPORTED_MODULE_1__[\"staticRenderFns\"],\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src\\\\components\\\\MessagesPageComponents\\\\ChannelList.vue\"\n\n/* hot reload */\nif (false) {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//# sourceURL=webpack:///./src/components/MessagesPageComponents/ChannelList.vue?");

/***/ })

}]);