/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n    height: 100vh;\\n    width: 100vw;\\n    margin: 0px;\\n    background-color: rgb(33, 35, 41);\\n}\\n\\n* {\\n    outline: none;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\na,\\nli,\\nul {\\n    margin: 20px;\\n    color: #c9c9c9;\\n    font-family: \\\"Montserrat\\\", sans-serif;\\n}\\n\\nh1 {\\n\\tfont-weight: 100;\\n}\\n\\np {\\n\\tfont-weight: 800;\\n}\\n\\n.enable {\\n\\tcolor: rgb(25, 240, 229);\\n}\\n\\n.disable {\\n\\tcolor: rgb(184, 44, 44);\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/types.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\nfunction frodo() {\n    return __awaiter(this, void 0, void 0, function () {\n        function supportChecker(name) {\n            return __awaiter(this, void 0, void 0, function () {\n                var _a, err_1;\n                return __generator(this, function (_b) {\n                    switch (_b.label) {\n                        case 0:\n                            _b.trys.push([0, 2, , 3]);\n                            _a = Boolean;\n                            return [4 /*yield*/, navigator.requestMediaKeySystemAccess(name, config)];\n                        case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];\n                        case 2:\n                            err_1 = _b.sent();\n                            return [2 /*return*/, false];\n                        case 3: return [2 /*return*/];\n                    }\n                });\n            });\n        }\n        var testVideoElement, isOGGSupported, isWEBMSupported, isMPEG4Supported, isVP8Supported, isVP9Supported, isH264Supported, isH265Supported, isHLSSupported, isMediaSourceSupported, isDashSupported, config;\n        return __generator(this, function (_a) {\n            testVideoElement = document.createElement('video');\n            isMediaSourceSupported = _types__WEBPACK_IMPORTED_MODULE_1__[\"MEDIA_SOURSES\"].MEDIA in window ||\n                _types__WEBPACK_IMPORTED_MODULE_1__[\"MEDIA_SOURSES\"].WEBKIT in window ||\n                _types__WEBPACK_IMPORTED_MODULE_1__[\"MEDIA_SOURSES\"].MOZILA in window ||\n                _types__WEBPACK_IMPORTED_MODULE_1__[\"MEDIA_SOURSES\"].MICROSOFT in window;\n            isDashSupported = isMediaSourceSupported;\n            // video codecs & streaming\n            if (testVideoElement.canPlayType) {\n                isOGGSupported = testVideoElement.canPlayType(_types__WEBPACK_IMPORTED_MODULE_1__[\"CODECS\"].OGG) || false;\n                isWEBMSupported = testVideoElement.canPlayType(_types__WEBPACK_IMPORTED_MODULE_1__[\"CODECS\"].WEBM) || false;\n                isMPEG4Supported = testVideoElement.canPlayType(_types__WEBPACK_IMPORTED_MODULE_1__[\"CODECS\"].MPEG4) || false;\n                isVP8Supported = testVideoElement.canPlayType(_types__WEBPACK_IMPORTED_MODULE_1__[\"CODECS\"].VP8) || false;\n                isVP9Supported = testVideoElement.canPlayType(_types__WEBPACK_IMPORTED_MODULE_1__[\"CODECS\"].VP9) || false;\n                isH265Supported = testVideoElement.canPlayType(_types__WEBPACK_IMPORTED_MODULE_1__[\"CODECS\"].H265) || false;\n                isHLSSupported = testVideoElement.canPlayType(_types__WEBPACK_IMPORTED_MODULE_1__[\"CODECS\"].HLS) || false;\n                isH264Supported =\n                    testVideoElement.canPlayType(_types__WEBPACK_IMPORTED_MODULE_1__[\"CODECS\"].H264_1) ||\n                        testVideoElement.canPlayType(_types__WEBPACK_IMPORTED_MODULE_1__[\"CODECS\"].H265_2) ||\n                        false;\n            }\n            config = [\n                {\n                    initDataTypes: ['cenc'],\n                    audioCapabilities: [\n                        {\n                            contentType: 'audio/mp4;codecs=\"mp4a.40.2\"',\n                        },\n                    ],\n                    videoCapabilities: [\n                        {\n                            contentType: 'video/mp4;codecs=\"avc1.42E01E\"',\n                        },\n                    ],\n                },\n            ];\n            return [2 /*return*/, {\n                    codecs: {\n                        isH265Supported: isH265Supported,\n                        isOGGSupported: isOGGSupported,\n                        isMPEG4Supported: isMPEG4Supported,\n                        isH264Supported: isH264Supported,\n                        isWEBMSupported: isWEBMSupported,\n                        isVP8Supported: isVP8Supported,\n                        isVP9Supported: isVP9Supported,\n                    },\n                    streaming: { isHLSSupported: isHLSSupported, isDashSupported: isDashSupported, isMediaSourceSupported: isMediaSourceSupported },\n                    drm: {\n                        isWidevineSupported: function () { return supportChecker(_types__WEBPACK_IMPORTED_MODULE_1__[\"DRM\"].WIDEVINE); },\n                        isPlayerReadySupported: function () { return supportChecker(_types__WEBPACK_IMPORTED_MODULE_1__[\"DRM\"].PLAYREADY); },\n                        isClearkeySupported: function () { return supportChecker(_types__WEBPACK_IMPORTED_MODULE_1__[\"DRM\"].CLEARKEY); },\n                        isFairPlaySupported: function () {\n                            return supportChecker(_types__WEBPACK_IMPORTED_MODULE_1__[\"DRM\"].FAIRPLAY) ||\n                                supportChecker(_types__WEBPACK_IMPORTED_MODULE_1__[\"DRM\"].FPS1) ||\n                                supportChecker(_types__WEBPACK_IMPORTED_MODULE_1__[\"DRM\"].FPS2) ||\n                                supportChecker(_types__WEBPACK_IMPORTED_MODULE_1__[\"DRM\"].FPS3);\n                        },\n                    },\n                }];\n        });\n    });\n}\nfrodo().then(function (data) {\n    var codecsId = document.getElementById('codecs');\n    var streamingId = document.getElementById('streaming');\n    var emeId = document.getElementById('eme');\n    function createChildren(obj, attachedTo) {\n        return __awaiter(this, void 0, void 0, function () {\n            var _a, _b, _i, key, indicator, value;\n            return __generator(this, function (_c) {\n                switch (_c.label) {\n                    case 0:\n                        _a = [];\n                        for (_b in obj)\n                            _a.push(_b);\n                        _i = 0;\n                        _c.label = 1;\n                    case 1:\n                        if (!(_i < _a.length)) return [3 /*break*/, 6];\n                        key = _a[_i];\n                        indicator = document.createElement('p');\n                        value = void 0;\n                        if (!(typeof obj[key] === 'function')) return [3 /*break*/, 3];\n                        return [4 /*yield*/, obj[key]()];\n                    case 2:\n                        // @ts-ignore\n                        value = _c.sent();\n                        return [3 /*break*/, 4];\n                    case 3:\n                        value = obj[key];\n                        _c.label = 4;\n                    case 4:\n                        indicator.innerHTML = key\n                            .slice(2)\n                            .slice(0, key.indexOf('Supported') - 2) + \": <span class=\" + (value ? 'enable' : 'disable') + \" id=\\\"\" + key + \"\\\">\" + value + \"</span>\";\n                        attachedTo.append(indicator);\n                        _c.label = 5;\n                    case 5:\n                        _i++;\n                        return [3 /*break*/, 1];\n                    case 6: return [2 /*return*/];\n                }\n            });\n        });\n    }\n    try {\n        Promise.all([\n            createChildren(data.codecs, codecsId),\n            createChildren(data.streaming, streamingId),\n            createChildren(data.drm, emeId),\n        ]);\n    }\n    catch (e) {\n        console.log(\"Cant identify DRM System: \" + e);\n    }\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! exports provided: DRM, CODECS, MEDIA_SOURSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DRM\", function() { return DRM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CODECS\", function() { return CODECS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MEDIA_SOURSES\", function() { return MEDIA_SOURSES; });\nvar DRM;\n(function (DRM) {\n    DRM[\"WIDEVINE\"] = \"com.widevine.alpha\";\n    DRM[\"PLAYREADY\"] = \"com.microsoft.playready\";\n    DRM[\"CLEARKEY\"] = \"org.w3.clearkey\";\n    DRM[\"FAIRPLAY\"] = \"com.apple.fps\";\n    DRM[\"FPS1\"] = \"com.apple.fps.1_0\";\n    DRM[\"FPS2\"] = \"com.apple.fps.2_0\";\n    DRM[\"FPS3\"] = \"com.apple.fps.3_0\";\n})(DRM || (DRM = {}));\nvar CODECS;\n(function (CODECS) {\n    CODECS[\"OGG\"] = \"video/ogg;codecs=\\\"theora\\\"\";\n    CODECS[\"WEBM\"] = \"video/webm; codecs=\\\"vp8, vorbis\\\"\";\n    CODECS[\"MPEG4\"] = \"video/mp4; codecs=\\\"mp4v.20.8\\\"\";\n    CODECS[\"VP8\"] = \"video/webm; codecs=\\\"vp8\\\"\";\n    CODECS[\"VP9\"] = \"video/webm; codecs=\\\"vp9\\\"\";\n    CODECS[\"H264_1\"] = \"video/mp4; codecs=\\\"avc1.42E01E\\\"\";\n    CODECS[\"H265_2\"] = \"video/mp4; codecs=\\\"avc1.42E01E, mp4a.40.2\\\"\";\n    CODECS[\"H265\"] = \"video/mp4; codecs=\\\"hvc1.1.L0.0\\\"\";\n    CODECS[\"HLS\"] = \"application/vnd.apple.mpegURL\";\n})(CODECS || (CODECS = {}));\nvar MEDIA_SOURSES;\n(function (MEDIA_SOURSES) {\n    MEDIA_SOURSES[\"MEDIA\"] = \"MediaSource\";\n    MEDIA_SOURSES[\"WEBKIT\"] = \"WebKitMediaSource\";\n    MEDIA_SOURSES[\"MOZILA\"] = \"mozMediaSource\";\n    MEDIA_SOURSES[\"MICROSOFT\"] = \"msMediaSource\";\n})(MEDIA_SOURSES || (MEDIA_SOURSES = {}));\n\n\n//# sourceURL=webpack:///./src/types.ts?");

/***/ })

/******/ });