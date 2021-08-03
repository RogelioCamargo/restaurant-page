/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'); */\\n\\n/* @font-face {\\n  font-family: 'PoppinsRegular';\\n  src: url('./fonts/poppins-regular.woff2') format('woff2'),\\n    url('./fonts/poppins-regular.woff') format('woff');\\n  font-weight: 500;\\n  font-style: normal;\\n}\\n\\n@font-face {\\n  font-family: 'PoppinsBold';\\n  src: url('./fonts/poppins-700.woff2') format('woff2'),\\n    url('./fonts/poppins-700.woff') format('woff');\\n  font-weight: 700;\\n  font-style: normal;\\n} */\\n\\n* {\\n    padding: 0; \\n    margin: 0; \\n    box-sizing: border-box;\\n    font-family: 'Poppins', sans-serif;\\n}\\n\\n#content {\\n    background-color: #161616;\\n    color: #fff;\\n    font-size: 14px;\\n}\\n\\n.ghost-button {\\n    border-radius: 50px;\\n    font-size: 18px;\\n    font-weight: 500;\\n    line-height: 20px;\\n    padding: 20px 40px;\\n}\\n\\n.heading-button {\\n    border: 2px solid #fff;\\n    align-self: flex-start;\\n}\\n\\n.heading-image {\\n    max-width: 732px;\\n    vertical-align: middle;\\n    width: 100%;\\n}\\n\\n.heading-statement {\\n    font-size: 60px;\\n    font-weight: 700;\\n    line-height: 70px;\\n    margin: 10px 0 20px 0; \\n}\\n\\n.main {\\n    display: flex;\\n    align-items: center;\\n    height: calc(100vh - 120px); \\n}\\n\\n.main-left {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    margin-top: -100px;\\n    padding: 0 60px; \\n    width: 50%;\\n}\\n\\n.main-left-wrapper {\\n    display: flex;\\n    flex-direction: column;\\n    max-width: 640px;\\n}\\n\\n.main-right {\\n    display: flex;\\n    padding: 0 10px;\\n    width: 50%;\\n}\\n\\n.menu-item {\\n    margin-right: 40px;\\n}\\n\\n.menu-item-button {\\n    background-color: #f87107;\\n}\\n\\n.menu-logo {\\n    font-size: 28px;\\n    font-weight: 700;\\n}\\n\\n.menu-nav {\\n    font-size: 18px;\\n}\\n\\na {\\n    color: #fff; \\n    text-decoration: none;\\n}\\n\\nheader {\\n    display: flex;\\n    align-items: center;\\n    height: 120px;\\n    justify-content: space-between;\\n    padding: 0 30px;\\n    width: 100%;\\n}\\n\\n/* MENU */\\n.menu-article {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;   \\n}\\n\\n.menu-row {\\n    display: flex;\\n    max-width: 1200px;\\n    margin: 0 auto 60px auto; \\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/imgs/background.png":
/*!*********************************!*\
  !*** ./src/imgs/background.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imgs/background.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/background.png?");

/***/ }),

/***/ "./src/imgs/main-image.jpg":
/*!*********************************!*\
  !*** ./src/imgs/main-image.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imgs/main-image.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/main-image.jpg?");

/***/ }),

/***/ "./src/imgs/menu-1.jpg":
/*!*****************************!*\
  !*** ./src/imgs/menu-1.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imgs/menu-1.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/menu-1.jpg?");

/***/ }),

/***/ "./src/imgs/menu-10.jpg":
/*!******************************!*\
  !*** ./src/imgs/menu-10.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imgs/menu-10.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/menu-10.jpg?");

/***/ }),

/***/ "./src/imgs/menu-11.jpg":
/*!******************************!*\
  !*** ./src/imgs/menu-11.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imgs/menu-11.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/menu-11.jpg?");

/***/ }),

/***/ "./src/imgs/menu-12.jpg":
/*!******************************!*\
  !*** ./src/imgs/menu-12.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imgs/menu-12.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/menu-12.jpg?");

/***/ }),

/***/ "./src/imgs/menu-2.jpg":
/*!*****************************!*\
  !*** ./src/imgs/menu-2.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imgs/menu-2.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/menu-2.jpg?");

/***/ }),

/***/ "./src/imgs/menu-3.jpg":
/*!*****************************!*\
  !*** ./src/imgs/menu-3.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imgs/menu-3.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/menu-3.jpg?");

/***/ }),

/***/ "./src/imgs/menu-4.jpg":
/*!*****************************!*\
  !*** ./src/imgs/menu-4.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imgs/menu-4.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/menu-4.jpg?");

/***/ }),

/***/ "./src/imgs/menu-5.jpg":
/*!*****************************!*\
  !*** ./src/imgs/menu-5.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imgs/menu-5.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/menu-5.jpg?");

/***/ }),

/***/ "./src/imgs/menu-6.jpg":
/*!*****************************!*\
  !*** ./src/imgs/menu-6.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imgs/menu-6.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/menu-6.jpg?");

/***/ }),

/***/ "./src/imgs/menu-7.jpg":
/*!*****************************!*\
  !*** ./src/imgs/menu-7.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imgs/menu-7.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/menu-7.jpg?");

/***/ }),

/***/ "./src/imgs/menu-8.jpg":
/*!*****************************!*\
  !*** ./src/imgs/menu-8.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imgs/menu-8.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/menu-8.jpg?");

/***/ }),

/***/ "./src/imgs/menu-9.jpg":
/*!*****************************!*\
  !*** ./src/imgs/menu-9.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"imgs/menu-9.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/menu-9.jpg?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app/createHeader.js":
/*!*********************************!*\
  !*** ./src/app/createHeader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\n\nconst createHeader = () => {\n    const header = document.createElement(\"header\");\n\n    const _createLogo = (() => {\n        const div = document.createElement(\"div\");\n        div.classList.add(\"menu-logo\");\n        div.textContent = \"FrenchSounding\";\n        header.appendChild(div);\n    })();\n\n    const _createNav = (() => {\n        const nav = document.createElement(\"nav\");\n        nav.classList.add(\"menu-nav\");\n        nav.innerHTML = `<a href=\"#\" class=\"menu-item\">Home</a>\n        <a href=\"#\" class=\"menu-item\">Menu</a>\n        <a href=\"#\" class=\"menu-item\">Contact</a>\n        <a href=\"#\" class=\"ghost-button menu-item-button\">Catering</a>`;\n        header.appendChild(nav);\n    })();\n\n    return header;\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/app/createHeader.js?");

/***/ }),

/***/ "./src/app/createMainSection.js":
/*!**************************************!*\
  !*** ./src/app/createMainSection.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMainSection\": () => (/* binding */ createMainSection)\n/* harmony export */ });\n/* harmony import */ var _imgs_main_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/main-image.jpg */ \"./src/imgs/main-image.jpg\");\n \n\nconst createMainSection = () => {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"main\");\n\n    const _createLeftMainSection = (() => {\n        const div = document.createElement(\"div\");\n        div.classList.add(\"main-left\");\n        div.innerHTML = `<div class=\"main-left-wrapper\">\n                <h1 class=\"heading-statement\">Overpriced Food That Tastes Bad!</h1>\n                <a href=\"#\" class=\"ghost-button heading-button\">Menu</a>\n            </div>`;\n\n        container.appendChild(div);\n    })();\n\n    const _createRightMainSection = (() => {\n        const div = document.createElement(\"div\");\n        div.classList.add(\"main-right\");\n        const img = new Image();\n        img.classList.add(\"heading-image\");\n        img.alt = \"Hot and fresh mussels in the pot.\";\n        img.src = _imgs_main_image_jpg__WEBPACK_IMPORTED_MODULE_0__.default; \n        div.appendChild(img);\n\n        container.appendChild(div);\n    })();\n\n    return container;\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/app/createMainSection.js?");

/***/ }),

/***/ "./src/app/createMenuSection.js":
/*!**************************************!*\
  !*** ./src/app/createMenuSection.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenuSection\": () => (/* binding */ createMenuSection)\n/* harmony export */ });\n/* harmony import */ var _imgs_background_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/background.png */ \"./src/imgs/background.png\");\n/* harmony import */ var _imgs_menu_7_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/menu-7.jpg */ \"./src/imgs/menu-7.jpg\");\n/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuItems */ \"./src/app/menuItems.js\");\n \n\n \n\n\nconst createMenuSection = () => {\n    const container = document.createElement(\"div\"); \n    container.classList.add(\"menu-section\"); \n    container.setAttribute(\"style\", `background-image: url(${_imgs_background_png__WEBPACK_IMPORTED_MODULE_0__.default})`);  \n\n    const _createMenuSection = (menuList) => {\n        const section = document.createElement(\"section\");\n        section.classList.add(\"menu-row\")\n        let article;\n        let img;\n        let desc;\n        menuList.forEach((menuItem, idx) => {\n            article = document.createElement(\"article\");\n            article.classList.add(\"menu-article\");\n\n            // create image\n            img = new Image();\n            img.classList.add(\"menu-image\");\n            img.src = menuItem.src;\n            img.alt = menuItem.name;\n\n            // create description\n            desc = document.createElement(\"div\");\n            desc.textContent = menuItem.name;\n            \n            // create article\n            article.appendChild(img);\n            article.appendChild(desc);\n\n            // create section\n            section.appendChild(article);\n        });\n\n        container.appendChild(section); \n    }\n\n    _createMenuSection(_menuItems__WEBPACK_IMPORTED_MODULE_2__.dishes1); \n    _createMenuSection(_menuItems__WEBPACK_IMPORTED_MODULE_2__.dishes2); \n    _createMenuSection(_menuItems__WEBPACK_IMPORTED_MODULE_2__.entrees1);\n    _createMenuSection(_menuItems__WEBPACK_IMPORTED_MODULE_2__.entrees2); \n\n    return container; \n}\n\n//# sourceURL=webpack://restaurant-page/./src/app/createMenuSection.js?");

/***/ }),

/***/ "./src/app/menuItems.js":
/*!******************************!*\
  !*** ./src/app/menuItems.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dishes1\": () => (/* binding */ dishes1),\n/* harmony export */   \"dishes2\": () => (/* binding */ dishes2),\n/* harmony export */   \"entrees1\": () => (/* binding */ entrees1),\n/* harmony export */   \"entrees2\": () => (/* binding */ entrees2)\n/* harmony export */ });\n/* harmony import */ var _imgs_menu_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/menu-1.jpg */ \"./src/imgs/menu-1.jpg\");\n/* harmony import */ var _imgs_menu_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/menu-2.jpg */ \"./src/imgs/menu-2.jpg\");\n/* harmony import */ var _imgs_menu_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/menu-3.jpg */ \"./src/imgs/menu-3.jpg\");\n/* harmony import */ var _imgs_menu_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/menu-4.jpg */ \"./src/imgs/menu-4.jpg\");\n/* harmony import */ var _imgs_menu_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/menu-5.jpg */ \"./src/imgs/menu-5.jpg\");\n/* harmony import */ var _imgs_menu_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/menu-6.jpg */ \"./src/imgs/menu-6.jpg\");\n/* harmony import */ var _imgs_menu_8_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../imgs/menu-8.jpg */ \"./src/imgs/menu-8.jpg\");\n/* harmony import */ var _imgs_menu_9_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../imgs/menu-9.jpg */ \"./src/imgs/menu-9.jpg\");\n/* harmony import */ var _imgs_menu_10_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../imgs/menu-10.jpg */ \"./src/imgs/menu-10.jpg\");\n/* harmony import */ var _imgs_menu_11_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../imgs/menu-11.jpg */ \"./src/imgs/menu-11.jpg\");\n/* harmony import */ var _imgs_menu_12_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../imgs/menu-12.jpg */ \"./src/imgs/menu-12.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst dishes1 = [\n    {\n        src: _imgs_menu_1_jpg__WEBPACK_IMPORTED_MODULE_0__.default,\n        name: \"Tezgahtan Midye\",\n    },\n    {\n        src: _imgs_menu_2_jpg__WEBPACK_IMPORTED_MODULE_1__.default,\n        name: \"Tencere Midye\",\n    },\n    {\n        src: _imgs_menu_3_jpg__WEBPACK_IMPORTED_MODULE_2__.default,\n        name: \"Baharatlı Midye\",\n    }\n]; \n\nconst dishes2 = [\n    {\n        src: _imgs_menu_4_jpg__WEBPACK_IMPORTED_MODULE_3__.default,\n        name: \"Soslu Midye\",\n    },\n    {\n        src: _imgs_menu_5_jpg__WEBPACK_IMPORTED_MODULE_4__.default,\n        name: \"Zeytinyağlı Midye\",\n    },\n    {\n        src: _imgs_menu_6_jpg__WEBPACK_IMPORTED_MODULE_5__.default,\n        name: \"Midye Tava\",\n    },\n];\n\nconst entrees1 = [\n    {\n        src: _imgs_menu_8_jpg__WEBPACK_IMPORTED_MODULE_6__.default,\n        name: \"Pilav\",\n    },\n    {\n        src: _imgs_menu_9_jpg__WEBPACK_IMPORTED_MODULE_7__.default,\n        name: \"Tavuk Pilav\",\n    },\n    {\n        src: _imgs_menu_10_jpg__WEBPACK_IMPORTED_MODULE_8__.default,\n        name: \"Midyeli Pilav\",\n    }\n]; \n\nconst entrees2 = [\n    {\n        src: _imgs_menu_11_jpg__WEBPACK_IMPORTED_MODULE_9__.default,\n        name: \"Kokoreçli Pilav\",\n    },\n    {\n        src: _imgs_menu_12_jpg__WEBPACK_IMPORTED_MODULE_10__.default,\n        name: \"Halka Kokoreç\",\n    },\n];\n\n\n//# sourceURL=webpack://restaurant-page/./src/app/menuItems.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _app_createHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/createHeader */ \"./src/app/createHeader.js\");\n/* harmony import */ var _app_createMainSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/createMainSection */ \"./src/app/createMainSection.js\");\n/* harmony import */ var _app_createMenuSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/createMenuSection */ \"./src/app/createMenuSection.js\");\n \n \n\n \n\n\n// create webpage\nconst createWebpage = (() => {\n    const content = document.querySelector(\"#content\"); \n    \n    content.appendChild((0,_app_createHeader__WEBPACK_IMPORTED_MODULE_1__.createHeader)());\n    // content.appendChild(createMainSection());  \n    content.appendChild((0,_app_createMenuSection__WEBPACK_IMPORTED_MODULE_3__.createMenuSection)()); \n})(); \n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;