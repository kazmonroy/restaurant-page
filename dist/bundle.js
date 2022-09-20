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

/***/ "./src/about-us.js":
/*!*************************!*\
  !*** ./src/about-us.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAboutUs)\n/* harmony export */ });\nfunction loadAboutUs() {\n  const content = document.querySelector(\"#content\");\n\n  content.innerHTML = `\n\n  <nav>\n  <ul class=\"nav-links\">\n    <li><a href=\"./index.html\" class=\"link\">Home</a></li>\n    <li><a href=\"./about-us.html\" class=\"link\">About us</a></li>\n    <li><a href=\"./menu.html\" class=\"link\">Menu</a></li>\n  </ul>\n</nav>\n\n<section class=\"about-us-section\">\n  <div class=\"cards\">\n    <div class=\"card\">\n      <div class=\"card-text\">\n        <h2>About Us</h2>\n        <p>\n          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde\n          culpa nesciunt quam porro, architecto eos?\n        </p>\n      </div>\n\n      <img src=\"../src/img/sushi-2.jpg\" alt=\"\" />\n    </div>\n    <div class=\"card\">\n      <img src=\"../src/img/sushi-1.jpg\" alt=\"\" />\n      <div class=\"card-text\">\n        <h2>Our mission</h2>\n        <p>\n          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde\n          culpa nesciunt quam porro, architecto eos?\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<footer>\n  <a href=\"\">Made by Kaz <i class=\"fa-brands fa-github\"></i></a>\n</footer>\n  \n  `;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/about-us.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-page.js */ \"./src/load-page.js\");\n/* harmony import */ var _about_us_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.js */ \"./src/about-us.js\");\n\n\n\n// const content = document.querySelector(\"#content\");\n\n// loadPage();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadPage)\n/* harmony export */ });\nfunction loadPage() {\n  console.log(\"hi\");\n  const content = document.querySelector(\"#content\");\n\n  //   content.innerHTML = `\n\n  //     <nav>\n  //         <ul class=\"nav-links\">\n  //           <li><a href=\"./index.html\" class=\"link\">Home</a></li>\n  //           <li><a href=\"./about-us.html\" class=\"link\">About us</a></li>\n  //           <li><a href=\"./menu.html\" class=\"link\">Menu</a></li>\n  //         </ul>\n  //       </nav>\n\n  //       <section class=\"hero\">\n  //         <div class=\"hero-text\">\n  //           <h1 class=\"hero-title\">Vegan Sushi Bar</h1>\n  //           <div class=\"underline\"></div>\n  //           <div class=\"hero-subtitle\">This is how we roll!</div>\n  //           <a href=\"./menu.html\" class=\"btn\">Order today!</a>\n  //         </div>\n  //       </section>\n\n  //       <footer>\n  //         <a href=\"\">Made by Kaz <i class=\"fa-brands fa-github\"></i></a>\n  //       </footer>\n\n  //       `;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/load-page.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;