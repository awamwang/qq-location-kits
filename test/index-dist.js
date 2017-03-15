/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Kits"] = factory();
	else
		root["Kits"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(31)('wks')
  , uid        = __webpack_require__(34)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(12)
  , createDesc = __webpack_require__(30);
module.exports = __webpack_require__(6) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHttps = exports.jsonp = exports.exit = exports.warn = undefined;

var _promise = __webpack_require__(14);

var _promise2 = _interopRequireDefault(_promise);

var _jsonp = __webpack_require__(75);

var _jsonp2 = _interopRequireDefault(_jsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IS_HTTPS = window && window.location.href.indexOf('https') > -1;

var warn = exports.warn = function warn(msg, code) {
  console.log(new Error(msg));
};

var exit = exports.exit = function exit(code) {
  throw new Error('exit with code(' + code + ')');
};

var jsonp = exports.jsonp = function jsonp(url, opts) {
  return new _promise2.default(function (resolve, reject) {
    (0, _jsonp2.default)(url, opts, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

var isHttps = exports.isHttps = function isHttps(msg) {
  return IS_HTTPS;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdXRpbHMuanMiXSwibmFtZXMiOlsiSVNfSFRUUFMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJpbmRleE9mIiwid2FybiIsIm1zZyIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJleGl0IiwianNvbnAiLCJ1cmwiLCJvcHRzIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsImRhdGEiLCJpc0h0dHBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxVQUFXQSxPQUFPQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsT0FBckIsQ0FBNkIsT0FBN0IsSUFBd0MsQ0FBQyxDQUFyRTs7QUFLTyxJQUFJQyxzQkFBTyxTQUFQQSxJQUFPLENBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQjtBQUNyQ0MsVUFBUUMsR0FBUixDQUFZLElBQUlDLEtBQUosQ0FBVUosR0FBVixDQUFaO0FBQ0QsQ0FGTTs7QUFJQSxJQUFJSyxzQkFBTyxTQUFQQSxJQUFPLENBQVVKLElBQVYsRUFBZ0I7QUFDaEMsUUFBTSxJQUFJRyxLQUFKLENBQVUsb0JBQW9CSCxJQUFwQixHQUEyQixHQUFyQyxDQUFOO0FBQ0QsQ0FGTTs7QUFJQSxJQUFJSyx3QkFBUSxTQUFSQSxLQUFRLENBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQjtBQUN0QyxTQUFPLHNCQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Qyx5QkFBVUgsR0FBVixFQUFlQyxJQUFmLEVBQXFCLFVBQVVHLEdBQVYsRUFBZUMsSUFBZixFQUFxQjtBQUN4QyxVQUFJRCxHQUFKLEVBQVM7QUFDUEQsZUFBT0MsR0FBUDtBQUNELE9BRkQsTUFFTztBQUNMRixnQkFBUUcsSUFBUjtBQUNEO0FBQ0YsS0FORDtBQU9ELEdBUk0sQ0FBUDtBQVNELENBVk07O0FBWUEsSUFBSUMsNEJBQVUsU0FBVkEsT0FBVSxDQUFVYixHQUFWLEVBQWU7QUFDbEMsU0FBT04sUUFBUDtBQUNELENBRk0iLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiRTovMDJQcm9qZWN0L015R2l0SHViLzAwX21pbmUvcXEtbG9jYXRpb24ta2l0cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqc29ucEZ1bmMgZnJvbSAnanNvbnAnXG5cbmNvbnN0IElTX0hUVFBTID0gd2luZG93ICYmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdodHRwcycpID4gLTEpXG5cbi8vIOWkhOeQhui/lOWbnue7k+aenFxuXG4vLyBsb2fjgIF3YXJuXG5leHBvcnQgbGV0IHdhcm4gPSBmdW5jdGlvbiAobXNnLCBjb2RlKSB7XG4gIGNvbnNvbGUubG9nKG5ldyBFcnJvcihtc2cpKVxufVxuXG5leHBvcnQgbGV0IGV4aXQgPSBmdW5jdGlvbiAoY29kZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ2V4aXQgd2l0aCBjb2RlKCcgKyBjb2RlICsgJyknKVxufVxuXG5leHBvcnQgbGV0IGpzb25wID0gZnVuY3Rpb24gKHVybCwgb3B0cykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGpzb25wRnVuYyh1cmwsIG9wdHMsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHsgICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2VibW9kdWxlcy9qc29ucFxuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShkYXRhKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBsZXQgaXNIdHRwcyA9IGZ1bmN0aW9uIChtc2cpIHtcbiAgcmV0dXJuIElTX0hUVFBTXG59XG4iXX0=

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(26)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(15);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(2)
  , IE8_DOM_DEFINE = __webpack_require__(45)
  , toPrimitive    = __webpack_require__(66)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(4);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  need: {
    geolocation: false,
    geoTools: false,
    webservice: false,
    wxJssdk: false
  },
  webserviceApiRoot: utils.isHttps() ? 'https://apis.map.qq.com/ws' : 'http://apis.map.qq.com/ws',
  serviceKey: null,
  serviceReference: null,
  jsonpMethod: utils.jsonp
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcY29uZmlnLmpzIl0sIm5hbWVzIjpbInV0aWxzIiwibmVlZCIsImdlb2xvY2F0aW9uIiwiZ2VvVG9vbHMiLCJ3ZWJzZXJ2aWNlIiwid3hKc3NkayIsIndlYnNlcnZpY2VBcGlSb290IiwiaXNIdHRwcyIsInNlcnZpY2VLZXkiLCJzZXJ2aWNlUmVmZXJlbmNlIiwianNvbnBNZXRob2QiLCJqc29ucCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0lBQVlBLEs7Ozs7a0JBRUc7QUFDYkMsUUFBTTtBQUNKQyxpQkFBYSxLQURUO0FBRUpDLGNBQVUsS0FGTjtBQUdKQyxnQkFBWSxLQUhSO0FBSUpDLGFBQVM7QUFKTCxHQURPO0FBT2JDLHFCQUFtQk4sTUFBTU8sT0FBTixLQUFrQiw0QkFBbEIsR0FBaUQsMkJBUHZEO0FBUWJDLGNBQVksSUFSQztBQVNiQyxvQkFBa0IsSUFUTDtBQVViQyxlQUFhVixNQUFNVztBQVZOLEMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IkU6LzAyUHJvamVjdC9NeUdpdEh1Yi8wMF9taW5lL3FxLWxvY2F0aW9uLWtpdHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5lZWQ6IHtcbiAgICBnZW9sb2NhdGlvbjogZmFsc2UsXG4gICAgZ2VvVG9vbHM6IGZhbHNlLFxuICAgIHdlYnNlcnZpY2U6IGZhbHNlLFxuICAgIHd4SnNzZGs6IGZhbHNlXG4gIH0sXG4gIHdlYnNlcnZpY2VBcGlSb290OiB1dGlscy5pc0h0dHBzKCkgPyAnaHR0cHM6Ly9hcGlzLm1hcC5xcS5jb20vd3MnIDogJ2h0dHA6Ly9hcGlzLm1hcC5xcS5jb20vd3MnLFxuICBzZXJ2aWNlS2V5OiBudWxsLFxuICBzZXJ2aWNlUmVmZXJlbmNlOiBudWxsLFxuICBqc29ucE1ldGhvZDogdXRpbHMuanNvbnBcbn1cbiJdfQ==

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f
  , has = __webpack_require__(10)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(31)('keys')
  , uid    = __webpack_require__(34);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(47)
  , defined = __webpack_require__(16);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

window.qq=window.qq||{},qq.maps=qq.maps||{},window.soso||(window.soso=qq),soso.maps||(soso.maps=qq.maps),qq.maps.Geolocation=function(){"use strict";var t=null,e=null,o=null,n=null,l=null,i="_geoIframe_"+Math.ceil(1e7*Math.random()),a=document.createElement("iframe"),u=null,s=null,c=null,r=null,d=function(d,m){if(!d)return void alert("请输入key！");if(!m)return void alert("请输入referer！");var p=document.getElementById(i);if(!p){a.setAttribute("id",i);var g="https:";navigator.userAgent.match(/jdapp;iphone;/i)&&(g="http:"),a.setAttribute("src",g+"//apis.map.qq.com/tools/geolocation?key="+d+"&referer="+m),a.setAttribute("style","display: none; width: 100%; height: 30%"),document.body?document.body.appendChild(a):document.write(a.outerHTML),window.addEventListener("message",function(i){var a=i.data;if(a&&"geolocation"==a.module)clearTimeout(r),t&&t(a),t=null,e=null,o&&o(a),o=null,n=null,l&&l(a);else{s=(new Date).getTime();var d=s-u;d>=c&&(e&&e(),e=null,t=null,clearTimeout(r)),n&&n(),n=null,o=null}},!1)}};return d.prototype.getLocation=function(o,n,l){t=o,e=n,u=(new Date).getTime(),c=l&&l.timeout?+l.timeout:1e4,clearTimeout(r),r=setTimeout(function(){e&&e(),e=null},c),document.getElementById(i).contentWindow.postMessage("getLocation","*")},d.prototype.getIpLocation=function(t,e){o=t,n=e,document.getElementById(i).contentWindow.postMessage("getLocation.robust","*")},d.prototype.watchPosition=function(t){l=t,document.getElementById(i).contentWindow.postMessage("watchPosition","*")},d.prototype.clearWatch=function(){l=null,document.getElementById(i).contentWindow.postMessage("clearWatch","*")},d}();

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(8)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(5)
  , ctx       = __webpack_require__(9)
  , hide      = __webpack_require__(3)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(29)
  , $export        = __webpack_require__(25)
  , redefine       = __webpack_require__(60)
  , hide           = __webpack_require__(3)
  , has            = __webpack_require__(10)
  , Iterators      = __webpack_require__(7)
  , $iterCreate    = __webpack_require__(50)
  , setToStringTag = __webpack_require__(18)
  , getPrototypeOf = __webpack_require__(56)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(9)
  , invoke             = __webpack_require__(46)
  , html               = __webpack_require__(27)
  , cel                = __webpack_require__(17)
  , global             = __webpack_require__(1)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(8)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(20)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Kits) {
  Kits.prototype._init = function (options) {
    makeConfig(options);

    if (_config2.default.need.geolocation) {
      (0, _geolocation2.default)(Kits);
    }
    if (_config2.default.need.geoTools) {
      (0, _geoTools2.default)(Kits);
    }
    if (_config2.default.need.webservice) {
      (0, _webservice2.default)(Kits);
    }
    if (_config2.default.need.wxJssdk) {
      (0, _wxJssdk2.default)(Kits);
    }
  };
};

var _config = __webpack_require__(13);

var _config2 = _interopRequireDefault(_config);

var _geolocation = __webpack_require__(37);

var _geolocation2 = _interopRequireDefault(_geolocation);

var _geoTools = __webpack_require__(36);

var _geoTools2 = _interopRequireDefault(_geoTools);

var _webservice = __webpack_require__(38);

var _webservice2 = _interopRequireDefault(_webservice);

var _wxJssdk = __webpack_require__(39);

var _wxJssdk2 = _interopRequireDefault(_wxJssdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeConfig(options) {
  _config2.default.need = options.need || _config2.default.need;
  _config2.default.httpMethod = options.httpMethod || _config2.default.httpMethod;
  _config2.default.serviceKey = options.serviceKey || _config2.default.serviceKey;
  _config2.default.serviceReference = options.serviceReference || _config2.default.serviceReference;
  _config2.default.jsonpMethod = options.jsonpMethod || _config2.default.jsonpMethod;
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcaW5pdC5qcyJdLCJuYW1lcyI6WyJLaXRzIiwicHJvdG90eXBlIiwiX2luaXQiLCJvcHRpb25zIiwibWFrZUNvbmZpZyIsIm5lZWQiLCJnZW9sb2NhdGlvbiIsImdlb1Rvb2xzIiwid2Vic2VydmljZSIsInd4SnNzZGsiLCJodHRwTWV0aG9kIiwic2VydmljZUtleSIsInNlcnZpY2VSZWZlcmVuY2UiLCJqc29ucE1ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQWVlLFVBQVVBLElBQVYsRUFBZ0I7QUFDN0JBLE9BQUtDLFNBQUwsQ0FBZUMsS0FBZixHQUF1QixVQUFVQyxPQUFWLEVBQW1CO0FBQ3hDQyxlQUFXRCxPQUFYOztBQUVBLFFBQUksaUJBQU9FLElBQVAsQ0FBWUMsV0FBaEIsRUFBNkI7QUFDM0IsaUNBQVlOLElBQVo7QUFDRDtBQUNELFFBQUksaUJBQU9LLElBQVAsQ0FBWUUsUUFBaEIsRUFBMEI7QUFDeEIsOEJBQVNQLElBQVQ7QUFDRDtBQUNELFFBQUksaUJBQU9LLElBQVAsQ0FBWUcsVUFBaEIsRUFBNEI7QUFDMUIsZ0NBQVdSLElBQVg7QUFDRDtBQUNELFFBQUksaUJBQU9LLElBQVAsQ0FBWUksT0FBaEIsRUFBeUI7QUFDdkIsNkJBQVFULElBQVI7QUFDRDtBQUNGLEdBZkQ7QUFnQkQsQzs7QUFoQ0Q7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsU0FBU0ksVUFBVCxDQUFxQkQsT0FBckIsRUFBOEI7QUFDNUIsbUJBQU9FLElBQVAsR0FBY0YsUUFBUUUsSUFBUixJQUFnQixpQkFBT0EsSUFBckM7QUFDQSxtQkFBT0ssVUFBUCxHQUFvQlAsUUFBUU8sVUFBUixJQUFzQixpQkFBT0EsVUFBakQ7QUFDQSxtQkFBT0MsVUFBUCxHQUFvQlIsUUFBUVEsVUFBUixJQUFzQixpQkFBT0EsVUFBakQ7QUFDQSxtQkFBT0MsZ0JBQVAsR0FBMEJULFFBQVFTLGdCQUFSLElBQTRCLGlCQUFPQSxnQkFBN0Q7QUFDQSxtQkFBT0MsV0FBUCxHQUFxQlYsUUFBUVUsV0FBUixJQUF1QixpQkFBT0EsV0FBbkQ7QUFDRCIsImZpbGUiOiJpbml0LmpzIiwic291cmNlUm9vdCI6IkU6LzAyUHJvamVjdC9NeUdpdEh1Yi8wMF9taW5lL3FxLWxvY2F0aW9uLWtpdHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xuXG5pbXBvcnQgZ2VvbG9jYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL2dlb2xvY2F0aW9uJ1xuaW1wb3J0IGdlb1Rvb2xzIGZyb20gJy4vY29tcG9uZW50cy9nZW8tdG9vbHMnXG5pbXBvcnQgd2Vic2VydmljZSBmcm9tICcuL2NvbXBvbmVudHMvd2Vic2VydmljZSdcbmltcG9ydCB3eEpzc2RrIGZyb20gJy4vY29tcG9uZW50cy93eC1qc3NkaydcblxuZnVuY3Rpb24gbWFrZUNvbmZpZyAob3B0aW9ucykge1xuICBjb25maWcubmVlZCA9IG9wdGlvbnMubmVlZCB8fCBjb25maWcubmVlZFxuICBjb25maWcuaHR0cE1ldGhvZCA9IG9wdGlvbnMuaHR0cE1ldGhvZCB8fCBjb25maWcuaHR0cE1ldGhvZFxuICBjb25maWcuc2VydmljZUtleSA9IG9wdGlvbnMuc2VydmljZUtleSB8fCBjb25maWcuc2VydmljZUtleVxuICBjb25maWcuc2VydmljZVJlZmVyZW5jZSA9IG9wdGlvbnMuc2VydmljZVJlZmVyZW5jZSB8fCBjb25maWcuc2VydmljZVJlZmVyZW5jZVxuICBjb25maWcuanNvbnBNZXRob2QgPSBvcHRpb25zLmpzb25wTWV0aG9kIHx8IGNvbmZpZy5qc29ucE1ldGhvZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoS2l0cykge1xuICBLaXRzLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgbWFrZUNvbmZpZyhvcHRpb25zKVxuXG4gICAgaWYgKGNvbmZpZy5uZWVkLmdlb2xvY2F0aW9uKSB7XG4gICAgICBnZW9sb2NhdGlvbihLaXRzKVxuICAgIH1cbiAgICBpZiAoY29uZmlnLm5lZWQuZ2VvVG9vbHMpIHtcbiAgICAgIGdlb1Rvb2xzKEtpdHMpXG4gICAgfVxuICAgIGlmIChjb25maWcubmVlZC53ZWJzZXJ2aWNlKSB7XG4gICAgICB3ZWJzZXJ2aWNlKEtpdHMpXG4gICAgfVxuICAgIGlmIChjb25maWcubmVlZC53eEpzc2RrKSB7XG4gICAgICB3eEpzc2RrKEtpdHMpXG4gICAgfVxuICB9XG59XG4iXX0=

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

__webpack_require__(22);

var _config = __webpack_require__(13);

var _config2 = _interopRequireDefault(_config);

var _utils = __webpack_require__(4);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(key, referrer) {
  if (!key || !key.length || !referrer || !referrer.length) {
    utils.warn('缺少开发秘钥信息，申请地址 http://lbs.qq.com/mykey.html');
    utils.exit(1);
  }
  if (typeof qq === 'undefined') {
    utils.warn('可能由于执行环境问题，geolocation中qq变量未能全局注册');
    utils.exit(1);
  }
}

function install(Kits) {
  init(_config2.default.serviceKey, _config2.default.serviceReference);
  Kits.prototype.tools = {};

  Kits.prototype.tools.computeDistanceBetween = function (from, to) {
    var a = new qq.maps.LatLng(from.lat, from.lng);
    var b = new qq.maps.LatLng(to.lat, to.lng);
    return qq.maps.geometry.spherical.computeDistanceBetween(a, b);
  };
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcY29tcG9uZW50c1xcZ2VvLXRvb2xzLmpzIl0sIm5hbWVzIjpbImluc3RhbGwiLCJ1dGlscyIsImluaXQiLCJrZXkiLCJyZWZlcnJlciIsImxlbmd0aCIsIndhcm4iLCJleGl0IiwicXEiLCJLaXRzIiwic2VydmljZUtleSIsInNlcnZpY2VSZWZlcmVuY2UiLCJwcm90b3R5cGUiLCJ0b29scyIsImNvbXB1dGVEaXN0YW5jZUJldHdlZW4iLCJmcm9tIiwidG8iLCJhIiwibWFwcyIsIkxhdExuZyIsImxhdCIsImxuZyIsImIiLCJnZW9tZXRyeSIsInNwaGVyaWNhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBZXdCQSxPOztBQWZ4Qjs7QUFDQTs7OztBQUNBOztJQUFZQyxLOzs7Ozs7QUFFWixTQUFTQyxJQUFULENBQWVDLEdBQWYsRUFBb0JDLFFBQXBCLEVBQThCO0FBQzVCLE1BQUksQ0FBQ0QsR0FBRCxJQUFRLENBQUNBLElBQUlFLE1BQWIsSUFBdUIsQ0FBQ0QsUUFBeEIsSUFBb0MsQ0FBQ0EsU0FBU0MsTUFBbEQsRUFBMEQ7QUFDeERKLFVBQU1LLElBQU4sQ0FBVyw0Q0FBWDtBQUNBTCxVQUFNTSxJQUFOLENBQVcsQ0FBWDtBQUNEO0FBQ0QsTUFBSSxPQUFPQyxFQUFQLEtBQWMsV0FBbEIsRUFBK0I7QUFDN0JQLFVBQU1LLElBQU4sQ0FBVyxtQ0FBWDtBQUNBTCxVQUFNTSxJQUFOLENBQVcsQ0FBWDtBQUNEO0FBQ0Y7O0FBRWMsU0FBU1AsT0FBVCxDQUFrQlMsSUFBbEIsRUFBd0I7QUFDckNQLE9BQUssaUJBQU9RLFVBQVosRUFBd0IsaUJBQU9DLGdCQUEvQjtBQUNBRixPQUFLRyxTQUFMLENBQWVDLEtBQWYsR0FBdUIsRUFBdkI7O0FBR0FKLE9BQUtHLFNBQUwsQ0FBZUMsS0FBZixDQUFxQkMsc0JBQXJCLEdBQThDLFVBQUNDLElBQUQsRUFBT0MsRUFBUCxFQUFjO0FBQzFELFFBQUlDLElBQUksSUFBSVQsR0FBR1UsSUFBSCxDQUFRQyxNQUFaLENBQW1CSixLQUFLSyxHQUF4QixFQUE2QkwsS0FBS00sR0FBbEMsQ0FBUjtBQUNBLFFBQUlDLElBQUksSUFBSWQsR0FBR1UsSUFBSCxDQUFRQyxNQUFaLENBQW1CSCxHQUFHSSxHQUF0QixFQUEyQkosR0FBR0ssR0FBOUIsQ0FBUjtBQUNBLFdBQU9iLEdBQUdVLElBQUgsQ0FBUUssUUFBUixDQUFpQkMsU0FBakIsQ0FBMkJWLHNCQUEzQixDQUFrREcsQ0FBbEQsRUFBcURLLENBQXJELENBQVA7QUFDRCxHQUpEO0FBS0QiLCJmaWxlIjoiZ2VvLXRvb2xzLmpzIiwic291cmNlUm9vdCI6IkU6LzAyUHJvamVjdC9NeUdpdEh1Yi8wMF9taW5lL3FxLWxvY2F0aW9uLWtpdHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2xpYnMvZ2VvbG9jYXRpb24ubWluJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscydcblxuZnVuY3Rpb24gaW5pdCAoa2V5LCByZWZlcnJlcikge1xuICBpZiAoIWtleSB8fCAha2V5Lmxlbmd0aCB8fCAhcmVmZXJyZXIgfHwgIXJlZmVycmVyLmxlbmd0aCkge1xuICAgIHV0aWxzLndhcm4oJ+e8uuWwkeW8gOWPkeenmOmSpeS/oeaBr++8jOeUs+ivt+WcsOWdgCBodHRwOi8vbGJzLnFxLmNvbS9teWtleS5odG1sJylcbiAgICB1dGlscy5leGl0KDEpXG4gIH1cbiAgaWYgKHR5cGVvZiBxcSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB1dGlscy53YXJuKCflj6/og73nlLHkuo7miafooYznjq/looPpl67popjvvIxnZW9sb2NhdGlvbuS4rXFx5Y+Y6YeP5pyq6IO95YWo5bGA5rOo5YaMJylcbiAgICB1dGlscy5leGl0KDEpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5zdGFsbCAoS2l0cykge1xuICBpbml0KGNvbmZpZy5zZXJ2aWNlS2V5LCBjb25maWcuc2VydmljZVJlZmVyZW5jZSlcbiAgS2l0cy5wcm90b3R5cGUudG9vbHMgPSB7fVxuXG4gIC8vIOebtOe6v+i3neemu+iuoeeul1xuICBLaXRzLnByb3RvdHlwZS50b29scy5jb21wdXRlRGlzdGFuY2VCZXR3ZWVuID0gKGZyb20sIHRvKSA9PiB7XG4gICAgbGV0IGEgPSBuZXcgcXEubWFwcy5MYXRMbmcoZnJvbS5sYXQsIGZyb20ubG5nKVxuICAgIGxldCBiID0gbmV3IHFxLm1hcHMuTGF0TG5nKHRvLmxhdCwgdG8ubG5nKVxuICAgIHJldHVybiBxcS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlRGlzdGFuY2VCZXR3ZWVuKGEsIGIpXG4gIH1cbn1cbiJdfQ==

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(14);

var _promise2 = _interopRequireDefault(_promise);

exports.default = install;

__webpack_require__(22);

var _config = __webpack_require__(13);

var _config2 = _interopRequireDefault(_config);

var _utils = __webpack_require__(4);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var geolocation = null;

function init(key, referrer) {
  if (!key || !key.length || !referrer || !referrer.length) {
    utils.warn('缺少开发秘钥信息，申请地址 http://lbs.qq.com/mykey.html');
    utils.exit(1);
  }

  if (typeof qq === 'undefined') {
    utils.warn('可能由于执行环境问题，geolocation中qq变量未能全局注册');
    utils.exit(1);
  }

  if (!geolocation) {
    try {
      geolocation = new qq.maps.Geolocation(key, referrer);
    } catch (e) {
      utils.warn('创建定位Geolocation实例出错');
      utils.exit(1);
    }
  }
}

function install(Kits) {
  init(_config2.default.serviceKey, _config2.default.serviceReference);

  Kits.prototype.getLocation = function (cb, errorCb, options) {
    geolocation.getLocation(function (location) {
      if (location.adcode && location.city && location.lat && location.lng) {
        cb(location);
      } else {
        errorCb('fail-invalid_position');
      }
    }, function () {
      errorCb('fail-error');
    }, options);
  };
  Kits.prototype.getLocationP = function (options) {
    return new _promise2.default(function (resolve, reject) {
      Kits.prototype.getLocation(resolve, reject, options);
    });
  };

  Kits.prototype.getIpLocation = function (cb, errorCb, options) {
    geolocation.getIpLocation(function (location) {
      if (location.adcode && location.city && location.lat && location.lng) {
        cb(location);
      } else {
        errorCb('fail: invalid_position');
      }
    }, function () {
      errorCb('fail: error');
    });
  };
  Kits.prototype.getIpLocationP = function (options) {
    return new _promise2.default(function (resolve, reject) {
      Kits.prototype.getIpLocation(resolve, reject, options);
    });
  };

  Kits.prototype.location = function (cb, errorCb) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    Kits.prototype.getLocation(cb, function () {
      if (options.canIp) {
        Kits.prototype.getIpLocation(cb, errorCb, options.ipLocationOptions);
      } else {
        errorCb('fail: error');
      }
    }, options.normalLocationOptions);
  };
  Kits.prototype.locationP = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return new _promise2.default(function (resolve, reject) {
      Kits.prototype.location(resolve, reject, options);
    });
  };

  Kits.prototype.watchPositionOrigin = function (cb, errorCb) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    geolocation.watchPosition(cb);
  };
  Kits.prototype.clearWatchOrigin = function () {
    geolocation.clearWatch();
  };

  var watcher = void 0;

  Kits.prototype.watchPosition = function () {
    var interTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var cb = arguments[1];
    var errorCb = arguments[2];
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    getLocation(true);

    function startWatcher() {
      watcher = window.setInterval(function () {
        getLocation();
      }, interTime * 1000);
    }

    function getLocation(isFirst) {
      Kits.prototype.locationP(options.locationOptions).then(function (location) {
        if (isFirst && options.firstCb) {
          options.firstCb(location);
        } else {
          cb(location);
        }
        isFirst && startWatcher();
      }).catch(function (err) {
        errorCb(err);
      });
    }
  };

  Kits.prototype.clearWatch = function () {
    if (watcher) {
      window.clearInterval(watcher);
      watcher = null;
    }
  };
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcY29tcG9uZW50c1xcZ2VvbG9jYXRpb24uanMiXSwibmFtZXMiOlsiaW5zdGFsbCIsInV0aWxzIiwiZ2VvbG9jYXRpb24iLCJpbml0Iiwia2V5IiwicmVmZXJyZXIiLCJsZW5ndGgiLCJ3YXJuIiwiZXhpdCIsInFxIiwibWFwcyIsIkdlb2xvY2F0aW9uIiwiZSIsIktpdHMiLCJzZXJ2aWNlS2V5Iiwic2VydmljZVJlZmVyZW5jZSIsInByb3RvdHlwZSIsImdldExvY2F0aW9uIiwiY2IiLCJlcnJvckNiIiwib3B0aW9ucyIsImxvY2F0aW9uIiwiYWRjb2RlIiwiY2l0eSIsImxhdCIsImxuZyIsImdldExvY2F0aW9uUCIsInJlc29sdmUiLCJyZWplY3QiLCJnZXRJcExvY2F0aW9uIiwiZ2V0SXBMb2NhdGlvblAiLCJjYW5JcCIsImlwTG9jYXRpb25PcHRpb25zIiwibm9ybWFsTG9jYXRpb25PcHRpb25zIiwibG9jYXRpb25QIiwid2F0Y2hQb3NpdGlvbk9yaWdpbiIsIndhdGNoUG9zaXRpb24iLCJjbGVhcldhdGNoT3JpZ2luIiwiY2xlYXJXYXRjaCIsIndhdGNoZXIiLCJpbnRlclRpbWUiLCJzdGFydFdhdGNoZXIiLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImlzRmlyc3QiLCJsb2NhdGlvbk9wdGlvbnMiLCJ0aGVuIiwiZmlyc3RDYiIsImNhdGNoIiwiZXJyIiwiY2xlYXJJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFnQ3dCQSxPOztBQWhDeEI7O0FBQ0E7Ozs7QUFDQTs7SUFBWUMsSzs7Ozs7O0FBRVosSUFBSUMsY0FBYyxJQUFsQjs7QUFPQSxTQUFTQyxJQUFULENBQWVDLEdBQWYsRUFBb0JDLFFBQXBCLEVBQThCO0FBQzVCLE1BQUksQ0FBQ0QsR0FBRCxJQUFRLENBQUNBLElBQUlFLE1BQWIsSUFBdUIsQ0FBQ0QsUUFBeEIsSUFBb0MsQ0FBQ0EsU0FBU0MsTUFBbEQsRUFBMEQ7QUFDeERMLFVBQU1NLElBQU4sQ0FBVyw0Q0FBWDtBQUNBTixVQUFNTyxJQUFOLENBQVcsQ0FBWDtBQUNEOztBQUVELE1BQUksT0FBT0MsRUFBUCxLQUFjLFdBQWxCLEVBQStCO0FBQzdCUixVQUFNTSxJQUFOLENBQVcsbUNBQVg7QUFDQU4sVUFBTU8sSUFBTixDQUFXLENBQVg7QUFDRDs7QUFFRCxNQUFJLENBQUNOLFdBQUwsRUFBa0I7QUFDaEIsUUFBSTtBQUNGQSxvQkFBYyxJQUFJTyxHQUFHQyxJQUFILENBQVFDLFdBQVosQ0FBd0JQLEdBQXhCLEVBQTZCQyxRQUE3QixDQUFkO0FBQ0QsS0FGRCxDQUVFLE9BQU9PLENBQVAsRUFBVTtBQUNWWCxZQUFNTSxJQUFOLENBQVcscUJBQVg7QUFDQU4sWUFBTU8sSUFBTixDQUFXLENBQVg7QUFDRDtBQUNGO0FBQ0Y7O0FBRWMsU0FBU1IsT0FBVCxDQUFrQmEsSUFBbEIsRUFBd0I7QUFDckNWLE9BQUssaUJBQU9XLFVBQVosRUFBd0IsaUJBQU9DLGdCQUEvQjs7QUFHQUYsT0FBS0csU0FBTCxDQUFlQyxXQUFmLEdBQTZCLFVBQUNDLEVBQUQsRUFBS0MsT0FBTCxFQUFjQyxPQUFkLEVBQTBCO0FBQ3JEbEIsZ0JBQVllLFdBQVosQ0FDRSxvQkFBWTtBQUNWLFVBQUlJLFNBQVNDLE1BQVQsSUFBbUJELFNBQVNFLElBQTVCLElBQW9DRixTQUFTRyxHQUE3QyxJQUFvREgsU0FBU0ksR0FBakUsRUFBc0U7QUFDcEVQLFdBQUdHLFFBQUg7QUFDRCxPQUZELE1BRU87QUFDTEYsZ0JBQVEsdUJBQVI7QUFDRDtBQUNGLEtBUEgsRUFRRSxZQUFNO0FBQ0pBLGNBQVEsWUFBUjtBQUNELEtBVkgsRUFXRUMsT0FYRjtBQWFELEdBZEQ7QUFlQVAsT0FBS0csU0FBTCxDQUFlVSxZQUFmLEdBQThCLFVBQUNOLE9BQUQsRUFBYTtBQUN6QyxXQUFPLHNCQUFZLFVBQUNPLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q2YsV0FBS0csU0FBTCxDQUFlQyxXQUFmLENBQTJCVSxPQUEzQixFQUFvQ0MsTUFBcEMsRUFBNENSLE9BQTVDO0FBQ0QsS0FGTSxDQUFQO0FBR0QsR0FKRDs7QUFPQVAsT0FBS0csU0FBTCxDQUFlYSxhQUFmLEdBQStCLFVBQUNYLEVBQUQsRUFBS0MsT0FBTCxFQUFjQyxPQUFkLEVBQTBCO0FBQ3ZEbEIsZ0JBQVkyQixhQUFaLENBQTBCLG9CQUFZO0FBQ3BDLFVBQUlSLFNBQVNDLE1BQVQsSUFBbUJELFNBQVNFLElBQTVCLElBQW9DRixTQUFTRyxHQUE3QyxJQUFvREgsU0FBU0ksR0FBakUsRUFBc0U7QUFDcEVQLFdBQUdHLFFBQUg7QUFDRCxPQUZELE1BRU87QUFDTEYsZ0JBQVEsd0JBQVI7QUFDRDtBQUNGLEtBTkQsRUFNRyxZQUFNO0FBQ1BBLGNBQVEsYUFBUjtBQUNELEtBUkQ7QUFTRCxHQVZEO0FBV0FOLE9BQUtHLFNBQUwsQ0FBZWMsY0FBZixHQUFnQyxVQUFDVixPQUFELEVBQWE7QUFDM0MsV0FBTyxzQkFBWSxVQUFDTyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENmLFdBQUtHLFNBQUwsQ0FBZWEsYUFBZixDQUE2QkYsT0FBN0IsRUFBc0NDLE1BQXRDLEVBQThDUixPQUE5QztBQUNELEtBRk0sQ0FBUDtBQUdELEdBSkQ7O0FBYUFQLE9BQUtHLFNBQUwsQ0FBZUssUUFBZixHQUEwQixVQUFDSCxFQUFELEVBQUtDLE9BQUwsRUFBK0I7QUFBQSxRQUFqQkMsT0FBaUIsdUVBQVAsRUFBTzs7QUFDdkRQLFNBQUtHLFNBQUwsQ0FBZUMsV0FBZixDQUEyQkMsRUFBM0IsRUFBK0IsWUFBTTtBQUNuQyxVQUFJRSxRQUFRVyxLQUFaLEVBQW1CO0FBQ2pCbEIsYUFBS0csU0FBTCxDQUFlYSxhQUFmLENBQTZCWCxFQUE3QixFQUFpQ0MsT0FBakMsRUFBMENDLFFBQVFZLGlCQUFsRDtBQUNELE9BRkQsTUFFTztBQUNMYixnQkFBUSxhQUFSO0FBQ0Q7QUFDRixLQU5ELEVBTUdDLFFBQVFhLHFCQU5YO0FBT0QsR0FSRDtBQVNBcEIsT0FBS0csU0FBTCxDQUFla0IsU0FBZixHQUEyQixZQUFrQjtBQUFBLFFBQWpCZCxPQUFpQix1RUFBUCxFQUFPOztBQUMzQyxXQUFPLHNCQUFZLFVBQUNPLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q2YsV0FBS0csU0FBTCxDQUFlSyxRQUFmLENBQXdCTSxPQUF4QixFQUFpQ0MsTUFBakMsRUFBeUNSLE9BQXpDO0FBQ0QsS0FGTSxDQUFQO0FBR0QsR0FKRDs7QUFPQVAsT0FBS0csU0FBTCxDQUFlbUIsbUJBQWYsR0FBcUMsVUFBQ2pCLEVBQUQsRUFBS0MsT0FBTCxFQUErQjtBQUFBLFFBQWpCQyxPQUFpQix1RUFBUCxFQUFPOztBQUNsRWxCLGdCQUFZa0MsYUFBWixDQUEwQmxCLEVBQTFCO0FBQ0QsR0FGRDtBQUdBTCxPQUFLRyxTQUFMLENBQWVxQixnQkFBZixHQUFrQyxZQUFNO0FBQ3RDbkMsZ0JBQVlvQyxVQUFaO0FBQ0QsR0FGRDs7QUFLQSxNQUFJQyxnQkFBSjs7QUFRQTFCLE9BQUtHLFNBQUwsQ0FBZW9CLGFBQWYsR0FBK0IsWUFBK0M7QUFBQSxRQUE5Q0ksU0FBOEMsdUVBQWxDLEVBQWtDO0FBQUEsUUFBOUJ0QixFQUE4QjtBQUFBLFFBQTFCQyxPQUEwQjtBQUFBLFFBQWpCQyxPQUFpQix1RUFBUCxFQUFPOztBQUM1RUgsZ0JBQVksSUFBWjs7QUFFQSxhQUFTd0IsWUFBVCxHQUF5QjtBQUN2QkYsZ0JBQVVHLE9BQU9DLFdBQVAsQ0FBbUIsWUFBWTtBQUN2QzFCO0FBQ0QsT0FGUyxFQUVQdUIsWUFBWSxJQUZMLENBQVY7QUFHRDs7QUFFRCxhQUFTdkIsV0FBVCxDQUFzQjJCLE9BQXRCLEVBQStCO0FBQzdCL0IsV0FBS0csU0FBTCxDQUFla0IsU0FBZixDQUF5QmQsUUFBUXlCLGVBQWpDLEVBQWtEQyxJQUFsRCxDQUF1RCxVQUFDekIsUUFBRCxFQUFjO0FBQ25FLFlBQUl1QixXQUFXeEIsUUFBUTJCLE9BQXZCLEVBQWdDO0FBQzlCM0Isa0JBQVEyQixPQUFSLENBQWdCMUIsUUFBaEI7QUFDRCxTQUZELE1BRU87QUFDTEgsYUFBR0csUUFBSDtBQUNEO0FBQ0R1QixtQkFBV0gsY0FBWDtBQUNELE9BUEQsRUFPR08sS0FQSCxDQU9TLFVBQUNDLEdBQUQsRUFBUztBQUNoQjlCLGdCQUFROEIsR0FBUjtBQUNELE9BVEQ7QUFVRDtBQUNGLEdBckJEOztBQXdCQXBDLE9BQUtHLFNBQUwsQ0FBZXNCLFVBQWYsR0FBNEIsWUFBTTtBQUNoQyxRQUFJQyxPQUFKLEVBQWE7QUFDWEcsYUFBT1EsYUFBUCxDQUFxQlgsT0FBckI7QUFDQUEsZ0JBQVUsSUFBVjtBQUNEO0FBQ0YsR0FMRDtBQU1EIiwiZmlsZSI6Imdlb2xvY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IkU6LzAyUHJvamVjdC9NeUdpdEh1Yi8wMF9taW5lL3FxLWxvY2F0aW9uLWtpdHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2xpYnMvZ2VvbG9jYXRpb24ubWluJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscydcblxubGV0IGdlb2xvY2F0aW9uID0gbnVsbFxuXG4vKipcbiAqIOWPguaVsO+8mlxuICoga2V577ya5b+F5aGr77yM5byA5Y+R5a+G6ZKlKGtleSnvvIznlLPor7flnLDlnYAgaHR0cDovL2xicy5xcS5jb20vbXlrZXkuaHRtbFxuICogcmVmZXJyZXLvvJrlv4XloavvvIzosIPnlKjmnaXmupDvvIzkuIDoiKzkuLrmgqjnmoTlupTnlKjlkI3np7DvvIzkuLrkuobkv53pmpzlr7nmgqjnmoTmnI3liqHvvIzor7fliqHlv4XloavlhpnvvIHkvovlpoLvvJogcmVmZXJlcj1tYXBxcVxuICovXG5mdW5jdGlvbiBpbml0IChrZXksIHJlZmVycmVyKSB7XG4gIGlmICgha2V5IHx8ICFrZXkubGVuZ3RoIHx8ICFyZWZlcnJlciB8fCAhcmVmZXJyZXIubGVuZ3RoKSB7XG4gICAgdXRpbHMud2Fybign57y65bCR5byA5Y+R56eY6ZKl5L+h5oGv77yM55Sz6K+35Zyw5Z2AIGh0dHA6Ly9sYnMucXEuY29tL215a2V5Lmh0bWwnKVxuICAgIHV0aWxzLmV4aXQoMSlcbiAgfVxuXG4gIGlmICh0eXBlb2YgcXEgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdXRpbHMud2Fybign5Y+v6IO955Sx5LqO5omn6KGM546v5aKD6Zeu6aKY77yMZ2VvbG9jYXRpb27kuK1xceWPmOmHj+acquiDveWFqOWxgOazqOWGjCcpXG4gICAgdXRpbHMuZXhpdCgxKVxuICB9XG5cbiAgaWYgKCFnZW9sb2NhdGlvbikge1xuICAgIHRyeSB7XG4gICAgICBnZW9sb2NhdGlvbiA9IG5ldyBxcS5tYXBzLkdlb2xvY2F0aW9uKGtleSwgcmVmZXJyZXIpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdXRpbHMud2Fybign5Yib5bu65a6a5L2NR2VvbG9jYXRpb27lrp7kvovlh7rplJknKVxuICAgICAgdXRpbHMuZXhpdCgxKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnN0YWxsIChLaXRzKSB7XG4gIGluaXQoY29uZmlnLnNlcnZpY2VLZXksIGNvbmZpZy5zZXJ2aWNlUmVmZXJlbmNlKVxuXG4gIC8vIOaZrumAmuWumuS9jVxuICBLaXRzLnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IChjYiwgZXJyb3JDYiwgb3B0aW9ucykgPT4ge1xuICAgIGdlb2xvY2F0aW9uLmdldExvY2F0aW9uKFxuICAgICAgbG9jYXRpb24gPT4ge1xuICAgICAgICBpZiAobG9jYXRpb24uYWRjb2RlICYmIGxvY2F0aW9uLmNpdHkgJiYgbG9jYXRpb24ubGF0ICYmIGxvY2F0aW9uLmxuZykgeyAgIC8vIFRPRE8gbXVzdEhhdmXlj4LmlbBcbiAgICAgICAgICBjYihsb2NhdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlcnJvckNiKCdmYWlsLWludmFsaWRfcG9zaXRpb24nKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBlcnJvckNiKCdmYWlsLWVycm9yJylcbiAgICAgIH0sXG4gICAgICBvcHRpb25zXG4gICAgKVxuICB9XG4gIEtpdHMucHJvdG90eXBlLmdldExvY2F0aW9uUCA9IChvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEtpdHMucHJvdG90eXBlLmdldExvY2F0aW9uKHJlc29sdmUsIHJlamVjdCwgb3B0aW9ucylcbiAgICB9KVxuICB9XG5cbiAgLy8gaXDlrprkvY1cbiAgS2l0cy5wcm90b3R5cGUuZ2V0SXBMb2NhdGlvbiA9IChjYiwgZXJyb3JDYiwgb3B0aW9ucykgPT4ge1xuICAgIGdlb2xvY2F0aW9uLmdldElwTG9jYXRpb24obG9jYXRpb24gPT4ge1xuICAgICAgaWYgKGxvY2F0aW9uLmFkY29kZSAmJiBsb2NhdGlvbi5jaXR5ICYmIGxvY2F0aW9uLmxhdCAmJiBsb2NhdGlvbi5sbmcpIHtcbiAgICAgICAgY2IobG9jYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvckNiKCdmYWlsOiBpbnZhbGlkX3Bvc2l0aW9uJylcbiAgICAgIH1cbiAgICB9LCAoKSA9PiB7XG4gICAgICBlcnJvckNiKCdmYWlsOiBlcnJvcicpXG4gICAgfSlcbiAgfVxuICBLaXRzLnByb3RvdHlwZS5nZXRJcExvY2F0aW9uUCA9IChvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEtpdHMucHJvdG90eXBlLmdldElwTG9jYXRpb24ocmVzb2x2ZSwgcmVqZWN0LCBvcHRpb25zKVxuICAgIH0pXG4gIH1cblxuICAvLyDmoLnmja5HUFPlrprkvY3vvIzlpoLmnpzmnKrojrflj5bliLDliJnnlKhpcOWumuS9jVxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGNiXG4gICAqIEBwYXJhbSBlcnJvckNiXG4gICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMuY2FuSXAg5pSv5oyBSVDlrprkvY0gOyBvcHRpb25zLm5vcm1hbExvY2F0aW9uT3B0aW9ucyDmma7pgJpHUFPlrprkvY3lj6/pgInlj4LmlbAgOyBvcHRpb25zLmlwTG9jYXRpb25PcHRpb25zIElQ5a6a5L2N5Y+v6YCJ5Y+C5pWwXG4gICAqL1xuICBLaXRzLnByb3RvdHlwZS5sb2NhdGlvbiA9IChjYiwgZXJyb3JDYiwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgS2l0cy5wcm90b3R5cGUuZ2V0TG9jYXRpb24oY2IsICgpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLmNhbklwKSB7XG4gICAgICAgIEtpdHMucHJvdG90eXBlLmdldElwTG9jYXRpb24oY2IsIGVycm9yQ2IsIG9wdGlvbnMuaXBMb2NhdGlvbk9wdGlvbnMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvckNiKCdmYWlsOiBlcnJvcicpXG4gICAgICB9XG4gICAgfSwgb3B0aW9ucy5ub3JtYWxMb2NhdGlvbk9wdGlvbnMpXG4gIH1cbiAgS2l0cy5wcm90b3R5cGUubG9jYXRpb25QID0gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBLaXRzLnByb3RvdHlwZS5sb2NhdGlvbihyZXNvbHZlLCByZWplY3QsIG9wdGlvbnMpXG4gICAgfSlcbiAgfVxuXG4gIC8vIOiHquW4pueahHdhdGNoUG9zaXRpb27mlrnms5VcbiAgS2l0cy5wcm90b3R5cGUud2F0Y2hQb3NpdGlvbk9yaWdpbiA9IChjYiwgZXJyb3JDYiwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbihjYilcbiAgfVxuICBLaXRzLnByb3RvdHlwZS5jbGVhcldhdGNoT3JpZ2luID0gKCkgPT4ge1xuICAgIGdlb2xvY2F0aW9uLmNsZWFyV2F0Y2goKVxuICB9XG5cbiAgLy8g55uR5ZCs5L2N572u5L+h5oGv55qE5pS55Y+YXG4gIGxldCB3YXRjaGVyXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gaW50ZXJUaW1lXG4gICAqIEBwYXJhbSBjYlxuICAgKiBAcGFyYW0gZXJyb3JDYlxuICAgKiBAcGFyYW0gb3B0aW9ucyBmaXJzdENiIOesrOS4gOasoeaIkOWKn+WQjuaJp+ihjCA7IG9wdGlvbnMubG9jYXRpb25PcHRpb25zIOWumuS9jeWPr+mAieWPguaVsFxuICAgKi9cbiAgS2l0cy5wcm90b3R5cGUud2F0Y2hQb3NpdGlvbiA9IChpbnRlclRpbWUgPSAxMCwgY2IsIGVycm9yQ2IsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGdldExvY2F0aW9uKHRydWUpXG5cbiAgICBmdW5jdGlvbiBzdGFydFdhdGNoZXIgKCkge1xuICAgICAgd2F0Y2hlciA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdldExvY2F0aW9uKClcbiAgICAgIH0sIGludGVyVGltZSAqIDEwMDApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TG9jYXRpb24gKGlzRmlyc3QpIHtcbiAgICAgIEtpdHMucHJvdG90eXBlLmxvY2F0aW9uUChvcHRpb25zLmxvY2F0aW9uT3B0aW9ucykudGhlbigobG9jYXRpb24pID0+IHtcbiAgICAgICAgaWYgKGlzRmlyc3QgJiYgb3B0aW9ucy5maXJzdENiKSB7XG4gICAgICAgICAgb3B0aW9ucy5maXJzdENiKGxvY2F0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNiKGxvY2F0aW9uKVxuICAgICAgICB9XG4gICAgICAgIGlzRmlyc3QgJiYgc3RhcnRXYXRjaGVyKClcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZXJyb3JDYihlcnIpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIOWBnOatouebkeWQrOS9jee9ruS/oeaBr+eahOaUueWPmFxuICBLaXRzLnByb3RvdHlwZS5jbGVhcldhdGNoID0gKCkgPT4ge1xuICAgIGlmICh3YXRjaGVyKSB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh3YXRjaGVyKVxuICAgICAgd2F0Y2hlciA9IG51bGxcbiAgICB9XG4gIH1cbn1cbiJdfQ==

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(14);

var _promise2 = _interopRequireDefault(_promise);

exports.default = install;

var _config = __webpack_require__(13);

var _config2 = _interopRequireDefault(_config);

var _utils = __webpack_require__(4);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Kits) {
  Kits.prototype.getGeocoder = function (lat, lng) {
    return new _promise2.default(function (resolve, reject) {
      utils.jsonp(_config2.default.webserviceApiRoot + '/geocoder/v1/?location=' + lat + ',' + lng + '&output=jsonp&key=' + _config2.default.serviceKey).then(function (response) {
        resolve(response);
      }).catch(function (data) {
        reject(data);
      });
    });
  };

  Kits.prototype.getDistance = function (from, to) {
    var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'walking';

    return new _promise2.default(function (resolve, reject) {
      utils.jsonp(_config2.default.webserviceApiRoot + '/distance/v1/?mode=' + mode + '&from=' + from + '&to=' + to + '&output=jsonp&key=' + _config2.default.serviceKey).then(function (response) {
        resolve(response);
      }).catch(function (data) {
        reject(data);
      });
    });
  };

  Kits.prototype.districtList = function () {
    return new _promise2.default(function (resolve, reject) {
      utils.jsonp(_config2.default.webserviceApiRoot + '/district/v1/list?output=jsonp&key=' + _config2.default.serviceKey).then(function (response) {
        resolve(response);
      }).catch(function (data) {
        reject(data);
      });
    });
  };

  Kits.prototype.districtGetchildren = function (id) {
    return new _promise2.default(function (resolve, reject) {
      utils.jsonp(_config2.default.webserviceApiRoot + '/district/v1/getchildren?id=' + id + '&output=jsonp&key=' + _config2.default.serviceKey).then(function (response) {
        resolve(response);
      }).catch(function (data) {
        reject(data);
      });
    });
  };

  Kits.prototype.districtKeyword = function (keyword) {
    return new _promise2.default(function (resolve, reject) {
      utils.jsonp(_config2.default.webserviceApiRoot + '/district/v1/search?keyword=' + keyword + '&output=jsonp&key=' + _config2.default.serviceKey).then(function (response) {
        resolve(response);
      }).catch(function (data) {
        reject(data);
      });
    });
  };
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcY29tcG9uZW50c1xcd2Vic2VydmljZS5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsIiwidXRpbHMiLCJLaXRzIiwicHJvdG90eXBlIiwiZ2V0R2VvY29kZXIiLCJsYXQiLCJsbmciLCJyZXNvbHZlIiwicmVqZWN0IiwianNvbnAiLCJ3ZWJzZXJ2aWNlQXBpUm9vdCIsInNlcnZpY2VLZXkiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImRhdGEiLCJnZXREaXN0YW5jZSIsImZyb20iLCJ0byIsIm1vZGUiLCJkaXN0cmljdExpc3QiLCJkaXN0cmljdEdldGNoaWxkcmVuIiwiaWQiLCJkaXN0cmljdEtleXdvcmQiLCJrZXl3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQUd3QkEsTzs7QUFIeEI7Ozs7QUFDQTs7SUFBWUMsSzs7Ozs7O0FBRUcsU0FBU0QsT0FBVCxDQUFrQkUsSUFBbEIsRUFBd0I7QUFFckNBLE9BQUtDLFNBQUwsQ0FBZUMsV0FBZixHQUE2QixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN6QyxXQUFPLHNCQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q1AsWUFBTVEsS0FBTixDQUFlLGlCQUFPQyxpQkFBdEIsK0JBQWlFTCxHQUFqRSxTQUF3RUMsR0FBeEUsMEJBQWdHLGlCQUFPSyxVQUF2RyxFQUFxSEMsSUFBckgsQ0FBMEgsb0JBQVk7QUFDcElMLGdCQUFRTSxRQUFSO0FBQ0QsT0FGRCxFQUVHQyxLQUZILENBRVMsZ0JBQVE7QUFDZk4sZUFBT08sSUFBUDtBQUNELE9BSkQ7QUFLRCxLQU5NLENBQVA7QUFPRCxHQVJEOztBQVVBYixPQUFLQyxTQUFMLENBQWVhLFdBQWYsR0FBNkIsVUFBQ0MsSUFBRCxFQUFPQyxFQUFQLEVBQWdDO0FBQUEsUUFBckJDLElBQXFCLHVFQUFkLFNBQWM7O0FBQzNELFdBQU8sc0JBQVksVUFBQ1osT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDUCxZQUFNUSxLQUFOLENBQWUsaUJBQU9DLGlCQUF0QiwyQkFBNkRTLElBQTdELGNBQTBFRixJQUExRSxZQUFxRkMsRUFBckYsMEJBQTRHLGlCQUFPUCxVQUFuSCxFQUFpSUMsSUFBakksQ0FBc0ksb0JBQVk7QUFDaEpMLGdCQUFRTSxRQUFSO0FBQ0QsT0FGRCxFQUVHQyxLQUZILENBRVMsZ0JBQVE7QUFDZk4sZUFBT08sSUFBUDtBQUNELE9BSkQ7QUFLRCxLQU5NLENBQVA7QUFPRCxHQVJEOztBQVVBYixPQUFLQyxTQUFMLENBQWVpQixZQUFmLEdBQThCLFlBQU07QUFDbEMsV0FBTyxzQkFBWSxVQUFDYixPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENQLFlBQU1RLEtBQU4sQ0FBZSxpQkFBT0MsaUJBQXRCLDJDQUE2RSxpQkFBT0MsVUFBcEYsRUFBa0dDLElBQWxHLENBQXVHLG9CQUFZO0FBQ2pITCxnQkFBUU0sUUFBUjtBQUNELE9BRkQsRUFFR0MsS0FGSCxDQUVTLGdCQUFRO0FBQ2ZOLGVBQU9PLElBQVA7QUFDRCxPQUpEO0FBS0QsS0FOTSxDQUFQO0FBT0QsR0FSRDs7QUFVQWIsT0FBS0MsU0FBTCxDQUFla0IsbUJBQWYsR0FBcUMsVUFBQ0MsRUFBRCxFQUFRO0FBQzNDLFdBQU8sc0JBQVksVUFBQ2YsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDUCxZQUFNUSxLQUFOLENBQWUsaUJBQU9DLGlCQUF0QixvQ0FBc0VZLEVBQXRFLDBCQUE2RixpQkFBT1gsVUFBcEcsRUFBa0hDLElBQWxILENBQXVILG9CQUFZO0FBQ2pJTCxnQkFBUU0sUUFBUjtBQUNELE9BRkQsRUFFR0MsS0FGSCxDQUVTLGdCQUFRO0FBQ2ZOLGVBQU9PLElBQVA7QUFDRCxPQUpEO0FBS0QsS0FOTSxDQUFQO0FBT0QsR0FSRDs7QUFVQWIsT0FBS0MsU0FBTCxDQUFlb0IsZUFBZixHQUFpQyxVQUFDQyxPQUFELEVBQWE7QUFDNUMsV0FBTyxzQkFBWSxVQUFDakIsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDUCxZQUFNUSxLQUFOLENBQWUsaUJBQU9DLGlCQUF0QixvQ0FBc0VjLE9BQXRFLDBCQUFrRyxpQkFBT2IsVUFBekcsRUFBdUhDLElBQXZILENBQTRILG9CQUFZO0FBQ3RJTCxnQkFBUU0sUUFBUjtBQUNELE9BRkQsRUFFR0MsS0FGSCxDQUVTLGdCQUFRO0FBQ2ZOLGVBQU9PLElBQVA7QUFDRCxPQUpEO0FBS0QsS0FOTSxDQUFQO0FBT0QsR0FSRDtBQVNEIiwiZmlsZSI6IndlYnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiRTovMDJQcm9qZWN0L015R2l0SHViLzAwX21pbmUvcXEtbG9jYXRpb24ta2l0cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluc3RhbGwgKEtpdHMpIHtcbiAgLy8g6YCG5Zyw5Z2A6Kej5p6QXG4gIEtpdHMucHJvdG90eXBlLmdldEdlb2NvZGVyID0gKGxhdCwgbG5nKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHV0aWxzLmpzb25wKGAke2NvbmZpZy53ZWJzZXJ2aWNlQXBpUm9vdH0vZ2VvY29kZXIvdjEvP2xvY2F0aW9uPSR7bGF0fSwke2xuZ30mb3V0cHV0PWpzb25wJmtleT0ke2NvbmZpZy5zZXJ2aWNlS2V5fWApLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKVxuICAgICAgfSkuY2F0Y2goZGF0YSA9PiB7XG4gICAgICAgIHJlamVjdChkYXRhKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIC8vIOWcsOWbvui3neemu1xuICBLaXRzLnByb3RvdHlwZS5nZXREaXN0YW5jZSA9IChmcm9tLCB0bywgbW9kZSA9ICd3YWxraW5nJykgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB1dGlscy5qc29ucChgJHtjb25maWcud2Vic2VydmljZUFwaVJvb3R9L2Rpc3RhbmNlL3YxLz9tb2RlPSR7bW9kZX0mZnJvbT0ke2Zyb219JnRvPSR7dG99Jm91dHB1dD1qc29ucCZrZXk9JHtjb25maWcuc2VydmljZUtleX1gKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSlcbiAgICAgIH0pLmNhdGNoKGRhdGEgPT4ge1xuICAgICAgICByZWplY3QoZGF0YSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICAvLyDooYzmlL/ljLrliJItbGlzdFxuICBLaXRzLnByb3RvdHlwZS5kaXN0cmljdExpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHV0aWxzLmpzb25wKGAke2NvbmZpZy53ZWJzZXJ2aWNlQXBpUm9vdH0vZGlzdHJpY3QvdjEvbGlzdD9vdXRwdXQ9anNvbnAma2V5PSR7Y29uZmlnLnNlcnZpY2VLZXl9YCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpXG4gICAgICB9KS5jYXRjaChkYXRhID0+IHtcbiAgICAgICAgcmVqZWN0KGRhdGEpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgLy8g6KGM5pS/5Yy65YiSLWdldGNoaWxkcmVuXG4gIEtpdHMucHJvdG90eXBlLmRpc3RyaWN0R2V0Y2hpbGRyZW4gPSAoaWQpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdXRpbHMuanNvbnAoYCR7Y29uZmlnLndlYnNlcnZpY2VBcGlSb290fS9kaXN0cmljdC92MS9nZXRjaGlsZHJlbj9pZD0ke2lkfSZvdXRwdXQ9anNvbnAma2V5PSR7Y29uZmlnLnNlcnZpY2VLZXl9YCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpXG4gICAgICB9KS5jYXRjaChkYXRhID0+IHtcbiAgICAgICAgcmVqZWN0KGRhdGEpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgLy8g6KGM5pS/5Yy65YiSLWtleXdvcmRcbiAgS2l0cy5wcm90b3R5cGUuZGlzdHJpY3RLZXl3b3JkID0gKGtleXdvcmQpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdXRpbHMuanNvbnAoYCR7Y29uZmlnLndlYnNlcnZpY2VBcGlSb290fS9kaXN0cmljdC92MS9zZWFyY2g/a2V5d29yZD0ke2tleXdvcmR9Jm91dHB1dD1qc29ucCZrZXk9JHtjb25maWcuc2VydmljZUtleX1gKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSlcbiAgICAgIH0pLmNhdGNoKGRhdGEgPT4ge1xuICAgICAgICByZWplY3QoZGF0YSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIl19

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _utils = __webpack_require__(4);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function init() {
  if (typeof wx === 'undefined') {
    utils.warn('jssdk wx全局变量不存在，http://qydev.weixin.qq.com/wiki/index.php?title=%E5%BE%AE%E4%BF%A1JS-SDK%E6%8E%A5%E5%8F%A3#.E6.AD.A5.E9.AA.A4.E4.B8.80.EF.BC.9A.E5.BC.95.E5.85.A5JS.E6.96.87.E4.BB.B6');
  }
}

function install(Kits) {
  init();

  var watcher = null;
  Kits.prototype.jssdkWatchPosition = function (interTime) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'gcj02';
    var cb = arguments[2];
    var errCb = arguments[3];
    var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

    getLocation(true);

    function startWatcher() {
      watcher = window.setInterval(function () {
        getLocation();
      }, interTime);
    }

    function getLocation(isFirst) {
      wx.getLocation({
        type: type,
        complete: function complete(location) {
          if (location.errMsg === 'getLocation:ok') {
            if (isFirst && options.firstCb) {
              options.firstCb(location);
            } else {
              cb(location);
            }

            isFirst && startWatcher();
          } else {
            errCb(location);
          }
        }
      });
    }
  };

  Kits.prototype.jssdkClearWatch = function () {
    if (watcher) {
      window.clearInterval(watcher);
      watcher = null;
    }
  };
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcY29tcG9uZW50c1xcd3gtanNzZGsuanMiXSwibmFtZXMiOlsiaW5zdGFsbCIsInV0aWxzIiwiaW5pdCIsInd4Iiwid2FybiIsIktpdHMiLCJ3YXRjaGVyIiwicHJvdG90eXBlIiwianNzZGtXYXRjaFBvc2l0aW9uIiwiaW50ZXJUaW1lIiwidHlwZSIsImNiIiwiZXJyQ2IiLCJvcHRpb25zIiwiZ2V0TG9jYXRpb24iLCJzdGFydFdhdGNoZXIiLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImlzRmlyc3QiLCJjb21wbGV0ZSIsImxvY2F0aW9uIiwiZXJyTXNnIiwiZmlyc3RDYiIsImpzc2RrQ2xlYXJXYXRjaCIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVN3QkEsTzs7QUFSeEI7O0lBQVlDLEs7Ozs7QUFFWixTQUFTQyxJQUFULEdBQWlCO0FBQ2YsTUFBSSxPQUFPQyxFQUFQLEtBQWMsV0FBbEIsRUFBK0I7QUFDN0JGLFVBQU1HLElBQU4sQ0FBVyx1TEFBWDtBQUNEO0FBQ0Y7O0FBRWMsU0FBU0osT0FBVCxDQUFrQkssSUFBbEIsRUFBd0I7QUFDckNIOztBQUdBLE1BQUlJLFVBQVUsSUFBZDtBQUNBRCxPQUFLRSxTQUFMLENBQWVDLGtCQUFmLEdBQW9DLFVBQUNDLFNBQUQsRUFBd0Q7QUFBQSxRQUE1Q0MsSUFBNEMsdUVBQXJDLE9BQXFDO0FBQUEsUUFBNUJDLEVBQTRCO0FBQUEsUUFBeEJDLEtBQXdCO0FBQUEsUUFBakJDLE9BQWlCLHVFQUFQLEVBQU87O0FBQzFGQyxnQkFBWSxJQUFaOztBQUVBLGFBQVNDLFlBQVQsR0FBeUI7QUFDdkJULGdCQUFVVSxPQUFPQyxXQUFQLENBQW1CLFlBQVk7QUFDdkNIO0FBQ0QsT0FGUyxFQUVQTCxTQUZPLENBQVY7QUFHRDs7QUFFRCxhQUFTSyxXQUFULENBQXNCSSxPQUF0QixFQUErQjtBQUM3QmYsU0FBR1csV0FBSCxDQUFlO0FBQ2JKLGNBQU1BLElBRE87QUFFYlMsa0JBQVUsa0JBQVVDLFFBQVYsRUFBb0I7QUFDNUIsY0FBSUEsU0FBU0MsTUFBVCxLQUFvQixnQkFBeEIsRUFBMEM7QUFDeEMsZ0JBQUlILFdBQVdMLFFBQVFTLE9BQXZCLEVBQWdDO0FBQzlCVCxzQkFBUVMsT0FBUixDQUFnQkYsUUFBaEI7QUFDRCxhQUZELE1BRU87QUFDTFQsaUJBQUdTLFFBQUg7QUFDRDs7QUFFREYsdUJBQVdILGNBQVg7QUFDRCxXQVJELE1BUU87QUFDTEgsa0JBQU1RLFFBQU47QUFDRDtBQUNGO0FBZFksT0FBZjtBQWdCRDtBQUNGLEdBM0JEOztBQThCQWYsT0FBS0UsU0FBTCxDQUFlZ0IsZUFBZixHQUFpQyxZQUFNO0FBQ3JDLFFBQUlqQixPQUFKLEVBQWE7QUFDWFUsYUFBT1EsYUFBUCxDQUFxQmxCLE9BQXJCO0FBQ0FBLGdCQUFVLElBQVY7QUFDRDtBQUNGLEdBTEQ7QUFNRCIsImZpbGUiOiJ3eC1qc3Nkay5qcyIsInNvdXJjZVJvb3QiOiJFOi8wMlByb2plY3QvTXlHaXRIdWIvMDBfbWluZS9xcS1sb2NhdGlvbi1raXRzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscydcblxuZnVuY3Rpb24gaW5pdCAoKSB7XG4gIGlmICh0eXBlb2Ygd3ggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdXRpbHMud2FybignanNzZGsgd3jlhajlsYDlj5jph4/kuI3lrZjlnKjvvIxodHRwOi8vcXlkZXYud2VpeGluLnFxLmNvbS93aWtpL2luZGV4LnBocD90aXRsZT0lRTUlQkUlQUUlRTQlQkYlQTFKUy1TREslRTYlOEUlQTUlRTUlOEYlQTMjLkU2LkFELkE1LkU5LkFBLkE0LkU0LkI4LjgwLkVGLkJDLjlBLkU1LkJDLjk1LkU1Ljg1LkE1SlMuRTYuOTYuODcuRTQuQkIuQjYnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluc3RhbGwgKEtpdHMpIHtcbiAgaW5pdCgpXG5cbiAgLy8g55uR5ZCs5L2N572u5L+h5oGv55qE5pS55Y+YXG4gIGxldCB3YXRjaGVyID0gbnVsbFxuICBLaXRzLnByb3RvdHlwZS5qc3Nka1dhdGNoUG9zaXRpb24gPSAoaW50ZXJUaW1lLCB0eXBlID0gJ2djajAyJywgY2IsIGVyckNiLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBnZXRMb2NhdGlvbih0cnVlKVxuXG4gICAgZnVuY3Rpb24gc3RhcnRXYXRjaGVyICgpIHtcbiAgICAgIHdhdGNoZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBnZXRMb2NhdGlvbigpXG4gICAgICB9LCBpbnRlclRpbWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TG9jYXRpb24gKGlzRmlyc3QpIHtcbiAgICAgIHd4LmdldExvY2F0aW9uKHtcbiAgICAgICAgdHlwZTogdHlwZSwgLy8g6buY6K6k5Li6d2dzODTnmoRncHPlnZDmoIfvvIzlpoLmnpzopoHov5Tlm57nm7TmjqXnu5lvcGVuTG9jYXRpb27nlKjnmoTngavmmJ/lnZDmoIfvvIzlj6/kvKDlhaUnZ2NqMDInXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgICAgICBpZiAobG9jYXRpb24uZXJyTXNnID09PSAnZ2V0TG9jYXRpb246b2snKSB7XG4gICAgICAgICAgICBpZiAoaXNGaXJzdCAmJiBvcHRpb25zLmZpcnN0Q2IpIHtcbiAgICAgICAgICAgICAgb3B0aW9ucy5maXJzdENiKGxvY2F0aW9uKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2IobG9jYXRpb24pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlzRmlyc3QgJiYgc3RhcnRXYXRjaGVyKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyQ2IobG9jYXRpb24pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIOWBnOatouebkeWQrOS9jee9ruS/oeaBr+eahOaUueWPmFxuICBLaXRzLnByb3RvdHlwZS5qc3Nka0NsZWFyV2F0Y2ggPSAoKSA9PiB7XG4gICAgaWYgKHdhdGNoZXIpIHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHdhdGNoZXIpXG4gICAgICB3YXRjaGVyID0gbnVsbFxuICAgIH1cbiAgfVxufVxuIl19

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
__webpack_require__(71);
__webpack_require__(72);
__webpack_require__(70);
module.exports = __webpack_require__(5).Promise;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(21)
  , toLength  = __webpack_require__(33)
  , toIndex   = __webpack_require__(64);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(9)
  , call        = __webpack_require__(49)
  , isArrayIter = __webpack_require__(48)
  , anObject    = __webpack_require__(2)
  , toLength    = __webpack_require__(33)
  , getIterFn   = __webpack_require__(67)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(26)(function(){
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(8);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(7)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(2);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(54)
  , descriptor     = __webpack_require__(30)
  , setToStringTag = __webpack_require__(18)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , macrotask = __webpack_require__(32).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(8)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(2)
  , dPs         = __webpack_require__(55)
  , enumBugKeys = __webpack_require__(24)
  , IE_PROTO    = __webpack_require__(19)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(17)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(27).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(12)
  , anObject = __webpack_require__(2)
  , getKeys  = __webpack_require__(58);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(10)
  , toObject    = __webpack_require__(65)
  , IE_PROTO    = __webpack_require__(19)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(10)
  , toIObject    = __webpack_require__(21)
  , arrayIndexOf = __webpack_require__(43)(false)
  , IE_PROTO     = __webpack_require__(19)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(57)
  , enumBugKeys = __webpack_require__(24);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(3);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(1)
  , core        = __webpack_require__(5)
  , dP          = __webpack_require__(12)
  , DESCRIPTORS = __webpack_require__(6)
  , SPECIES     = __webpack_require__(0)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(2)
  , aFunction = __webpack_require__(15)
  , SPECIES   = __webpack_require__(0)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20)
  , defined   = __webpack_require__(16);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(16);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(23)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(7);
module.exports = __webpack_require__(5).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(41)
  , step             = __webpack_require__(52)
  , Iterators        = __webpack_require__(7)
  , toIObject        = __webpack_require__(21);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(28)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 69 */
/***/ (function(module, exports) {



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(29)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(9)
  , classof            = __webpack_require__(23)
  , $export            = __webpack_require__(25)
  , isObject           = __webpack_require__(11)
  , aFunction          = __webpack_require__(15)
  , anInstance         = __webpack_require__(42)
  , forOf              = __webpack_require__(44)
  , speciesConstructor = __webpack_require__(62)
  , task               = __webpack_require__(32).set
  , microtask          = __webpack_require__(53)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(59)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(18)($Promise, PROMISE);
__webpack_require__(61)(PROMISE);
Wrapper = __webpack_require__(5)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(51)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(63)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(28)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(3)
  , Iterators     = __webpack_require__(7)
  , TO_STRING_TAG = __webpack_require__(0)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(74);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window && typeof window.process !== 'undefined' && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document && 'WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window && window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  try {
    return exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (typeof process !== 'undefined' && 'env' in process) {
    return process.env.DEBUG;
  }
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(77)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(76);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */

var debug = __webpack_require__(73)('jsonp');

/**
 * Module exports.
 */

module.exports = jsonp;

/**
 * Callback index.
 */

var count = 0;

/**
 * Noop function.
 */

function noop(){}

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  if (!opts) opts = {};

  var prefix = opts.prefix || '__jp';

  // use the callback name that was passed if one was provided.
  // otherwise generate a unique name by incrementing our counter.
  var id = opts.name || (prefix + (count++));

  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0] || document.head;
  var script;
  var timer;


  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    if (script.parentNode) script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer) clearTimeout(timer);
  }

  function cancel(){
    if (window[id]) {
      cleanup();
    }
  }

  window[id] = function(data){
    debug('jsonp got', data);
    cleanup();
    if (fn) fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');

  debug('jsonp req "%s"', url);

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);

  return cancel;
}


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000
var m = s * 60
var h = m * 60
var d = h * 24
var y = d * 365.25

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {}
  var type = typeof val
  if (type === 'string' && val.length > 0) {
    return parse(val)
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ?
			fmtLong(val) :
			fmtShort(val)
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
}

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str)
  if (str.length > 10000) {
    return
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str)
  if (!match) {
    return
  }
  var n = parseFloat(match[1])
  var type = (match[2] || 'ms').toLowerCase()
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y
    case 'days':
    case 'day':
    case 'd':
      return n * d
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n
    default:
      return undefined
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd'
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h'
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm'
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's'
  }
  return ms + 'ms'
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms'
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name
  }
  return Math.ceil(ms / n) + ' ' + name + 's'
}


/***/ }),
/* 77 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(4);

var utils = _interopRequireWildcard(_utils);

var _init = __webpack_require__(35);

var _init2 = _interopRequireDefault(_init);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

if (typeof window === 'undefined') {
  utils.warn('only in browser');
}

function Kits(options) {
  this._init(options);
}

(0, _init2.default)(Kits);

exports.default = Kits;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcaW5kZXguanMiXSwibmFtZXMiOlsidXRpbHMiLCJ3aW5kb3ciLCJ3YXJuIiwiS2l0cyIsIm9wdGlvbnMiLCJfaW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0lBQVlBLEs7O0FBQ1o7Ozs7Ozs7O0FBRUEsSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDRCxRQUFNRSxJQUFOLENBQVcsaUJBQVg7QUFDRDs7QUFFRCxTQUFTQyxJQUFULENBQWVDLE9BQWYsRUFBd0I7QUFDdEIsT0FBS0MsS0FBTCxDQUFXRCxPQUFYO0FBQ0Q7O0FBRUQsb0JBQUtELElBQUw7O2tCQUVlQSxJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkU6LzAyUHJvamVjdC9NeUdpdEh1Yi8wMF9taW5lL3FxLWxvY2F0aW9uLWtpdHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0J1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgdXRpbHMud2Fybignb25seSBpbiBicm93c2VyJylcbn1cblxuZnVuY3Rpb24gS2l0cyAob3B0aW9ucykge1xuICB0aGlzLl9pbml0KG9wdGlvbnMpXG59XG5cbmluaXQoS2l0cylcblxuZXhwb3J0IGRlZmF1bHQgS2l0c1xuIl19

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Kits = __webpack_require__(0)

var kits = new Kits({
  need: {
    geolocation: true,
    geoTools: true,
    webservice: true,
    wxJssdk: true
  },
  serviceKey: 'QMCBZ-3R33V-CKYPM-UITRH-5CRGH-2UBI3',
  serviceReference: 'niwodai'
})
//
// kits.watchPosition(5, function (location) {
//   console.log(location)
// }, function (err) {
//   console.log(err)
// }, {
//   locationOptions: {
//     canIp: true
//   }
// })

kits.getDistance('39.983171,116.308479', '39.996060,116.353455').then((result) => {
  console.log(result)
})

/***/ })
/******/ ]);