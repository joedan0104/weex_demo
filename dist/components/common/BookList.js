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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
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
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
navigator.setNavBarTitle({ 'title': '书籍详情' }, null);
var modal = weex.requireModule('modal');
exports.default = {
    name: "BookList",
    props: ['isShowTitle', 'header', 'bookList'],
    methods: {
        detailBook: function detailBook(event) {
            console.log('will jump');
            navigator.push({
                url: 'http://192.168.190.153:8081/dist/views/BookDetail.js',
                animated: "true"
            }, function (event) {
                //                modal.toast({ message: 'callback:::: ' + event })
            });
        }
    }
};

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [(_vm.isShowTitle) ? _c('div', {
    staticClass: ["book-title"]
  }, [_c('text', {
    staticClass: ["title-text"]
  }, [_vm._v(_vm._s(_vm.header.title))]), _c('a', {
    staticClass: ["more-con"],
    attrs: {
      "href": _vm.header.moreLink
    }
  }, [_c('text', {
    staticClass: ["more", "iconfont"]
  }, [_vm._v("更多")])])]) : _vm._e(), _c('scroller', {
    staticClass: ["box"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, _vm._l((_vm.bookList), function(book, index) {
    return _c('div', {
      key: index,
      staticClass: ["box-list"]
    }, [_c('a', {
      staticClass: ["category-slide"],
      on: {
        "click": _vm.detailBook
      }
    }, [_c('image', {
      staticClass: ["book-cover"],
      attrs: {
        "src": book.imgUrl,
        "size": "cover"
      }
    }), _c('text', {
      staticClass: ["img-desc"]
    }, [_vm._v(_vm._s(book.imgDesc))])])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(11)
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
__vue_options__.__file = "/home/dell/DEV/developer/weex-vue/src/components/common/BookList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2eb01af4"
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


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "hflyicon"
  },
  "book-title": {
    "flexDirection": "row",
    "height": "114",
    "alignItems": "center"
  },
  "title-text": {
    "fontSize": "34"
  },
  "more-con": {
    "flex": 1
  },
  "more": {
    "fontSize": "32",
    "color": "#898989",
    "textAlign": "right"
  },
  "box": {
    "paddingBottom": "35",
    "height": "340"
  },
  "book-list": {
    "height": "340"
  },
  "book-cover": {
    "width": "160",
    "height": "225"
  },
  "img-desc": {
    "width": "200",
    "paddingTop": "15",
    "fontSize": "26",
    "lineHeight": "40",
    "textOverflow": "ellipsis",
    "overflow": "hidden",
    "display": "-webkit-box",
    "WebkitBoxOrient": "vertical",
    "WebkitLineClamp": 2,
    "lines": 2
  },
  "category-slide": {
    "alignItems": "center",
    "width": "208",
    "height": "340"
  }
}

/***/ })

/******/ });