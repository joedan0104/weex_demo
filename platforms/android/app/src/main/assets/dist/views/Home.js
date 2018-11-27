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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
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
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "image": {
    "width": "750",
    "height": "360"
  },
  "slider": {
    "width": "750",
    "height": "360"
  },
  "frame": {
    "width": "750",
    "height": "360",
    "position": "relative"
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
/* 4 */
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

exports.default = {
	name: "banner",
	props: ['imageList', 'resize']
};

/***/ }),
/* 5 */
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
    })])
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
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

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = {
  "home-extension": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "borderTopWidth": "20",
    "borderTopStyle": "solid",
    "borderTopColor": "#f0f0f0",
    "paddingTop": "50",
    "paddingBottom": "20"
  },
  "extension-content": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "image": {
    "width": "72",
    "height": "72"
  },
  "ext-text": {
    "fontSize": "30",
    "color": "#777777",
    "paddingTop": "20",
    "paddingLeft": "15",
    "paddingRight": "15"
  }
}

/***/ }),
/* 16 */
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

exports.default = {
	name: 'HomeExtension',
	props: ['extensionList']
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["home-extension"]
  }, _vm._l((_vm.extensionList), function(item, index) {
    return _c('a', {
      key: index,
      staticClass: ["extension-content"],
      attrs: {
        "href": item.link
      }
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "src": item.imgUrl
      }
    }), _c('text', {
      staticClass: ["ext-text"]
    }, [_vm._v(_vm._s(item.imgTitle))])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "hflyicon"
  },
  "hot-icon": {
    "color": "#FF0000",
    "fontSize": "40",
    "width": "60",
    "height": "60",
    "textAlign": "center",
    "lineHeight": "60",
    "position": "absolute"
  },
  "marquee": {
    "flexDirection": "row",
    "height": "60",
    "marginTop": "10",
    "marginBottom": "10",
    "backgroundColor": "#f9f9f9",
    "overflow": "hidden"
  },
  "marquee-content": {
    "paddingLeft": "60",
    "height": "60"
  },
  "link-con": {
    "flexDirection": "row",
    "height": "60",
    "alignItems": "center",
    "transitionProperty": "transform",
    "transitionDuration": 500,
    "transitionTimingFunction": "ease-out"
  },
  "@TRANSITION": {
    "link-con": {
      "property": "transform",
      "duration": 500,
      "timingFunction": "ease-out"
    }
  },
  "type": {
    "fontStyle": "italic",
    "color": "#FF0000",
    "fontWeight": "bold",
    "paddingRight": "20",
    "fontSize": "30"
  },
  "text": {
    "fontSize": "30",
    "whiteSpace": "nowrap"
  },
  "anim": {
    "transform": "translateY(-60px)"
  }
}

/***/ }),
/* 19 */
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
	name: "Marquee",
	props: ['marqueeList', 'delayTime', 'marqueeList'],
	data: function data() {
		return {
			Character: {
				Hot: '热门',
				Recommend: '推荐',
				Newest: '最新'
			},
			animated: false
		};
	},
	created: function created() {
		setInterval(this.scroll, this.delayTime * 1000);
	},

	methods: {
		scroll: function scroll() {
			var _this = this;

			this.animated = true;
			setTimeout(function () {
				_this.marqueeList.push(_this.marqueeList[0]);
				_this.marqueeList.shift();
				_this.animated = false;
			}, 500);
		}
	}
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["marquee"]
  }, [_c('text', {
    staticClass: ["hot-icon", "iconfont"]
  }, [_vm._v("")]), _c('div', {
    staticClass: ["marquee-content"],
    class: {
      'anim': _vm.animated
    }
  }, _vm._l((_vm.marqueeList), function(item, index) {
    return _c('a', {
      key: index,
      staticClass: ["link-con"],
      attrs: {
        "href": ""
      }
    }, [_c('text', {
      staticClass: ["type"]
    }, [_vm._v(_vm._s(_vm.Character[item.type]))]), _c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(item.title))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
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
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(43)
)

/* script */
__vue_exports__ = __webpack_require__(44)

/* template */
var __vue_template__ = __webpack_require__(49)
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
__vue_options__.__file = "/home/dell/DEV/developer/weex-vue/src/views/Home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-eb3c7bfc"
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
/* 43 */
/***/ (function(module, exports) {

module.exports = {
  "main": {
    "position": "fixed",
    "top": "100",
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "navList-group": {
    "flexWrap": "wrap",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "marginTop": "16",
    "borderBottomWidth": "4",
    "borderBottomColor": "#eeeeee",
    "borderBottomStyle": "solid"
  },
  "navList-item": {
    "flexGrow": 1,
    "flexShrink": 1,
    "width": "150",
    "height": "150",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "icon-class": {
    "width": "80",
    "height": "80",
    "borderRadius": "50",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "navList-text": {
    "fontSize": "24",
    "marginTop": "8"
  },
  "icon-text": {
    "color": "#ffffff",
    "fontSize": "24"
  },
  "iconfont": {
    "fontFamily": "'hfly-iconfont'"
  },
  "color1": {
    "backgroundImage": "linear-gradient(to bottom,#3c9cf2,#4ebaf5)"
  },
  "color2": {
    "backgroundImage": "linear-gradient(to bottom,#fb4d35,#fd6943)"
  },
  "color3": {
    "backgroundImage": "linear-gradient(to bottom,#fb9a2d,#fdbc43)"
  },
  "color4": {
    "backgroundImage": "linear-gradient(to bottom,#31bccf,#49d2df)"
  },
  "color5": {
    "backgroundImage": "linear-gradient(to bottom,#27b859,#3bd085)"
  },
  "color6": {
    "backgroundImage": "linear-gradient(to bottom,#3ab2e1,#56cceb)",
    "fontSize": "24"
  },
  "color7": {
    "backgroundImage": "linear-gradient(to bottom,#fb6238,#fd8643)",
    "fontSize": "24"
  },
  "color8": {
    "backgroundImage": "linear-gradient(to bottom,#4476e8,#65a3f0)",
    "fontSize": "27"
  },
  "color9": {
    "backgroundImage": "linear-gradient(to bottom,#40afeb,#60c9f1)"
  },
  "color10": {
    "backgroundImage": "linear-gradient(to bottom,#858585,#adadad)",
    "fontSize": "30",
    "fontWeight": "bold"
  },
  "show-book": {
    "borderTopWidth": "20",
    "borderTopColor": "#f0f0f0",
    "borderTopStyle": "solid",
    "paddingLeft": "20",
    "paddingRight": "20"
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _TopHeader = __webpack_require__(21);

var _TopHeader2 = _interopRequireDefault(_TopHeader);

var _BookBanner = __webpack_require__(45);

var _BookBanner2 = _interopRequireDefault(_BookBanner);

var _Marquee = __webpack_require__(46);

var _Marquee2 = _interopRequireDefault(_Marquee);

var _BookList = __webpack_require__(47);

var _BookList2 = _interopRequireDefault(_BookList);

var _HomeExtension = __webpack_require__(48);

var _HomeExtension2 = _interopRequireDefault(_HomeExtension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	name: "home",
	components: {
		HomeHeader: _TopHeader2.default,
		BookBanner: _BookBanner2.default,
		'marquee-com': _Marquee2.default,
		BookList: _BookList2.default,
		HomeExtension: _HomeExtension2.default
	},
	data: function data() {
		return {
			imageList: [{ link: '/list1', src: 'http://www.chinaacc.com/upload/html/2018/06/07/sh8f5455809f0c401f9fe63413d8322e91.jpg' }, { link: '/list2', src: 'http://www.chinaacc.com/upload/html/2018/05/31/shfc4985de497d4764a9540dc93c83335c.jpg' }, { link: '/list3', src: 'http://www.chinaacc.com/upload/html/2018/06/09/fe4ddc03d2483e42b8a5b394eb70b592a7.jpg' }, { link: '/list4', src: 'http://www.chinaacc.com/upload/html/2018/06/11/fe0017893d0a3d40afb8c273b1ff55cbaa.jpg' }, { link: '/list5', src: 'http://www.chinaacc.com/upload/html/2018/06/12/fe5b8663e964d64e22820d0a5f39b65dc0.jpg' }],
			navList: [{ href: '/bookList', title: '初级职称', dot: '初', more: false }, { href: '/bookList', title: '中级职称', dot: '中', more: false }, { href: '/bookList', title: '高级职称', dot: '高', more: false }, { href: '/bookList', title: '注会', dot: 'CPA', more: false }, { href: '/bookList', title: '税务师', dot: '税', more: false }, { href: '/bookList', title: 'ACCA', dot: 'ACCA', more: false }, { href: '/bookList', title: 'CMA', dot: 'CMA', more: false }, { href: '/bookList', title: '初级经济师', dot: '经', more: false }, { href: '/bookList', title: '中级经济师', dot: '经', more: false }, { href: '/bookList', title: '更多', dot: '···', more: true }],
			marqueeList: [{ title: '2018年中级会计职称《财务管理》1', type: 'Hot', url: '/detail/23931' }, { title: '2018年中级会计职称《财务管理》2', type: 'Recommend', url: '/detail/23932' }, { title: '2018年中级会计职称《财务管理》3', type: 'Newest', url: '/detail/23933' }, { title: '2018年中级会计职称《财务管理》4', type: 'Hot', url: '/detail/23934' }, { title: '2018年中级会计职称《财务管理》5', type: 'Newest', url: '/detail/23935' }],
			showBook: [{
				header: { title: '初级会计职称', moreLink: '/list/1' },
				main: [{ imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }]
			}, {
				header: { title: '中级会计职称', moreLink: '/list/1' },
				main: [{ imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }]
			}, {
				header: { title: '中级会计职称', moreLink: '/list/1' },
				main: [{ imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }, { imgUrl: '//www.chinaacc.com/upload/html/2018/06/29/fedac01e5c7eea42ae8c91115b5b5cdab9.jpg', imgDesc: '2019年初级会计职称两科辅导教材（精要版）', imgLink: '/detail' }]
			}],
			extensionList: [{ imgUrl: '//sale.chinaacc.com/web/images/bookstore/ico06.png', imgTitle: '梦想成真', link: '/list/1' }, { imgUrl: '//sale.chinaacc.com/web/images/bookstore/ico07.png', imgTitle: '激活码', link: '/list/1' }, { imgUrl: '//sale.chinaacc.com/web/images/bookstore/ico08.png', imgTitle: '电子书', link: '/list/1' }, { imgUrl: '//sale.chinaacc.com/web/images/bookstore/ico09.png', imgTitle: 'APP', link: '/list/1' }]
		};
	},

	methods: {
		// 下拉刷新
		loadingDown: function loadingDown() {}
	}
}; //
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

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(5)
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
__vue_options__.__file = "/home/dell/DEV/developer/weex-vue/src/components/common/BookBanner.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2eca3b02"
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(18)
)

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(20)
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
__vue_options__.__file = "/home/dell/DEV/developer/weex-vue/src/components/plugins/Marquee.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e5cd76c8"
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
/* 47 */
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


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(17)
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
__vue_options__.__file = "/home/dell/DEV/developer/weex-vue/src/components/common/HomeExtension.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0b0d8d23"
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
/* 49 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('home-header', {
    attrs: {
      "title": "财会书店",
      "logoShow": "true",
      "alignTitle": "left"
    }
  }), _c('scroller', {
    staticClass: ["main"]
  }, [_c('refresh', {
    on: {
      "loadingDown": _vm.loadingDown
    }
  }), _c('book-banner', {
    attrs: {
      "imageList": _vm.imageList,
      "resize": "cover"
    }
  }), _c('div', {
    staticClass: ["navList-group"]
  }, _vm._l((_vm.navList), function(item, index) {
    return _c('a', {
      key: index,
      staticClass: ["navList-item"],
      attrs: {
        "href": ""
      }
    }, [_c('div', {
      class: ['icon-class', ("color" + (index+1))]
    }, [_c('text', {
      staticClass: ["icon-text"]
    }, [_vm._v(_vm._s(item.dot))])]), _c('text', {
      staticClass: ["navList-text"]
    }, [_vm._v(_vm._s(item.title))])])
  })), _c('marquee-com', {
    attrs: {
      "delayTime": 5,
      "marqueeList": _vm.marqueeList
    }
  }), _vm._l((_vm.showBook), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["show-book"]
    }, [_c('book-list', {
      attrs: {
        "isShowTitle": true,
        "header": item.header,
        "bookList": item.main
      }
    })], 1)
  }), _c('home-extension', {
    attrs: {
      "extensionList": _vm.extensionList
    }
  })], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);