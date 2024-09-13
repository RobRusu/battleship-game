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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n}\r\n\r\n.menu {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2vw;\r\n  height: 5vh;\r\n  align-items: center;\r\n}\r\n\r\n.gameboard {\r\n  display: flex;\r\n  gap: 5vw;\r\n  justify-content: center;\r\n}\r\n\r\n.player,\r\n.computer {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 50px);\r\n  grid-template-rows: repeat(10, 50px);\r\n  border: 1px solid black;\r\n}\r\n\r\n.cell {\r\n  display: flex;\r\n  border: 1px solid black;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  &:hover {\r\n    border: min(0.2vh, 0.2vw) solid blue;\r\n  }\r\n}\r\n\r\n.hit {\r\n  background-color: red;\r\n}\r\n\r\n.miss {\r\n  background-color: grey;\r\n}\r\n\r\n.logoTitle {\r\n  width: 10vw;\r\n  height: 15vh;\r\n  margin-top: 1vh;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: start;\r\n}\r\n\r\n.message {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 5vh;\r\n  margin-top: -2vh;\r\n  font-size: min(2vh, 2vw);\r\n}\r\n\r\ninput {\r\n  width: 2vw;\r\n  text-align: center;\r\n}\r\n\r\n.carrier,\r\n.battleship,\r\n.destroyer,\r\n.submarine,\r\n.patrolBoat {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 2vw;\r\n}\r\n\r\n.patrolBoat {\r\n  margin-bottom: 2vh;\r\n}\r\n\r\n.placeShips {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.controls {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 3vw;\r\n}\r\n\r\n.place {\r\n  background-color: black;\r\n  border-radius: 1rem;\r\n  padding: min(0.6vh, 0.6vw);\r\n  border: none;\r\n  color: white;\r\n  width: 30%;\r\n  font-weight: bold;\r\n  &:hover {\r\n    background-color: rgb(29, 27, 27);\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.restartBtn {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.restart {\r\n  background-color: black;\r\n  border-radius: 1rem;\r\n  padding: min(1vh, 1vw);\r\n  margin: min(1.5vh, 1.5vw);\r\n  border: none;\r\n  color: white;\r\n  font-weight: bold;\r\n  &:hover {\r\n    background-color: rgb(29, 27, 27);\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.playerShip {\r\n  background-color: blue;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/computerMoves.js":
/*!******************************!*\
  !*** ./src/computerMoves.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerMoves: () => (/* binding */ computerMoves)\n/* harmony export */ });\n/* harmony import */ var _renderGameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderGameboard */ \"./src/renderGameboard.js\");\n\n\nfunction computerMoves(ships) {\n  const delay = Math.floor(Math.random() * 1500);\n  let playerBoard = document.querySelector(\".player\");\n  let computerBoard = document.querySelector(\".computer\");\n  let playerChildren = document.querySelector(\".player\").children;\n  let displayMessage = document.querySelector(\".message\");\n  let attackedCells = 0;\n  let coordinates = [];\n\n  ships.forEach((ship) => {\n    let shipCoordinates = ship.coordinates;\n    shipCoordinates.forEach((coordinate) => {\n      coordinates.push(coordinate);\n    });\n  });\n\n  setTimeout(() => {\n    const randomRow = Math.floor(Math.random() * 10);\n    const randomCol = Math.floor(Math.random() * 10);\n\n    const boardCell = document.querySelector(\n      `[data-row=\"${randomRow}\"][data-col=\"${randomCol}\"]`\n    );\n\n    if (\n      !boardCell.classList.contains(\"hit\") &&\n      !boardCell.classList.contains(\"miss\")\n    ) {\n      const isHit = coordinates.some(\n        (coordinate) =>\n          coordinate[0] === randomRow && coordinate[1] === randomCol\n      );\n\n      if (isHit) {\n        boardCell.classList.remove(\"playerShip\");\n        boardCell.classList.add(\"hit\");\n      } else {\n        boardCell.classList.add(\"miss\");\n      }\n\n      for (let i = 0; i < playerChildren.length; i++) {\n        let child = playerChildren[i];\n        if (child.classList.contains(\"hit\")) attackedCells++;\n      }\n\n      console.log(attackedCells);\n\n      if (attackedCells === 17) {\n        displayMessage.textContent = `Game over, computer won!`;\n        playerBoard.style.pointerEvents = \"none\";\n        computerBoard.style.pointerEvents = \"none\";\n      } else {\n        attackedCells = 0;\n        (0,_renderGameboard__WEBPACK_IMPORTED_MODULE_0__.switchTurns)();\n      }\n    } else {\n      computerMoves(ships);\n    }\n  }, delay);\n}\n\nfunction allShipsSunk(ships) {\n  let shipsSunkCount = 0;\n  ships.forEach((ship) => {\n    if (ship.sunk === true) shipsSunkCount++;\n  });\n\n  if (shipsSunkCount === 5) return true;\n  return false;\n}\n\n\n//# sourceURL=webpack://template/./src/computerMoves.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\nclass Gameboard {\n  constructor(size = 10) {\n    this.size = size;\n    this.missedHits = [];\n  }\n\n  createBoard() {\n    let board = [];\n    for (let i = 0; i < this.size; i++) {\n      board.push([]);\n      for (let j = 0; j < this.size; j++) {\n        board[i].push(0);\n      }\n    }\n\n    return board;\n  }\n\n  isValidPlacement(board, ship, startRow, startCol, orientation) {\n    if (orientation === \"horizontal\") {\n      if (startCol + ship.length > this.size) return false; // Ship goes out of bounds\n\n      for (let i = 0; i < ship.length; i++) {\n        if (board[startRow][startCol + i] !== 0) return false; // Overlaps another ship\n      }\n    } else if (orientation === \"vertical\") {\n      if (startRow + ship.length > this.size) return false; // Ship goes out of bounds\n\n      for (let i = 0; i < ship.length; i++) {\n        if (board[startRow + i][startCol] !== 0) return false; // Overlaps another ship\n      }\n    }\n    return true;\n  }\n\n  placeShip(board, ship, startRow, startCol, orientation) {\n    if (this.isValidPlacement(board, ship, startRow, startCol, orientation)) {\n      let coordinates = [];\n\n      if (orientation === \"horizontal\") {\n        for (let i = 0; i < ship.length; i++) {\n          board[startRow][startCol + i] = 1; // Mark the ship's position on the board\n          coordinates.push([startRow, startCol + i]); // Store the ship's coordinates\n        }\n      } else if (orientation === \"vertical\") {\n        for (let i = 0; i < ship.length; i++) {\n          board[startRow + i][startCol] = 1; // Mark the ship's position on the board\n          coordinates.push([startRow + i, startCol]); // Store the ship's coordinates\n        }\n      }\n      ship.setCoordinates(coordinates); // Assign coordinates to the ship\n      console.log(\n        `${ship.length}-length ship placed at ${coordinates} ${orientation}`\n      );\n    } else {\n      console.log(\n        `Invalid placement for ${ship.length}-length ship at (${startRow}, ${startCol}) ${orientation}`\n      );\n      return false;\n    }\n  }\n\n  receiveAttack(board, row, col, ships, cell = 0) {\n    if (board[row][col] === 1) {\n      board[row][col] = \"X\";\n      ships.forEach((ship) => {\n        if (this.checkShipCoordinates(ship, row, col)) {\n          ship.hit();\n          if (cell) cell.classList.add(\"hit\");\n          cell.style.pointerEvents = \"none\";\n        }\n      });\n      if (this.allShipsSunk(ships)) return true;\n      return false;\n    } else if (board[row][col] === 0) {\n      board[row][col] = \"O\";\n      this.missedHits.push([row, col]);\n      if (cell) cell.classList.add(\"miss\");\n      cell.style.pointerEvents = \"none\";\n    }\n  }\n\n  checkShipCoordinates(obj, row, col) {\n    let target = [row, col];\n\n    let exists = obj.coordinates.some(\n      (coordinate) =>\n        coordinate.length === target.length &&\n        coordinate.every((value, index) => value === target[index])\n    );\n\n    if (exists) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  allShipsSunk(ships) {\n    let shipsSunkCount = 0;\n    ships.forEach((ship) => {\n      if (ship.sunk === true) shipsSunkCount++;\n    });\n\n    if (shipsSunkCount === 5) return true;\n    return false;\n  }\n}\n\n\n//# sourceURL=webpack://template/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _renderGameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGameboard */ \"./src/renderGameboard.js\");\n/* harmony import */ var _img_logo_black_small_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/logo-black-small.png */ \"./img/logo-black-small.png\");\n\n\n\n\nconst placeShips = document.querySelector(\".place\");\nconst placeShipsDiv = document.querySelector(\".placeShips\");\nconst logo = document.querySelector(\".logoTitle\");\nconst displayMessage = document.querySelector(\".message\");\nconst restart = document.querySelector(\".restart\");\nconst playerBoard = document.querySelector(\".player\");\nconst computerBoard = document.querySelector(\".computer\");\nlogo.src = _img_logo_black_small_png__WEBPACK_IMPORTED_MODULE_2__;\nlogo.alt = \"aqua armada logo\";\n\nrestart.style.display = \"none\";\n\nplaceShips.addEventListener(\"click\", () => {\n  (0,_renderGameboard__WEBPACK_IMPORTED_MODULE_1__.createGameboard)(\"player\");\n  (0,_renderGameboard__WEBPACK_IMPORTED_MODULE_1__.createGameboard)(\"computer\");\n  displayMessage.textContent = \"Your turn\";\n  placeShipsDiv.style.display = \"none\";\n  restart.style.display = \"block\";\n});\n\nrestart.addEventListener(\"click\", () => {\n  let carrierRow = document.getElementById(\"carrierRow\");\n  let carrierCol = document.getElementById(\"carrierCol\");\n\n  let battleshipRow = document.getElementById(\"battleshipRow\");\n  let battleshipCol = document.getElementById(\"battleshipCol\");\n\n  let destroyerRow = document.getElementById(\"destroyerRow\");\n  let destroyerCol = document.getElementById(\"destroyerCol\");\n\n  let submarineRow = document.getElementById(\"submarineRow\");\n  let submarineCol = document.getElementById(\"submarineCol\");\n\n  let patrolBoatRow = document.getElementById(\"patrolBoatRow\");\n  let patrolBoatCol = document.getElementById(\"patrolBoatCol\");\n\n  let message = document.querySelector(\".message\");\n\n  placeShipsDiv.style.display = \"flex\";\n  playerBoard.textContent = \"\";\n  computerBoard.textContent = \"\";\n  message.textContent = \"Place your ships\";\n  carrierRow.value = 0;\n  carrierCol.value = 0;\n\n  battleshipRow.value = 1;\n  battleshipCol.value = 0;\n\n  destroyerRow.value = 2;\n  destroyerCol.value = 0;\n\n  submarineRow.value = 3;\n  submarineCol.value = 0;\n\n  patrolBoatRow.value = 4;\n  patrolBoatCol.value = 0;\n});\n\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nclass Player {\n  constructor(type) {\n    this.playerType = type;\n    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n  }\n}\n\n\n//# sourceURL=webpack://template/./src/player.js?");

/***/ }),

/***/ "./src/renderGameboard.js":
/*!********************************!*\
  !*** ./src/renderGameboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGameboard: () => (/* binding */ createGameboard),\n/* harmony export */   switchTurns: () => (/* binding */ switchTurns)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _computerMoves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computerMoves */ \"./src/computerMoves.js\");\n/* harmony import */ var _shipsPlayerPlacement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipsPlayerPlacement */ \"./src/shipsPlayerPlacement.js\");\n/* harmony import */ var _shipsComputerPlacement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shipsComputerPlacement */ \"./src/shipsComputerPlacement.js\");\n\n\n\n\n\n\nlet playerShips = createPlayerShips();\nlet computerShips = createPlayerShips();\nlet currentPlayer = 1;\nlet displayMessage = document.querySelector(\".message\");\n\nfunction createGameboard(player) {\n  if (player === \"player\") {\n    let playerObj = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(player);\n    let playerGameboard = playerObj.board;\n    let playerBoard = playerGameboard.createBoard();\n    let DOMBoard = document.querySelector(`.${player}`);\n    DOMBoard.style.pointerEvents = \"none\";\n    (0,_shipsPlayerPlacement__WEBPACK_IMPORTED_MODULE_3__.playerPlacement)(playerGameboard, playerBoard, playerShips);\n    displayBoard(playerBoard, playerGameboard, player);\n  } else if (player === \"computer\") {\n    let computerObj = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(player);\n    let computerGameboard = computerObj.board;\n    let computerBoard = computerGameboard.createBoard();\n    (0,_shipsComputerPlacement__WEBPACK_IMPORTED_MODULE_4__.computerPlacement)(computerGameboard, computerBoard, computerShips);\n    displayBoard(computerBoard, computerGameboard, player);\n  }\n}\n\nfunction switchTurns() {\n  let playerBoard = document.querySelector(\".player\");\n  let computerBoard = document.querySelector(\".computer\");\n  currentPlayer = currentPlayer === 1 ? 2 : 1;\n  console.log(`Is player's ${currentPlayer} turn`);\n\n  if (currentPlayer === 1) {\n    displayMessage.textContent = \"Your turn\";\n    playerBoard.style.pointerEvents = \"none\";\n    computerBoard.style.pointerEvents = \"auto\";\n  } else {\n    displayMessage.textContent = \"Computer's turn\";\n    playerBoard.style.pointerEvents = \"none\";\n    computerBoard.style.pointerEvents = \"none\";\n    (0,_computerMoves__WEBPACK_IMPORTED_MODULE_2__.computerMoves)(playerShips);\n  }\n}\n\nfunction displayBoard(board, gameboard, player) {\n  let DOMBoard = document.querySelector(`.${player}`);\n  let ships;\n  if (player === \"player\") {\n    ships = playerShips;\n  } else {\n    ships = computerShips;\n  }\n  board.forEach((row, i) => {\n    row.forEach((cell, j) => {\n      const boardCell = document.createElement(\"div\");\n      boardCell.classList.add(\"cell\");\n      boardCell.dataset.row = i;\n      boardCell.dataset.col = j;\n      if (cell === 1 && player === \"player\")\n        boardCell.classList.add(\"playerShip\");\n\n      boardCell.addEventListener(\"click\", () => {\n        gameboard.receiveAttack(board, i, j, ships, boardCell);\n        if (gameboard.allShipsSunk(ships) === true) {\n          displayMessage.textContent = `Game over, you won!`;\n          DOMBoard.style.pointerEvents = \"none\";\n        } else {\n          switchTurns();\n        }\n      });\n      DOMBoard.appendChild(boardCell);\n    });\n  });\n}\n\nfunction createPlayerShips() {\n  return [\n    new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(5), // carrier\n    new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(4), // battleship\n    new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3), // destroyer\n    new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3), // submarine\n    new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(2), // patrol boat\n  ];\n}\n\n\n//# sourceURL=webpack://template/./src/renderGameboard.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hits = 0;\n    this.sunk = false;\n    this.coordinates = [];\n  }\n\n  hit() {\n    this.hits++;\n    this.isSunk();\n  }\n\n  isSunk() {\n    if (this.hits >= this.length) this.sunk = true;\n  }\n\n  setCoordinates(coordinates) {\n    this.coordinates = coordinates;\n  }\n}\n\n\n//# sourceURL=webpack://template/./src/ship.js?");

/***/ }),

/***/ "./src/shipsComputerPlacement.js":
/*!***************************************!*\
  !*** ./src/shipsComputerPlacement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerPlacement: () => (/* binding */ computerPlacement)\n/* harmony export */ });\nfunction computerPlacement(gameboard, board, ships) {\n  ships.forEach((ship) => {\n    let placed = false;\n\n    while (!placed) {\n      let orientation = generateOrientation();\n      let randomRow = Math.floor(Math.random() * 10);\n      let randomCol = Math.floor(Math.random() * 10);\n\n      if (\n        gameboard.isValidPlacement(\n          board,\n          ship,\n          randomRow,\n          randomCol,\n          orientation\n        )\n      ) {\n        gameboard.placeShip(board, ship, randomRow, randomCol, orientation);\n        placed = true;\n      }\n    }\n  });\n}\n\nfunction generateOrientation() {\n  const isHorizontal = Math.random() < 0.5;\n\n  if (isHorizontal) {\n    return \"horizontal\";\n  } else {\n    return \"vertical\";\n  }\n}\n\n\n//# sourceURL=webpack://template/./src/shipsComputerPlacement.js?");

/***/ }),

/***/ "./src/shipsPlayerPlacement.js":
/*!*************************************!*\
  !*** ./src/shipsPlayerPlacement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playerPlacement: () => (/* binding */ playerPlacement)\n/* harmony export */ });\nfunction playerPlacement(gameboard, board, ships) {\n  //get carrier values\n  let carrierRow = Number(document.getElementById(\"carrierRow\").value);\n  let carrierCol = Number(document.getElementById(\"carrierCol\").value);\n  let orientationCarrier = document.getElementById(\"orientationCarrier\").value;\n\n  //get battleship values\n  let battleshipRow = Number(document.getElementById(\"battleshipRow\").value);\n  let battleshipCol = Number(document.getElementById(\"battleshipCol\").value);\n  let orientationBattleship = document.getElementById(\n    \"orientationBattleship\"\n  ).value;\n\n  //get destroyer values\n  let destroyerRow = Number(document.getElementById(\"destroyerRow\").value);\n  let destroyerCol = Number(document.getElementById(\"destroyerCol\").value);\n  let orientationDestroyer = document.getElementById(\n    \"orientationDestroyer\"\n  ).value;\n\n  //get submarine values\n  let submarineRow = Number(document.getElementById(\"submarineRow\").value);\n  let submarineCol = Number(document.getElementById(\"submarineCol\").value);\n  let orientationSubmarine = document.getElementById(\n    \"orientationSubmarine\"\n  ).value;\n\n  //get patrolBoat values\n  let patrolBoatRow = Number(document.getElementById(\"patrolBoatRow\").value);\n  let patrolBoatCol = Number(document.getElementById(\"patrolBoatCol\").value);\n  let orientationPatrolBoat = document.getElementById(\n    \"orientationPatrolBoat\"\n  ).value;\n\n  if (\n    carrierRow >= 0 &&\n    carrierRow <= 9 &&\n    carrierCol >= 0 &&\n    carrierCol <= 9\n  ) {\n    gameboard.placeShip(\n      board,\n      ships[0],\n      carrierRow,\n      carrierCol,\n      orientationCarrier\n    );\n  }\n\n  if (\n    battleshipRow >= 0 &&\n    battleshipRow <= 9 &&\n    battleshipCol >= 0 &&\n    battleshipCol <= 9\n  ) {\n    gameboard.placeShip(\n      board,\n      ships[1],\n      battleshipRow,\n      battleshipCol,\n      orientationBattleship\n    );\n  }\n  if (\n    destroyerRow >= 0 &&\n    destroyerRow <= 9 &&\n    destroyerCol >= 0 &&\n    destroyerCol <= 9\n  ) {\n    gameboard.placeShip(\n      board,\n      ships[2],\n      destroyerRow,\n      destroyerCol,\n      orientationDestroyer\n    );\n  }\n  if (\n    submarineRow >= 0 &&\n    submarineRow <= 9 &&\n    submarineCol >= 0 &&\n    submarineCol <= 9\n  ) {\n    gameboard.placeShip(\n      board,\n      ships[3],\n      submarineRow,\n      submarineCol,\n      orientationSubmarine\n    );\n  }\n  if (\n    patrolBoatRow >= 0 &&\n    patrolBoatRow <= 9 &&\n    patrolBoatCol >= 0 &&\n    patrolBoatCol <= 9\n  ) {\n    gameboard.placeShip(\n      board,\n      ships[4],\n      patrolBoatRow,\n      patrolBoatCol,\n      orientationPatrolBoat\n    );\n  }\n}\n\n\n//# sourceURL=webpack://template/./src/shipsPlayerPlacement.js?");

/***/ }),

/***/ "./img/logo-black-small.png":
/*!**********************************!*\
  !*** ./img/logo-black-small.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"949d7c99c480aa9540cb.png\";\n\n//# sourceURL=webpack://template/./img/logo-black-small.png?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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