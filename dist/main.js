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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hero-cover.jpg */ \"./src/assets/img/hero-cover.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*, *::before, *::after {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n\\n:root {\\n    --main: #fc0;\\n    --bg: #f8f8f8;\\n}\\n\\nbody {\\n    font-family: 'Montserrat', sans-serif;\\n}\\n\\n\\n#wrapper {\\n    display: grid;\\n    grid-template-rows: auto 1fr auto;\\n    grid-template-columns: 1fr;\\n    grid-template-areas: \\n    \\\"nav nav\\\"\\n    \\\"main-content main-content\\\"\\n    \\\"footer footer\\\";\\n}\\n\\n\\n.main-container {\\n    grid-area: main-content;\\n    display: grid;\\n    justify-content: center;\\n}\\n\\n.main-container.bg {\\n    background-color: #f8f8f8;\\n}\\n\\n\\n.nav-bar {\\n    grid-area: nav;\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.nav-bar > .link {\\n    display: inline-block;\\n    padding: 10px 30px;\\n    cursor: pointer;\\n    text-transform: uppercase;\\n    position: relative;\\n\\n    /* links effect */\\n\\n    background: linear-gradient(\\n      to right,\\n      rgba(100, 200, 200, 0),\\n      rgba(100, 200, 200, 0)\\n    ),\\n    linear-gradient(\\n      to right,\\n      var(--main),\\n      var(--main),\\n      var(--main)\\n\\n  );\\n  \\n  background-size: 100% 3px, 0 3px;\\n  background-position: 100% 100%, 0 90%;\\n  background-repeat: no-repeat;\\n  transition: background-size 400ms;\\n\\n}\\n\\n.nav-bar > .link:hover {\\n    background-size: 0 3px, 100% 3px;\\n\\n}\\n\\n/* HOME PAGE */\\n\\n.hero-container {\\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-position: center;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    background-attachment: fixed;\\n    height: 90vh;\\n    width: 100vw;\\n\\n}\\n\\n.hero-text {\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    color: white;\\n\\n}\\n\\n.hero-text h2 {\\n    text-transform: uppercase;\\n    font-size: 3.5rem;\\n}\\n\\n.underline {\\n    width: 200px;\\n    height: 3px;\\n    background-color: var(--main);\\n}\\n\\n.hero-text p {\\n    margin: 20px 0px;\\n\\n}\\n\\n.cta-btn {\\n    display: inline-block;\\n    padding: 10px 50px;\\n    background-color: var(--main);\\n    color: black;\\n    text-transform: uppercase;\\n    font-size: .8rem;\\n    border-radius: 5px;\\n    cursor: pointer;\\n    transition: all 0.25s ease-in-out;\\n \\n}\\n\\n.hero-text a:hover {\\n    background-color: rgba(255, 204, 0, 0.8);\\n}\\n\\n\\nfooter {\\n    grid-area: footer;\\n    height: 50px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n\\n\\n}\\n\\nfooter a {\\n\\n    display: inline-block;\\n    grid-column: 1 / -1;\\n    text-decoration: none;\\n    color: black;\\n    /* margin: 5px auto; */\\n\\n}\\n\\n/* ABOUT US PAGE */\\n\\n.cards {\\n   \\n    display: grid;\\n    grid-template-columns: 800px;\\n    justify-items: center;\\n    overflow: hidden;\\n    min-height: calc(90vh - 80px);\\n    background-color: white;\\n    margin: 40px 0px;\\n\\n}\\n\\n.card {\\n    display: grid;\\n    grid-template-columns: repeat(2, 1fr);\\n    grid-template-rows: 300px;\\n    overflow: hidden;\\n    place-items: center center;\\n}\\n\\n.card-info {\\n    text-align: center;\\n    padding: 30px;\\n}\\n\\n.card-info h2, .dish-info h2 {\\n    color: var(--main);\\n    cursor: pointer;\\n}\\n\\n.card-info p, .dish-info p {\\n    font-size: .9rem;\\n    color: gray;\\n    line-height: 25px;\\n}\\n\\n.card.reverse img {\\n    order: -1;\\n}\\n\\n\\n.card img {\\n    max-width: 100%;\\n    object-fit: cover;\\n    height: auto;\\n    cursor: pointer;\\n}\\n\\n\\n/* MENU PAGE */\\n\\n.menu-container {\\n    width: 80vw;\\n    min-height: calc(90vh - 80px);\\n    margin: 40px 0px;\\n    display: grid;\\n    align-content: center;\\n    \\n}\\n\\n.menu-list {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\\n    gap: 20px;\\n}\\n\\n.dish {\\n    display: grid;\\n    grid-template-columns: 150px 1fr;\\n    grid-template-rows: 1fr;\\n \\n    align-items: center;\\n    /* justify-items: center; */\\n    overflow: hidden;\\n    background-color: white;\\n\\n}\\n\\n.dish-info {\\n    padding: 30px;\\n}\\n\\n.dish img {\\n    max-width: 100%;\\n    object-fit: cover;\\n}\\n\\n@media (max-width: 1000px) {\\n\\n\\n    .menu-container {\\n        width: 90vw;\\n\\n    }\\n\\n}\\n\\n@media (max-width: 850px) {\\n\\n    .cards {\\n        grid-template-columns: 1fr;\\n        margin: 0px 20px;\\n    }\\n\\n    .card {\\n        grid-template-columns: 1fr;\\n    } \\n\\n    .card.reverse img {\\n        order: 0;\\n    }\\n\\n    .card img {\\n        width: 500px;\\n        height: 500px;\\n    }\\n\\n}\\n\\n@media (max-width: 400px) {\\n\\n    .link {\\n        font-size: .8rem;\\n    }\\n\\n    .hero-text h2 {\\n        font-size: 2.3rem;\\n    }\\n\\n    .dish-info {\\n        text-align: center;\\n        padding: 0 0 20px 0;\\n        font-size: .8rem;\\n    }\\n\\n    .menu-list {\\n        grid-template-columns: 1fr;\\n    }\\n\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/assets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

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

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ \"./src/assets/style.css\");\n/* harmony import */ var _modules_load_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load-page.js */ \"./src/modules/load-page.js\");\n/* harmony import */ var _modules_nav_links_events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/nav-links-events.js */ \"./src/modules/nav-links-events.js\");\n\n\n\n\n(0,_modules_load_page_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_nav_links_events_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/about-us.js":
/*!*********************************!*\
  !*** ./src/modules/about-us.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCard\": () => (/* binding */ createCard),\n/* harmony export */   \"default\": () => (/* binding */ loadAboutUsPage)\n/* harmony export */ });\nfunction loadAboutUsPage() {\n  const mainContainer = document.querySelector(\".main-container\");\n\n  mainContainer.textContent = \"\";\n  mainContainer.classList.add(\"bg\");\n  mainContainer.appendChild(createAboutUsCards());\n}\n\nfunction createAboutUsCards() {\n  const cards = document.createElement(\"div\");\n  cards.classList.add(\"cards\");\n\n  const cardAboutUs = createCard(\n    \"About Us\",\n    \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam?\",\n    \"https://images.unsplash.com/photo-1612203985758-5f8453e91056?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80\"\n  );\n\n  const cardOurMission = createCard(\n    \"Our mission\",\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, numquam!\",\n    \"https://images.unsplash.com/photo-1603792451785-e2c78de442a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80\"\n  );\n\n  cardOurMission.classList.add(\"reverse\");\n\n  cards.appendChild(cardAboutUs);\n  cards.appendChild(cardOurMission);\n\n  return cards;\n}\n\nfunction createCard(title, text, img) {\n  const card = document.createElement(\"div\");\n  card.classList.add(\"card\");\n\n  const cardInfoContainer = document.createElement(\"div\");\n  cardInfoContainer.classList.add(\"card-info\");\n\n  const cardTitle = document.createElement(\"h2\");\n  const cardText = document.createElement(\"p\");\n  const cardImg = document.createElement(\"img\");\n\n  cardTitle.textContent = title;\n  cardText.textContent = text;\n  cardImg.src = img;\n\n  cardInfoContainer.appendChild(cardTitle);\n  cardInfoContainer.appendChild(cardText);\n\n  card.appendChild(cardInfoContainer);\n  card.appendChild(cardImg);\n\n  return card;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/about-us.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHero)\n/* harmony export */ });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/modules/menu.js\");\n\n\nfunction createHero() {\n  const heroContainer = document.createElement(\"div\");\n  heroContainer.classList.add(\"hero-container\");\n\n  const heroText = document.createElement(\"div\");\n  heroText.classList.add(\"hero-text\");\n\n  const heroTitle = document.createElement(\"h2\");\n  heroTitle.textContent = \"Vegan sushi bar\";\n\n  const underline = document.createElement(\"div\");\n  underline.classList.add(\"underline\");\n\n  const heroCopy = document.createElement(\"p\");\n  heroCopy.textContent = \"This is how we roll!\";\n\n  const orderBtn = document.createElement(\"a\");\n  orderBtn.textContent = \"Order today!\";\n  orderBtn.classList.add(\"cta-btn\");\n\n  heroText.appendChild(heroTitle);\n  heroText.appendChild(underline);\n  heroText.appendChild(heroCopy);\n  heroText.appendChild(orderBtn);\n\n  heroContainer.appendChild(heroText);\n  orderBtn.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n  return heroContainer;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/load-page.js":
/*!**********************************!*\
  !*** ./src/modules/load-page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/style.css */ \"./src/assets/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/modules/home.js\");\n\n\n\nfunction loadPage() {\n  const wrapper = document.querySelector(\"#wrapper\");\n\n  wrapper.appendChild(createNavBar());\n  wrapper.appendChild(createMainContainer());\n  wrapper.appendChild(createFooter());\n\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\nfunction createNavBar() {\n  const nav = document.createElement(\"nav\");\n  nav.setAttribute(\"class\", \"nav-bar\");\n\n  const homeBtn = document.createElement(\"a\");\n\n  homeBtn.textContent = \"Home\";\n  homeBtn.setAttribute(\"id\", \"home\");\n  homeBtn.setAttribute(\"class\", \"link link-dirty\");\n\n  const aboutUsBtn = document.createElement(\"a\");\n  aboutUsBtn.textContent = \"About us\";\n  aboutUsBtn.setAttribute(\"id\", \"about-us\");\n  aboutUsBtn.setAttribute(\"class\", \"link link-dirty\");\n\n  const menuBtn = document.createElement(\"a\");\n  menuBtn.textContent = \"Menu\";\n  menuBtn.setAttribute(\"id\", \"menu\");\n  menuBtn.setAttribute(\"class\", \"link link-dirty\");\n\n  nav.appendChild(homeBtn);\n  nav.appendChild(aboutUsBtn);\n  nav.appendChild(menuBtn);\n\n  return nav;\n}\n\nfunction createMainContainer() {\n  const main = document.createElement(\"div\");\n  main.classList.add(\"main-container\");\n  main.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n  return main;\n}\n\nfunction createFooter() {\n  const footer = document.createElement(\"footer\");\n  const author = document.createElement(\"a\");\n  author.innerHTML = `Made by Kaz <i class=\"fa-brands fa-github\"></i> `;\n  author.href = \"https://github.com/kazmonroy\";\n  author.target = \"_blank\";\n\n  footer.appendChild(author);\n  return footer;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/load-page.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage() {\n  const mainContainer = document.querySelector(\".main-container\");\n\n  mainContainer.textContent = \"\";\n  mainContainer.classList.add(\"bg\");\n  mainContainer.appendChild(createMenu());\n}\n\nfunction createMenu() {\n  const menuContainer = document.createElement(\"div\");\n  menuContainer.classList.add(\"menu-container\");\n\n  const menuList = document.createElement(\"div\");\n  menuList.classList.add(\"menu-list\");\n\n  menuList.appendChild(\n    createDishCard(\n      \"California Roll\",\n      \"Lorem ipsum dolor sit amet.\",\n      \"https://images.unsplash.com/photo-1563200049-063524a8ee59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80\"\n    )\n  );\n\n  menuList.appendChild(\n    createDishCard(\n      \"California Roll\",\n      \"Lorem ipsum dolor sit amet.\",\n      \"https://images.unsplash.com/photo-1563200049-063524a8ee59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80\"\n    )\n  );\n\n  menuList.appendChild(\n    createDishCard(\n      \"California Roll\",\n      \"Lorem ipsum dolor sit amet.\",\n      \"https://images.unsplash.com/photo-1563200049-063524a8ee59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80\"\n    )\n  );\n\n  menuList.appendChild(\n    createDishCard(\n      \"California Roll\",\n      \"Lorem ipsum dolor sit amet.\",\n      \"https://images.unsplash.com/photo-1563200049-063524a8ee59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80\"\n    )\n  );\n\n  menuList.appendChild(\n    createDishCard(\n      \"California Roll\",\n      \"Lorem ipsum dolor sit amet.\",\n      \"https://images.unsplash.com/photo-1563200049-063524a8ee59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80\"\n    )\n  );\n\n  menuList.appendChild(\n    createDishCard(\n      \"California Roll\",\n      \"Lorem ipsum dolor sit amet.\",\n      \"https://images.unsplash.com/photo-1563200049-063524a8ee59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80\"\n    )\n  );\n\n  menuContainer.appendChild(menuList);\n\n  return menuContainer;\n}\n\nfunction createDishCard(title, text, img) {\n  const card = document.createElement(\"div\");\n  card.classList.add(\"dish\");\n\n  const cardInfoContainer = document.createElement(\"div\");\n  cardInfoContainer.classList.add(\"dish-info\");\n\n  const cardImg = document.createElement(\"img\");\n  const cardTitle = document.createElement(\"h2\");\n  const cardText = document.createElement(\"p\");\n\n  cardTitle.textContent = title;\n  cardText.textContent = text;\n  cardImg.src = img;\n\n  cardInfoContainer.appendChild(cardTitle);\n  cardInfoContainer.appendChild(cardText);\n\n  card.appendChild(cardImg);\n  card.appendChild(cardInfoContainer);\n\n  return card;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/nav-links-events.js":
/*!*****************************************!*\
  !*** ./src/modules/nav-links-events.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navLinksEvents)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _about_us_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.js */ \"./src/modules/about-us.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/modules/menu.js\");\n\n\n\n\nfunction navLinksEvents() {\n  const navLinks = document.querySelectorAll(\".nav-bar a\");\n  navLinks.forEach((link) => {\n    link.addEventListener(\"click\", () => {\n      if (link.textContent === \"About us\") {\n        (0,_about_us_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      } else if (link.textContent === \"Home\") {\n        const mainContainer = document.querySelector(\".main-container\");\n\n        if (mainContainer.firstElementChild.classList !== \"\") {\n          mainContainer.removeChild(mainContainer.firstChild);\n          mainContainer.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n        }\n      } else {\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      }\n    });\n  });\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/nav-links-events.js?");

/***/ }),

/***/ "./src/assets/img/hero-cover.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/hero-cover.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"25ad575ed3513fee9dd0.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img/hero-cover.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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