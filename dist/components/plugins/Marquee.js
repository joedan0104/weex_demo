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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
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

/***/ 19:
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

/***/ 20:
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

/***/ 30:
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
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });