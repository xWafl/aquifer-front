(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MessagesPageComponents/ServerPopup.vue":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MessagesPageComponents/ServerPopup.vue ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/icons */ \"./node_modules/@coreui/icons/js/index.js\");\n/* harmony import */ var _assets_colorVars_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/colorVars.css */ \"./src/assets/colorVars.css\");\n/* harmony import */ var _assets_colorVars_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_colorVars_css__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"ServerPopup\",\n  props: {\n    server: Object\n  },\n  data: function data() {\n    return {\n      clickingMain: false\n    };\n  },\n  methods: {\n    deleteServer: function deleteServer() {\n      console.log(this.server);\n      this.$emit(\"deleteServer\", this.server.id);\n      this.$emit(\"closeModal\");\n    },\n    closeModal: function closeModal(type) {\n      if (this.clickingMain === false || type === \"x\") {\n        this.clickingMain = false;\n        this.$emit(\"closeModal\");\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/MessagesPageComponents/ServerPopup.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-a9eb6fa4\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/ServerPopup.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-a9eb6fa4","scoped":true,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/ServerPopup.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.serverPopup[data-v-a9eb6fa4] {\\n    /* display: none; */\\n    /* Hidden by default */\\n    position: fixed;\\n    /* Stay in place */\\n    z-index: 2;\\n    /* Sit on top */\\n    left: 0;\\n    top: 0;\\n    width: 100%;\\n    /* Full width */\\n    height: 100vh;\\n    /* Full height */\\n    overflow: auto;\\n    /* Enable scroll if needed */\\n    background-color: rgb(0,0,0);\\n    /* Fallback color */\\n    background-color: rgba(0, 0, 0, 0.7);\\n    text-align: left;\\n    color: var(--aquifer-text-dark-2);\\n    /* Black w/ opacity */\\n}\\n.serverPopup-content[data-v-a9eb6fa4] {\\n    background-color: var(--aquifer-medium-4);\\n    margin: 10% auto;\\n    /* 15% from the top and centered */\\n    height: 40%;\\n    padding: 20px;\\n    border: var(--aquifer-light-1) 5px solid;\\n    border-radius: 10px;\\n    width: 80%;\\n    /* Could be more or less, depending on screen size */\\n}\\n.close[data-v-a9eb6fa4] {\\n    color: var(--aquifer-text-dark-2);\\n    float: right;\\n    font-size: 28px;\\n    font-weight: bold;\\n}\\n.close[data-v-a9eb6fa4]:hover,\\n.close[data-v-a9eb6fa4]:focus {\\n    color: black;\\n    text-decoration: none;\\n    cursor: pointer;\\n}\\n.serverPopup-action[data-v-a9eb6fa4]:hover {\\n    background-color: var(--aquifer-light-3);\\n    margin: -10px;\\n    padding: 10px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/MessagesPageComponents/ServerPopup.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22id%22:%22data-v-a9eb6fa4%22,%22scoped%22:true,%22sourceMap%22:false%7D!./node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a9eb6fa4\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MessagesPageComponents/ServerPopup.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a9eb6fa4","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MessagesPageComponents/ServerPopup.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticClass: \"serverPopup\",\n      attrs: { id: \"serverPopup\" },\n      on: {\n        click: function($event) {\n          return _vm.closeModal(\"reg\")\n        }\n      }\n    },\n    [\n      _c(\n        \"div\",\n        {\n          staticClass: \"serverPopup-content\",\n          on: {\n            click: function($event) {\n              _vm.clickingMain = true\n            }\n          }\n        },\n        [\n          _c(\n            \"span\",\n            {\n              staticClass: \"close\",\n              on: {\n                click: function($event) {\n                  return _vm.closeModal(\"x\")\n                }\n              }\n            },\n            [_vm._v(\"×\")]\n          ),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"serverPopup-header\" }, [\n            _c(\"h3\", [_vm._v(\"Server options\")]),\n            _vm._v(\" \"),\n            _c(\"p\", [_vm._v(\"Server name: \" + _vm._s(_vm.server.name))]),\n            _vm._v(\" \"),\n            _c(\"p\", [_vm._v(\"Server id: \" + _vm._s(_vm.server.id))])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"serverPopup-actions\" }, [\n            _c(\n              \"p\",\n              {\n                staticClass: \"serverPopup-action\",\n                on: { click: _vm.deleteServer }\n              },\n              [_vm._v(\"Delete server\")]\n            )\n          ])\n        ]\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\nif (false) {}\n\n//# sourceURL=webpack:///./src/components/MessagesPageComponents/ServerPopup.vue?./node_modules/vue-loader/lib/template-compiler?%7B%22id%22:%22data-v-a9eb6fa4%22,%22hasScoped%22:true,%22optionsId%22:%220%22,%22buble%22:%7B%22transforms%22:%7B%7D%7D%7D!./node_modules/vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-a9eb6fa4\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/ServerPopup.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-a9eb6fa4","scoped":true,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/ServerPopup.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/style-compiler?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-a9eb6fa4\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ServerPopup.vue */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"id\\\":\\\"data-v-a9eb6fa4\\\",\\\"scoped\\\":true,\\\"sourceMap\\\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/ServerPopup.vue\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"cc9ab0f2\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/MessagesPageComponents/ServerPopup.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22id%22:%22data-v-a9eb6fa4%22,%22scoped%22:true,%22sourceMap%22:false%7D!./node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "./src/components/MessagesPageComponents/ServerPopup.vue":
/*!***************************************************************!*\
  !*** ./src/components/MessagesPageComponents/ServerPopup.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ServerPopup_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./ServerPopup.vue */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MessagesPageComponents/ServerPopup.vue\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_a9eb6fa4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ServerPopup_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-a9eb6fa4\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./ServerPopup.vue */ \"./node_modules/vue-loader/lib/template-compiler/index.js?{\\\"id\\\":\\\"data-v-a9eb6fa4\\\",\\\"hasScoped\\\":true,\\\"optionsId\\\":\\\"0\\\",\\\"buble\\\":{\\\"transforms\\\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MessagesPageComponents/ServerPopup.vue\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/component-normalizer */ \"./node_modules/vue-loader/lib/runtime/component-normalizer.js\");\nvar disposed = false\nfunction injectStyle (context) {\n  if (disposed) return\n  __webpack_require__(/*! !vue-style-loader!css-loader!../../../node_modules/vue-loader/lib/style-compiler/index?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-a9eb6fa4\",\"scoped\":true,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./ServerPopup.vue */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"id\\\":\\\"data-v-a9eb6fa4\\\",\\\"scoped\\\":true,\\\"sourceMap\\\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MessagesPageComponents/ServerPopup.vue\")\n}\n/* script */\n\n\n/* template */\n\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-a9eb6fa4\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\n\nvar Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ServerPopup_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_a9eb6fa4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ServerPopup_vue__WEBPACK_IMPORTED_MODULE_1__[\"render\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_a9eb6fa4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ServerPopup_vue__WEBPACK_IMPORTED_MODULE_1__[\"staticRenderFns\"],\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src\\\\components\\\\MessagesPageComponents\\\\ServerPopup.vue\"\n\n/* hot reload */\nif (false) {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//# sourceURL=webpack:///./src/components/MessagesPageComponents/ServerPopup.vue?");

/***/ })

}]);