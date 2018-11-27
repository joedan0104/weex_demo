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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
  "top-header": {
    "backgroundColor": "#0e9cfa",
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": "100",
    "flexDirection": "row"
  },
  "logo-con": {
    "width": "100",
    "height": "100",
    "position": "absolute",
    "top": 0,
    "left": 0,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "icon": {
    "fontFamily": "hflyicon"
  },
  "back-con": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "height": "100",
    "width": "100"
  },
  "back-btn": {
    "color": "#ffffff",
    "fontSize": "40",
    "lineHeight": "100",
    "textAlign": "center",
    "width": "100"
  },
  "logo": {
    "width": "50",
    "height": "50"
  },
  "title": {
    "height": "100",
    "lineHeight": "100",
    "flex": 1
  },
  "topTitle": {
    "color": "#ffffff",
    "height": "100",
    "lineHeight": "100",
    "fontSize": "36"
  },
  "center": {
    "textAlign": "center"
  },
  "left": {
    "textAlign": "left"
  }
}

/***/ }),
/* 1 */
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

var modal = weex.requireModule('modal');
exports.default = {
  props: ['title', 'alignTitle', 'logoShow', 'back'],
  data: function data() {
    return {
      logo: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1586000969,2420197735&fm=58'
    };
  },

  methods: {
    backPage: function backPage() {
      this.$router.go(-1);
    }
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["top-header"]
  }, [_c('div', {
    staticClass: ["title"]
  }, [_c('text', {
    staticClass: ["topTitle"],
    style: {
      'text-align': _vm.alignTitle,
      'padding-left': _vm.logoShow ? '100px' : 0
    }
  }, [_vm._v(_vm._s(_vm.title))])]), (_vm.logoShow) ? _c('a', {
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
    staticClass: ["back-con"],
    on: {
      "click": _vm.backPage
    }
  }, [_c('text', {
    staticClass: ["icon", "back-btn"]
  }, [_vm._v("")])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "combination-box": {
    "flexDirection": "row",
    "height": "200"
  },
  "book-wrap": {
    "width": "206"
  },
  "category-slide": {
    "alignItems": "center"
  },
  "book-cover": {
    "width": "135",
    "height": "190"
  },
  "img-desc": {
    "width": "180",
    "lineHeight": "42",
    "paddingTop": "15",
    "fontSize": "26",
    "textOverflow": "ellipsis",
    "overflow": "hidden",
    "display": "-webkit-box",
    "WebkitBoxOrient": "vertical",
    "WebkitLineClamp": 2,
    "lines": 2
  },
  "price": {
    "fontSize": "28",
    "color": "#FF0000"
  },
  "combination-price": {
    "width": "206",
    "textAlign": "center",
    "height": "60",
    "lineHeight": "60"
  }
}

/***/ }),
/* 7 */
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
    props: ['bookGroup']
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroller', {
    staticClass: ["combination-box"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, _vm._l((_vm.bookGroup), function(book, index) {
    return _c('div', {
      key: index,
      staticClass: ["book-wrap"]
    }, [_c('a', {
      staticClass: ["category-slide"],
      attrs: {
        "href": book.imgLink
      }
    }, [_c('image', {
      staticClass: ["book-cover"],
      attrs: {
        "src": book.imgUrl,
        "size": "cover"
      }
    }), _c('text', {
      staticClass: ["img-desc"]
    }, [_vm._v(_vm._s(book.imgDesc))]), _c('text', {
      staticClass: ["price", "h3", "combination-price"]
    }, [_vm._v("¥ 25.00")])])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "image": {
    "width": "420",
    "height": "210"
  },
  "mark": {
    "position": "absolute",
    "width": "90",
    "height": "36",
    "backgroundColor": "#f2b53f",
    "top": "70",
    "left": "280",
    "borderRadius": "10"
  },
  "mark-text": {
    "color": "#ffffff",
    "fontSize": "24",
    "textAlign": "center",
    "lineHeight": "36"
  },
  "slider": {
    "width": "750",
    "height": "360"
  },
  "frame": {
    "width": "750",
    "height": "360",
    "backgroundColor": "#ffffff",
    "position": "relative",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "indicator": {
    "width": "750",
    "height": "40",
    "itemColor": "#FFFFFF",
    "itemSelectedColor": "#b4282d",
    "itemSize": "12",
    "position": "absolute",
    "bottom": "10",
    "right": "0"
  }
}

/***/ }),
/* 13 */
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

exports.default = {
	name: "banner",
	props: ['imageList', 'resize']
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "true",
      "interval": "5000",
      "infinite": "false"
    }
  }, [_vm._l((_vm.imageList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "src": item.src,
        "resize": _vm.resize
      }
    }), _vm._m(0, true)])
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["mark"]
  }, [_c('text', {
    staticClass: ["mark-text"]
  }, [_vm._v("纸质书")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
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
__vue_options__.__file = "/home/dell/DEV/developer/weex-vue/src/components/common/TopHeader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b0de7876"
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


/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(37)
)

/* script */
__vue_exports__ = __webpack_require__(38)

/* template */
var __vue_template__ = __webpack_require__(41)
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
__vue_options__.__file = "/home/dell/DEV/developer/weex-vue/src/views/BookDetail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-45612ffd"
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
/* 37 */
/***/ (function(module, exports) {

module.exports = {
  "combination-box": {
    "flexDirection": "row"
  },
  "foot-zx-btn": {
    "width": "140",
    "height": "100",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "foot-car-btn": {
    "height": "100",
    "width": "140",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "text-center": {
    "textAlign": "center"
  },
  "buy-product": {
    "flex": 1,
    "height": "100",
    "backgroundColor": "#57cb64"
  },
  "buy-product-btn": {
    "color": "#ffffff",
    "lineHeight": "100"
  },
  "detail-footer": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "height": "100",
    "alignItems": "center"
  },
  "introduce": {
    "borderTopWidth": "8",
    "borderTopColor": "#f0f0f0",
    "borderTopStyle": "solid",
    "marginTop": "20"
  },
  "intro-tit": {
    "width": "160",
    "height": "60",
    "lineHeight": "60",
    "textAlign": "center",
    "marginRight": "20",
    "marginLeft": "20"
  },
  "intro-title": {
    "height": "80",
    "borderBottomWidth": "4",
    "borderBottomColor": "#e7e7e7",
    "borderBottomStyle": "solid",
    "justifyContent": "center"
  },
  "intro-content": {
    "lineHeight": "44",
    "textIndent": "48",
    "paddingTop": "20"
  },
  "ui-icon": {
    "fontFamily": "hflyicon",
    "fontSize": "28"
  },
  "color1": {
    "color": "#333333"
  },
  "color2": {
    "color": "#666666"
  },
  "row": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "count-com": {
    "height": "90",
    "justifyContent": "space-between",
    "marginTop": "30"
  },
  "count-price": {
    "flexGrow": 1,
    "height": "90",
    "alignItems": "center"
  },
  "combination": {
    "borderTopColor": "#f0f0f0",
    "borderTopStyle": "solid",
    "borderTopWidth": "18"
  },
  "combination-title": {
    "textAlign": "center",
    "height": "120",
    "lineHeight": "120"
  },
  "intro-active": {
    "color": "#0088fb",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#0088fb",
    "borderBottomWidth": "2"
  },
  "combination-price": {
    "width": "206",
    "textAlign": "center",
    "height": "60",
    "lineHeight": "60"
  },
  "add-car-btn": {
    "color": "#ffffff",
    "backgroundColor": "#0088fb",
    "height": "64",
    "textAlign": "center",
    "lineHeight": "64",
    "borderRadius": "12",
    "width": "210",
    "fontSize": "28"
  },
  "com-mod": {
    "paddingTop": "10",
    "paddingBottom": "10"
  },
  "auto-width": {
    "flexGrow": 1,
    "flexShrink": 1
  },
  "cell-con": {
    "flexDirection": "row",
    "alignItems": "center",
    "height": "68",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#f0f0f0",
    "borderBottomWidth": "2"
  },
  "cell-text-icon": {
    "width": "90",
    "height": "36",
    "backgroundColor": "#f2b53f",
    "borderRadius": "8"
  },
  "active-con": {
    "paddingLeft": "20",
    "flex": 1,
    "flexDirection": "row"
  },
  "active-text": {
    "flex": 1,
    "fontSize": "26",
    "color": "#777777",
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis",
    "overflow": "hidden"
  },
  "arrow-icon": {
    "width": "60",
    "textAlign": "center",
    "fontSize": "26",
    "color": "#0e9cfa"
  },
  "cell-title": {
    "textAlign": "center",
    "lineHeight": "36",
    "color": "#ffffff",
    "fontSize": "26"
  },
  "main": {
    "position": "fixed",
    "top": "100",
    "left": "0",
    "right": "0",
    "bottom": "100",
    "backgroundColor": "#ffffff"
  },
  "content": {
    "marginTop": "10",
    "paddingTop": "5",
    "paddingBottom": "5",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "product-name": {
    "fontSize": "30",
    "fontWeight": "normal",
    "color": "#333333",
    "paddingTop": "10",
    "paddingBottom": "10"
  },
  "price-con": {
    "paddingTop": "10",
    "paddingBottom": "10",
    "flexDirection": "row"
  },
  "price": {
    "fontSize": "40",
    "color": "#FF0000"
  },
  "old-con": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "flexShrink": 1,
    "flexGrow": 1
  },
  "old-price": {
    "fontSize": "26",
    "textDecoration": "line-through",
    "alignContent": "center",
    "paddingLeft": "20",
    "color": "#cccccc"
  },
  "price-tip": {
    "fontSize": "26",
    "color": "#f2b53f"
  },
  "category-slide": {
    "alignItems": "center"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "h1": {
    "fontSize": "36"
  },
  "h2": {
    "fontSize": "32"
  },
  "h3": {
    "fontSize": "28"
  },
  "h4": {
    "fontSize": "26"
  }
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TopHeader = __webpack_require__(21);

var _TopHeader2 = _interopRequireDefault(_TopHeader);

var _BookSlide = __webpack_require__(39);

var _BookSlide2 = _interopRequireDefault(_BookSlide);

var _BookGroup = __webpack_require__(40);

var _BookGroup2 = _interopRequireDefault(_BookGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigator = weex.requireModule('navigator'); //
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
//
//
//
//
//
//
//

var ev = weex.requireModule('navevent');
exports.default = {
  name: "BookDetail",
  components: {
    'top-header': _TopHeader2.default,
    'book-slide': _BookSlide2.default,
    'book-group': _BookGroup2.default
  },
  created: function created() {
    console.log(weex.supports('@component/top-header'), weex.isRegisteredComponent('top-header'));
  },
  data: function data() {
    return {
      bookName: '2019年初级会计职称两科“梦想成真”系列丛书应试指南（预订）',
      slideList: [{ link: '/detail/goods/1', src: 'http://www.chinaacc.com/upload/html/2018/05/11/fec5b5f41c8ca146e0903509ee63e652ae.jpg' }, { link: '/detail/goods/1', src: 'http://www.chinaacc.com/upload/html/2018/05/11/fec5b5f41c8ca146e0903509ee63e652ae.jpg' }],
      activeList: [{
        activeName: '优惠',
        activeDesc: '加10元换购2019年同科目应试指南电子书'
      }, {
        activeName: '赠品',
        activeDesc: '购买即免费赠送图书，赠完为止'
      }, {
        activeName: '礼包',
        activeDesc: '购注会辅导书赠千元大礼包'
      }],
      bookList: [{ imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }]
    };
  },

  methods: {
    ShoppingCart: function ShoppingCart() {
      ev.ShoppingCart(function (event) {
        //callback 传值
        modal.toast({ message: 'asd' + event.appVersion, duration: 1 });
      });
    }
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(14)
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
__vue_options__.__file = "/home/dell/DEV/developer/weex-vue/src/components/common/BookSlide.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-791f5e6a"
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


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
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
__vue_options__.__file = "/home/dell/DEV/developer/weex-vue/src/components/common/BookGroup.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-caf61ace"
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


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('top-header', {
    attrs: {
      "title": "书籍详情",
      "logoShow": false,
      "alignTitle": "center",
      "back": true
    }
  }), _c('scroller', {
    staticClass: ["main"],
    attrs: {
      "scrollDirection": "vertical"
    }
  }, [_c('book-slide', {
    attrs: {
      "imageList": _vm.slideList,
      "resize": "contain"
    }
  }), _c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["product-name"]
  }, [_vm._v(_vm._s(_vm.bookName))]), _vm._m(0), _c('div', {
    staticClass: ["list-group"]
  }, _vm._l((_vm.activeList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["cell-con"]
    }, [_c('div', {
      staticClass: ["cell-text-icon"]
    }, [_c('text', {
      staticClass: ["cell-title"]
    }, [_vm._v(_vm._s(item.activeName))])]), _c('a', {
      staticClass: ["active-con"],
      attrs: {
        "href": ""
      }
    }, [_c('text', {
      staticClass: ["active-text"]
    }, [_vm._v(_vm._s(item.activeDesc))]), _c('text', {
      staticClass: ["ui-icon", "arrow-icon"]
    }, [_vm._v("")])])])
  })), _vm._m(1), _vm._m(2), _c('div', {
    staticClass: ["combination"]
  }, [_c('text', {
    staticClass: ["combination-title", "color1"]
  }, [_vm._v("推荐组合")]), _c('book-group', {
    attrs: {
      "bookGroup": _vm.bookList
    }
  })], 1), _vm._m(3), _vm._m(4)])], 1), _c('div', {
    staticClass: ["detail-footer", "row"]
  }, [_vm._m(5), _c('div', {
    staticClass: ["foot-car-btn"]
  }, [_c('text', {
    staticClass: ["ui-icon", "h1", "color2"]
  }, [_vm._v("")]), _c('text', {
    on: {
      "click": _vm.ShoppingCart
    }
  }, [_vm._v("购物车")])]), _vm._m(6)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["price-con"]
  }, [_c('text', {
    staticClass: ["price"]
  }, [_vm._v("¥61.80")]), _c('div', {
    staticClass: ["old-con"]
  }, [_c('text', {
    staticClass: ["old-price"]
  }, [_vm._v("¥103.00")]), _c('text', {
    staticClass: ["price-tip"]
  }, [_vm._v("(不支持学习卡支付)")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["row", "com-mod"]
  }, [_c('text', {
    staticClass: ["h4", "color2"]
  }, [_vm._v("商品状态:")]), _c('text', {
    staticClass: ["h4", "italic", "color2", "auto-width"]
  }, [_vm._v("(新教材公布后发行，到货后按购买先后顺序发货！)")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["row", "com-mod"]
  }, [_c('text', {
    staticClass: ["h4", "color2"]
  }, [_vm._v("作者:")]), _c('text', {
    staticClass: ["h4", "color1"]
  }, [_vm._v("中华会计网校")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["count-com", "row"]
  }, [_c('div', {
    staticClass: ["count-price", "row"]
  }, [_c('text', {
    staticClass: ["h2"]
  }, [_vm._v("总价：")]), _c('text', {
    staticClass: ["price", "h2"]
  }, [_vm._v("¥0.00")])]), _c('text', {
    staticClass: ["add-car-btn"]
  }, [_vm._v("加入购物车")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["introduce"]
  }, [_c('div', {
    staticClass: ["intro-title", "row"]
  }, [_c('text', {
    staticClass: ["intro-active", "intro-tit"]
  }, [_vm._v("简介")]), _c('text', {
    staticClass: ["intro-tit"]
  }, [_vm._v("推荐")])]), _c('div', [_c('text', {
    staticClass: ["intro-content", "h4", "color1"]
  }, [_vm._v("中华会计网校（www.chinaacc.com）是专业的大型会计远程教育基地，凭借雄厚的师资力量、专业的交互式学习课件、先进的人工智能技术、灵活多样的学习方式，每年为我国财政系统培养数百万名专业人才。网校经过十数年的研究与发展，为2000万会计从业人员与每年500余万财经类专业大学生，提供考试培训、继续教育、实务操作与就业服务，为全国8000余万户各类企业，提供代理记账服务与财税咨询服务，已形成“考试培训、继续教育、实务操作、财税咨询、就业服务”五位一体完善的终身教育体系，受到学员的认可，被广大会计人员亲切地誉为“会计人的网上家园”！")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["foot-zx-btn"]
  }, [_c('text', {
    staticClass: ["ui-icon", "h1", "color2"]
  }, [_vm._v("")]), _c('text', [_vm._v("咨询")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["buy-product"]
  }, [_c('text', {
    staticClass: ["text-center", "h1", "buy-product-btn"]
  }, [_vm._v("预定该商品")])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);