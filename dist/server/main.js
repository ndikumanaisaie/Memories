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

/***/ "./src/server/controllers/posts.js":
/*!*****************************************!*\
  !*** ./src/server/controllers/posts.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPost\": () => (/* binding */ createPost),\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts)\n/* harmony export */ });\n/* harmony import */ var _models_postMessage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/postMessage.js */ \"./src/server/models/postMessage.js\");\n\r\n\r\nconst getPosts = async (req, res) => {\r\n try {\r\n  const postMessages = await _models_postMessage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\r\n\r\n  res.status(200).json(postMessages);\r\n\r\n } catch (error) {\r\n\r\n  res.status(400).json({message: error.message});\r\n\r\n }\r\n};\r\n\r\nconst createPost = async (req, res) => {\r\n  const post = req.body;\r\n\r\n  const newPost = new _models_postMessage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](post);\r\n\r\n  try {\r\n    await newPost.save();\r\n\r\n    res.status(201).json(newPost)\r\n  } catch (error) {\r\n    res.status(409).json({message: error.message});\r\n  }\r\n}\n\n//# sourceURL=webpack://portfolio/./src/server/controllers/posts.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes_posts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/posts.js */ \"./src/server/routes/posts.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// To be edited\r\n\r\n\r\ndotenv__WEBPACK_IMPORTED_MODULE_2___default().config();\r\n\r\nconst mongoStr = process.env.DATABASE_URL;\r\nmongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(mongoStr);\r\nconst database = (mongoose__WEBPACK_IMPORTED_MODULE_1___default().connection);\r\n\r\ndatabase.on('error', (error) => {\r\n\tconsole.log(error);\r\n});\r\n\r\ndatabase.on('connected', () => {\r\n\tconsole.log('Database connected');\r\n});\r\n\r\nconst PORT = process.env.PORT || 5000;\r\n\r\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\r\n\r\n// To be edited\r\napp.use('/posts', _routes_posts_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n\r\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default().json({ limit: '30mb', extended: true }));\r\n\r\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default().urlencoded({ limit: '30mb', extended: true }));\r\n\r\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\r\n\r\napp.listen(PORT, () => {\r\n\tconsole.log(`Starting server at port ${PORT}`);\r\n});\n\n//# sourceURL=webpack://portfolio/./src/server/index.js?");

/***/ }),

/***/ "./src/server/models/postMessage.js":
/*!******************************************!*\
  !*** ./src/server/models/postMessage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst postSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({\r\n  title: String,\r\n  message: String,\r\n  creator: [String],\r\n  tags: [String],\r\n  likeCount: {\r\n    type: Number,\r\n    default: 0\r\n  }, \r\n  createdAt: {\r\n    type: Date,\r\n    default: new Date()\r\n  },\r\n});\r\n\r\nconst PostMessage = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('PostMessage', postSchema);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostMessage);\n\n//# sourceURL=webpack://portfolio/./src/server/models/postMessage.js?");

/***/ }),

/***/ "./src/server/routes/posts.js":
/*!************************************!*\
  !*** ./src/server/routes/posts.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_posts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/posts.js */ \"./src/server/controllers/posts.js\");\n\r\n\r\n\r\n\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n\r\nrouter.get('/', _controllers_posts_js__WEBPACK_IMPORTED_MODULE_1__.getPosts);\r\nrouter.post('/', _controllers_posts_js__WEBPACK_IMPORTED_MODULE_1__.createPost);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://portfolio/./src/server/routes/posts.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;