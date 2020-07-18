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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frodo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frodo.js":
/*!**********************!*\
  !*** ./src/frodo.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("async function frodo() {\n    const WIDEVINE = 'com.widevine.alpha';\n    const PLAYERREADY = 'com.microsoft.playready';\n    const CLEARKEY = 'org.w3.clearkey';\n    const FAIRPLAY = 'com.apple.fps';\n    const FPS1 = 'com.apple.fps.1_0';\n    const FPS2 = 'com.apple.fps.2_0';\n    const FPS3 = 'com.apple.fps.3_0';\n\n    const testVideoElement = document.createElement('video');\n    let isOGGSupported;\n    let isWEBMSupported;\n    let isMPEG4Supported;\n    let isVP8Supported;\n    let isVP9Supported;\n    let isH264Supported;\n    let isH265Supported;\n    let isHLSSupported;\n    const isMediaSourceSupported =\n        'MediaSource' in window ||\n        'WebKitMediaSource' in window ||\n        'mozMediaSource' in window ||\n        'msMediaSource' in window;\n    const isDashSupported = isMediaSourceSupported;\n\n    // video codecs & streaming\n\n    if (testVideoElement.canPlayType) {\n        isOGGSupported =\n            testVideoElement.canPlayType('video/ogg;codecs=\"theora\"') || false;\n\n        isWEBMSupported =\n            testVideoElement.canPlayType('video/webm; codecs=\"vp8, vorbis\"') ||\n            false;\n\n        isMPEG4Supported =\n            testVideoElement.canPlayType('video/mp4; codecs=\"mp4v.20.8\"') ||\n            false;\n\n        isVP8Supported =\n            testVideoElement.canPlayType('video/webm; codecs=\"vp8\"') || false;\n\n        isVP9Supported =\n            testVideoElement.canPlayType('video/webm; codecs=\"vp9\"') || false;\n\n        isH264Supported =\n            testVideoElement.canPlayType('video/mp4; codecs=\"avc1.42E01E\"') ||\n            testVideoElement.canPlayType(\n                'video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"'\n            ) ||\n            false;\n\n        isH265Supported =\n            testVideoElement.canPlayType('video/mp4; codecs=\"hvc1.1.L0.0\"') ||\n            testVideoElement.canPlayType('video/mp4; codecs=\"hev1.1.L0.0\"') ||\n            false;\n\n        isHLSSupported =\n            testVideoElement.canPlayType('application/vnd.apple.mpegURL') ||\n            false;\n    }\n\n    // DRM systems\n\n    const config = [\n        {\n            initDataTypes: ['cenc'],\n            audioCapabilities: [\n                {\n                    contentType: 'audio/mp4;codecs=\"mp4a.40.2\"',\n                },\n            ],\n            videoCapabilities: [\n                {\n                    contentType: 'video/mp4;codecs=\"avc1.42E01E\"',\n                },\n            ],\n        },\n    ];\n\n    async function supportChecker(name) {\n        try {\n            return Boolean(\n                await navigator.requestMediaKeySystemAccess(name, config)\n            );\n        } catch (err) {\n            return false;\n        }\n    }\n\n    return {\n        codecs: {\n            isH265Supported,\n            isOGGSupported,\n            isMPEG4Supported,\n            isH264Supported,\n            isWEBMSupported,\n            isVP8Supported,\n            isVP9Supported,\n        },\n        streaming: { isHLSSupported, isDashSupported, isMediaSourceSupported },\n        drm: {\n            isWidevineSupported: () => supportChecker(WIDEVINE),\n            isPlayerReadySupported: () => supportChecker(PLAYERREADY),\n            isClearkeySupported: () => supportChecker(CLEARKEY),\n            isFairPlaySupported: () =>\n                supportChecker(FAIRPLAY) ||\n                supportChecker(FPS1) ||\n                supportChecker(FPS2) ||\n                supportChecker(FPS3),\n        },\n    };\n}\n\nfrodo().then((data) => {\n    const codecsId = document.getElementById('codecs');\n    const streamingId = document.getElementById('streaming');\n    const emeId = document.getElementById('eme');\n\n    async function createChildren(obj, attachedTo) {\n        for (const key in obj) {\n            const indicator = document.createElement('p');\n            let value;\n\n            if (typeof obj[key] === 'function') {\n                value = await obj[key]();\n            } else {\n                value = obj[key];\n            }\n\n            indicator.innerHTML = `${key\n                .slice(2)\n                .slice(0, key.indexOf('Supported') - 2)}: <span class=${\n                value ? 'enable' : 'disable'\n            } id=\"${key}\">${value}</span>`;\n            attachedTo.append(indicator);\n        }\n    }\n\n    try {\n        Promise.all([\n            createChildren(data.codecs, codecsId),\n            createChildren(data.streaming, streamingId),\n            createChildren(data.drm, emeId),\n        ]);\n    } catch (e) {\n        console.log(`Cant identify DRM System: ${e}`);\n    }\n});\n\n\n//# sourceURL=webpack:///./src/frodo.js?");

/***/ })

/******/ });