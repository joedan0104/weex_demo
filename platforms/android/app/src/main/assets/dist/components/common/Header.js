// { "framework": "Vue"} 

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = {
  "top-header": {
    "backgroundColor": "#0e9cfa",
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": "80",
    "flexDirection": "row"
  },
  "logo-con": {
    "width": "80",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "icon": {
    "fontFamily": "'iconfont'"
  },
  "back-con": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "height": "80",
    "width": "80"
  },
  "back-btn": {
    "color": "#ffffff",
    "fontSize": "40",
    "lineHeight": "80",
    "textAlign": "center",
    "width": "80"
  },
  "logo": {
    "width": "50",
    "height": "50"
  },
  "title": {
    "height": "80",
    "lineHeight": "80",
    "flex": 1
  },
  "top-title": {
    "color": "#ffffff",
    "height": "80",
    "lineHeight": "80"
  },
  "center": {
    "textAlign": "center"
  },
  "left": {
    "textAlign": "left"
  }
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: ['title', 'alignTitle', 'logoShow', 'back'],
  data: function data() {
    return {
      logo: '../../src/assets/images/logo.png'
    };
  }
};

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: ["top-header"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [(_vm.logoShow) ? _c('a', {
    staticClass: ["logo-con"],
    attrs: {
      "href": "http://m.chinaacc.com"
    }
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": _vm.logo
    }
  })]) : _vm._e(), (_vm.back) ? _c('a', {
    staticClass: ["back-con"]
  }, [_c('text', {
    staticClass: ["icon", "back-btn"]
  }, [_vm._v("")])]) : _vm._e(), _c('div', {
    staticClass: ["title"]
  }, [_c('text', {
    staticClass: ["top-title"],
    class: _vm.alignTitle
  }, [_vm._v(_vm._s(_vm.title))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(0)
)

/* script */
__vue_exports__ = __webpack_require__(1)

/* template */
var __vue_template__ = __webpack_require__(2)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/mac/Desktop/app-book/src/components/common/Header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-462ec022"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });