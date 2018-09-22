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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _controller_player_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller/player-controller */ \"./src/app/controller/player-controller.ts\");\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0__();\nvar server = http__WEBPACK_IMPORTED_MODULE_1__[\"createServer\"](app);\nvar io = new socket_io__WEBPACK_IMPORTED_MODULE_2__(server);\nserver.listen(3000, function () {\n  return console.log(\"Example app listening on port 3000!\");\n});\napp.get(\"/\", function (req, res) {\n  res.header(\"Content-type\", \"text/html\");\n  return res.end(\"<h1>Hello, Secure World!</h1>\");\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (io);\n_controller_player_controller__WEBPACK_IMPORTED_MODULE_3__[\"playerController\"].register();\n\n//# sourceURL=webpack:///./src/app/app.ts?");

/***/ }),

/***/ "./src/app/controller/base-controller-int.ts":
/*!***************************************************!*\
  !*** ./src/app/controller/base-controller-int.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar BaseControllerInt =\n/*#__PURE__*/\nfunction () {\n  function BaseControllerInt() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BaseControllerInt);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BaseControllerInt, [{\n    key: \"register\",\n    value: function register() {\n      console.log(\"Default register!\");\n    }\n  }]);\n\n  return BaseControllerInt;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseControllerInt);\n\n//# sourceURL=webpack:///./src/app/controller/base-controller-int.ts?");

/***/ }),

/***/ "./src/app/controller/player-controller.ts":
/*!*************************************************!*\
  !*** ./src/app/controller/player-controller.ts ***!
  \*************************************************/
/*! exports provided: playerController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerController\", function() { return playerController; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app */ \"./src/app/app.ts\");\n/* harmony import */ var _base_controller_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-controller-int */ \"./src/app/controller/base-controller-int.ts\");\n/* harmony import */ var _service_playing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/playing-service */ \"./src/app/service/playing-service.ts\");\n\n\n\n\n\n\n\n\n\nvar PlayerController =\n/*#__PURE__*/\nfunction (_BaseControllerInt) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PlayerController, _BaseControllerInt);\n\n  function PlayerController() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PlayerController);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PlayerController).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PlayerController, [{\n    key: \"onPlayerConnection\",\n    value: function onPlayerConnection() {\n      _app__WEBPACK_IMPORTED_MODULE_5__[\"default\"].on(\"connection\", function () {\n        _service_playing_service__WEBPACK_IMPORTED_MODULE_7__[\"playingService\"].getPlayer(\"Vajetaitau\");\n        console.log(\"Connection!\");\n      });\n    }\n  }, {\n    key: \"register\",\n    value: function register() {\n      this.onPlayerConnection();\n    }\n  }]);\n\n  return PlayerController;\n}(_base_controller_int__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n\nvar playerController = new PlayerController();\n\n//# sourceURL=webpack:///./src/app/controller/player-controller.ts?");

/***/ }),

/***/ "./src/app/enum/direction-enum.ts":
/*!****************************************!*\
  !*** ./src/app/enum/direction-enum.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Direction;\n\n(function (Direction) {\n  Direction[\"NORTH\"] = \"NORTH\";\n  Direction[\"SOUTH\"] = \"SOUTH\";\n  Direction[\"EAST\"] = \"EAST\";\n  Direction[\"WEST\"] = \"WEST\";\n})(Direction || (Direction = {}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Direction);\n\n//# sourceURL=webpack:///./src/app/enum/direction-enum.ts?");

/***/ }),

/***/ "./src/app/enum/direction-status-enum.ts":
/*!***********************************************!*\
  !*** ./src/app/enum/direction-status-enum.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar DirectionStatus;\n\n(function (DirectionStatus) {\n  DirectionStatus[\"OPEN\"] = \"OPEN\";\n  DirectionStatus[\"OPEN_BUT_TOO_FAR\"] = \"OPEN_BUT_TOO_FAR\";\n  DirectionStatus[\"OPEN_END\"] = \"OPEN_END\";\n  DirectionStatus[\"CLOSED\"] = \"CLOSED\";\n})(DirectionStatus || (DirectionStatus = {}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DirectionStatus);\n\n//# sourceURL=webpack:///./src/app/enum/direction-status-enum.ts?");

/***/ }),

/***/ "./src/app/model/coordinates.ts":
/*!**************************************!*\
  !*** ./src/app/model/coordinates.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Coordinates; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _enum_direction_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enum/direction-enum */ \"./src/app/enum/direction-enum.ts\");\n\n\n\n\nvar Coordinates =\n/*#__PURE__*/\nfunction () {\n  function Coordinates(x, y) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Coordinates);\n\n    this._x = x;\n    this._y = y;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Coordinates, [{\n    key: \"getDistanceTo\",\n    value: function getDistanceTo(coord) {\n      var xDistance = coord.x - this._x;\n      var yDistance = coord.y - this._y;\n      return Math.sqrt(xDistance * xDistance + yDistance * yDistance);\n    }\n  }, {\n    key: \"pointInDirection\",\n    value: function pointInDirection(direction) {\n      if (direction === _enum_direction_enum__WEBPACK_IMPORTED_MODULE_2__[\"default\"].NORTH) {\n        return this.northPoint();\n      } else if (direction === _enum_direction_enum__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SOUTH) {\n        return this.southPoint();\n      } else if (direction === _enum_direction_enum__WEBPACK_IMPORTED_MODULE_2__[\"default\"].EAST) {\n        return this.eastPoint();\n      } else if (direction === _enum_direction_enum__WEBPACK_IMPORTED_MODULE_2__[\"default\"].WEST) {\n        return this.westPoint();\n      } else {\n        throw new Error(\"Wrong direction specified! (\" + direction + \")\");\n      }\n    }\n  }, {\n    key: \"northPoint\",\n    value: function northPoint() {\n      return new Coordinates(this.x, this.y + 1);\n    }\n  }, {\n    key: \"southPoint\",\n    value: function southPoint() {\n      return new Coordinates(this.x, this.y - 1);\n    }\n  }, {\n    key: \"eastPoint\",\n    value: function eastPoint() {\n      return new Coordinates(this.x + 1, this.y);\n    }\n  }, {\n    key: \"westPoint\",\n    value: function westPoint() {\n      return new Coordinates(this.x - 1, this.y);\n    }\n  }, {\n    key: \"hasSameCoordinates\",\n    value: function hasSameCoordinates(coord) {\n      return this.x === coord.x && this.y === coord.y;\n    }\n  }, {\n    key: \"x\",\n    get: function get() {\n      return this._x;\n    }\n  }, {\n    key: \"y\",\n    get: function get() {\n      return this._y;\n    }\n  }]);\n\n  return Coordinates;\n}();\n\n\n\n//# sourceURL=webpack:///./src/app/model/coordinates.ts?");

/***/ }),

/***/ "./src/app/model/player.ts":
/*!*********************************!*\
  !*** ./src/app/model/player.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _coordinates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coordinates */ \"./src/app/model/coordinates.ts\");\n\n\n\n\n\n\n\nvar Player =\n/*#__PURE__*/\nfunction (_Coordinates) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Player, _Coordinates);\n\n  function Player(name, x, y, visibleRadius) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Player);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Player).call(this, x, y));\n    _this._name = name;\n    _this._visibleRadius = visibleRadius;\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Player, [{\n    key: \"name\",\n    get: function get() {\n      return this._name;\n    }\n  }, {\n    key: \"visibleRadius\",\n    get: function get() {\n      return this._visibleRadius;\n    }\n  }]);\n\n  return Player;\n}(_coordinates__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/app/model/player.ts?");

/***/ }),

/***/ "./src/app/model/point.ts":
/*!********************************!*\
  !*** ./src/app/model/point.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Point; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _coordinates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coordinates */ \"./src/app/model/coordinates.ts\");\n/* harmony import */ var _enum_direction_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enum/direction-enum */ \"./src/app/enum/direction-enum.ts\");\n\n\n\n\n\n\n\n\nvar Point =\n/*#__PURE__*/\nfunction (_Coordinates) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Point, _Coordinates);\n\n  function Point(x, y, north, south, east, west) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Point);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Point).call(this, x, y));\n    _this._north = north;\n    _this._south = south;\n    _this._east = east;\n    _this._west = west;\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Point, [{\n    key: \"statusInDirection\",\n    value: function statusInDirection(direction) {\n      if (direction === _enum_direction_enum__WEBPACK_IMPORTED_MODULE_6__[\"default\"].NORTH) {\n        return this._north;\n      } else if (direction === _enum_direction_enum__WEBPACK_IMPORTED_MODULE_6__[\"default\"].SOUTH) {\n        return this._south;\n      } else if (direction === _enum_direction_enum__WEBPACK_IMPORTED_MODULE_6__[\"default\"].EAST) {\n        return this._east;\n      } else if (direction === _enum_direction_enum__WEBPACK_IMPORTED_MODULE_6__[\"default\"].WEST) {\n        return this._west;\n      } else {\n        throw new Error(\"Wrong direction specified! (\" + direction + \")\");\n      }\n    }\n  }, {\n    key: \"north\",\n    get: function get() {\n      return this._north;\n    }\n  }, {\n    key: \"south\",\n    get: function get() {\n      return this._south;\n    }\n  }, {\n    key: \"east\",\n    get: function get() {\n      return this._east;\n    }\n  }, {\n    key: \"west\",\n    get: function get() {\n      return this._west;\n    }\n  }]);\n\n  return Point;\n}(_coordinates__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/app/model/point.ts?");

/***/ }),

/***/ "./src/app/repository/player-repository.ts":
/*!*************************************************!*\
  !*** ./src/app/repository/player-repository.ts ***!
  \*************************************************/
/*! exports provided: playerRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerRepo\", function() { return playerRepo; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _model_point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/point */ \"./src/app/model/point.ts\");\n/* harmony import */ var _query_query_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./query/query-builder */ \"./src/app/repository/query/query-builder.ts\");\n\n\n\n\n\n\n\nvar PlayerRepository =\n/*#__PURE__*/\nfunction () {\n  function PlayerRepository() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, PlayerRepository);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(PlayerRepository, [{\n    key: \"getPlayerPoint\",\n    value: function () {\n      var _getPlayerPoint = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(player) {\n        var queryResult, firstRow;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return new _query_query_builder__WEBPACK_IMPORTED_MODULE_5__[\"default\"]().query(\"select l.x, l.y, l.north, l.south, l.east, l.west \" + \"from player as p                                  \" + \"inner join labyrinth l on p.x = l.x and p.y = l.y \" + \"where p.name = $1                                 \", [player]);\n\n              case 2:\n                queryResult = _context.sent;\n                firstRow = queryResult.rows[0];\n                return _context.abrupt(\"return\", new _model_point__WEBPACK_IMPORTED_MODULE_4__[\"default\"](firstRow.x, firstRow.y, firstRow.north, firstRow.south, firstRow.east, firstRow.west));\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      return function getPlayerPoint(_x) {\n        return _getPlayerPoint.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"getVisiblePoints\",\n    value: function () {\n      var _getVisiblePoints = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(player) {\n        var queryResult;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return new _query_query_builder__WEBPACK_IMPORTED_MODULE_5__[\"default\"]().query(\"select l.x, l.y, l.north, l.south, l.east, l.west                    \" + \"from player as p                                                     \" + \"inner join labyrinth as l on (p.x + $2 >= l.x) and (p.x - $2 <= l.x) \" + \"                         and (p.y + $2 >= l.y) and (p.y - $2 <= l.y) \" + \"where p.name = $1                                                    \", [player, 10]);\n\n              case 2:\n                queryResult = _context2.sent;\n                return _context2.abrupt(\"return\", queryResult.rows.map(function (r) {\n                  return new _model_point__WEBPACK_IMPORTED_MODULE_4__[\"default\"](r.x, r.y, r.north, r.south, r.east, r.west);\n                }));\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      return function getVisiblePoints(_x2) {\n        return _getVisiblePoints.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"move\",\n    value: function () {\n      var _move = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(player, x, y) {\n        var queryResult;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return new _query_query_builder__WEBPACK_IMPORTED_MODULE_5__[\"default\"]().query(\"update player  \" + \"set            \" + \"x = $1,        \" + \"y = $2         \" + \"where name = $3\", [x, y, player]);\n\n              case 2:\n                queryResult = _context3.sent;\n                return _context3.abrupt(\"return\");\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      return function move(_x3, _x4, _x5) {\n        return _move.apply(this, arguments);\n      };\n    }()\n  }]);\n\n  return PlayerRepository;\n}();\n\nvar playerRepo = new PlayerRepository();\n\n//# sourceURL=webpack:///./src/app/repository/player-repository.ts?");

/***/ }),

/***/ "./src/app/repository/query/pool.ts":
/*!******************************************!*\
  !*** ./src/app/repository/query/pool.ts ***!
  \******************************************/
/*! exports provided: pool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pool\", function() { return pool; });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nvar pool = new pg__WEBPACK_IMPORTED_MODULE_0__[\"Pool\"]({\n  user: \"postgres\",\n  host: \"localhost\",\n  database: \"test_labyrinth\",\n  password: \"postgres\",\n  port: 5432\n});\n\n//# sourceURL=webpack:///./src/app/repository/query/pool.ts?");

/***/ }),

/***/ "./src/app/repository/query/query-builder.ts":
/*!***************************************************!*\
  !*** ./src/app/repository/query/query-builder.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QueryBuilder; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pool */ \"./src/app/repository/query/pool.ts\");\n/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./query */ \"./src/app/repository/query/query.ts\");\n\n\n\n\n\n\n\nvar QueryBuilder =\n/*#__PURE__*/\nfunction () {\n  function QueryBuilder() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, QueryBuilder);\n\n    this._queryArray = [];\n    this._pool = _pool__WEBPACK_IMPORTED_MODULE_4__[\"pool\"];\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(QueryBuilder, [{\n    key: \"executeInAsyncTransaction\",\n    value: function () {\n      var _executeInAsyncTransaction = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var client, responseArray, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, queryObj, response;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this._pool.connect();\n\n              case 2:\n                client = _context.sent;\n                responseArray = [];\n                _context.prev = 4;\n                _context.next = 7;\n                return client.query(\"BEGIN\");\n\n              case 7:\n                _iteratorNormalCompletion = true;\n                _didIteratorError = false;\n                _iteratorError = undefined;\n                _context.prev = 10;\n                _iterator = this._queryArray[Symbol.iterator]();\n\n              case 12:\n                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n                  _context.next = 22;\n                  break;\n                }\n\n                queryObj = _step.value;\n                _context.next = 16;\n                return client.query(queryObj.query, queryObj.values);\n\n              case 16:\n                response = _context.sent;\n                queryObj.successCallback(response);\n                responseArray.push(response);\n\n              case 19:\n                _iteratorNormalCompletion = true;\n                _context.next = 12;\n                break;\n\n              case 22:\n                _context.next = 28;\n                break;\n\n              case 24:\n                _context.prev = 24;\n                _context.t0 = _context[\"catch\"](10);\n                _didIteratorError = true;\n                _iteratorError = _context.t0;\n\n              case 28:\n                _context.prev = 28;\n                _context.prev = 29;\n\n                if (!_iteratorNormalCompletion && _iterator.return != null) {\n                  _iterator.return();\n                }\n\n              case 31:\n                _context.prev = 31;\n\n                if (!_didIteratorError) {\n                  _context.next = 34;\n                  break;\n                }\n\n                throw _iteratorError;\n\n              case 34:\n                return _context.finish(31);\n\n              case 35:\n                return _context.finish(28);\n\n              case 36:\n                _context.next = 38;\n                return client.query(\"COMMIT\");\n\n              case 38:\n                _context.next = 45;\n                break;\n\n              case 40:\n                _context.prev = 40;\n                _context.t1 = _context[\"catch\"](4);\n                _context.next = 44;\n                return client.query(\"ROLLBACK\");\n\n              case 44:\n                throw _context.t1;\n\n              case 45:\n                _context.prev = 45;\n                client.release();\n                return _context.finish(45);\n\n              case 48:\n                return _context.abrupt(\"return\", responseArray);\n\n              case 49:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[4, 40, 45, 48], [10, 24, 28, 36], [29,, 31, 35]]);\n      }));\n\n      return function executeInAsyncTransaction() {\n        return _executeInAsyncTransaction.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"addQuery\",\n    value: function addQuery(query, successCallback, values) {\n      this._queryArray.push(new _query__WEBPACK_IMPORTED_MODULE_5__[\"default\"](query, successCallback, values));\n\n      return this;\n    }\n  }, {\n    key: \"query\",\n    value: function query(queryString, values) {\n      return _pool__WEBPACK_IMPORTED_MODULE_4__[\"pool\"].query(queryString, values);\n    }\n  }, {\n    key: \"executeInTransaction\",\n    value: function executeInTransaction() {\n      var _this = this;\n\n      this._pool.connect(function (connectErr, client, done) {\n        var shouldAbort = function shouldAbort(err) {\n          if (err) {\n            console.error(\"Error in transaction\", err.stack);\n            client.query(\"ROLLBACK\", function (rollbackErr) {\n              if (rollbackErr) {\n                console.error(\"Error rolling back client\", rollbackErr.stack);\n              } // release the client back to the pool\n\n\n              done();\n            });\n          }\n\n          return !!err;\n        };\n\n        client.query(\"BEGIN\", function (beginErr) {\n          if (shouldAbort(beginErr)) {\n            return;\n          }\n\n          _this._queryArray.forEach(function (queryObj) {\n            client.query(queryObj.query, queryObj.values, function (queryErr, res) {\n              if (shouldAbort(queryErr)) {\n                return;\n              }\n\n              queryObj.successCallback(res);\n            });\n          });\n\n          client.query(\"COMMIT\", function (commitErr) {\n            if (commitErr) {\n              console.error(\"Error committing transaction\", commitErr.stack);\n            }\n\n            done();\n          });\n        });\n      });\n    }\n  }]);\n\n  return QueryBuilder;\n}();\n\n\n\n//# sourceURL=webpack:///./src/app/repository/query/query-builder.ts?");

/***/ }),

/***/ "./src/app/repository/query/query.ts":
/*!*******************************************!*\
  !*** ./src/app/repository/query/query.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Query; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Query =\n/*#__PURE__*/\nfunction () {\n  function Query(query, successCallback, values) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Query);\n\n    this._query = query;\n    this._values = values;\n    this._successCallback = successCallback;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Query, [{\n    key: \"query\",\n    get: function get() {\n      return this._query;\n    }\n  }, {\n    key: \"values\",\n    get: function get() {\n      return this._values;\n    }\n  }, {\n    key: \"successCallback\",\n    get: function get() {\n      return this._successCallback;\n    }\n  }]);\n\n  return Query;\n}();\n\n\n\n//# sourceURL=webpack:///./src/app/repository/query/query.ts?");

/***/ }),

/***/ "./src/app/service/playing-service.ts":
/*!********************************************!*\
  !*** ./src/app/service/playing-service.ts ***!
  \********************************************/
/*! exports provided: playingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playingService\", function() { return playingService; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _repository_player_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../repository/player-repository */ \"./src/app/repository/player-repository.ts\");\n/* harmony import */ var _model_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/player */ \"./src/app/model/player.ts\");\n/* harmony import */ var _enum_direction_status_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enum/direction-status-enum */ \"./src/app/enum/direction-status-enum.ts\");\n\n\n\n\n\n\n\n\nvar PlayingService =\n/*#__PURE__*/\nfunction () {\n  function PlayingService() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, PlayingService);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(PlayingService, [{\n    key: \"getPlayer\",\n    value: function () {\n      var _getPlayer = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(player) {\n        var playerPoint;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _repository_player_repository__WEBPACK_IMPORTED_MODULE_4__[\"playerRepo\"].getPlayerPoint(player);\n\n              case 2:\n                playerPoint = _context.sent;\n                return _context.abrupt(\"return\", new _model_player__WEBPACK_IMPORTED_MODULE_5__[\"default\"](player, playerPoint.x, playerPoint.y, 10));\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      return function getPlayer(_x) {\n        return _getPlayer.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"getVisiblePoints\",\n    value: function () {\n      var _getVisiblePoints = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(player) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _repository_player_repository__WEBPACK_IMPORTED_MODULE_4__[\"playerRepo\"].getVisiblePoints(player);\n\n              case 2:\n                return _context2.abrupt(\"return\", _context2.sent);\n\n              case 3:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      return function getVisiblePoints(_x2) {\n        return _getVisiblePoints.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"move\",\n    value: function () {\n      var _move = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(player, direction) {\n        var currentPoint, nextCoords;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return _repository_player_repository__WEBPACK_IMPORTED_MODULE_4__[\"playerRepo\"].getPlayerPoint(player);\n\n              case 2:\n                currentPoint = _context3.sent;\n\n                if (!(currentPoint.statusInDirection(direction) === _enum_direction_status_enum__WEBPACK_IMPORTED_MODULE_6__[\"default\"].OPEN)) {\n                  _context3.next = 12;\n                  break;\n                }\n\n                nextCoords = currentPoint.pointInDirection(direction);\n                _context3.next = 7;\n                return _repository_player_repository__WEBPACK_IMPORTED_MODULE_4__[\"playerRepo\"].move(player, nextCoords.x, nextCoords.y);\n\n              case 7:\n                _context3.next = 9;\n                return _repository_player_repository__WEBPACK_IMPORTED_MODULE_4__[\"playerRepo\"].getPlayerPoint(player);\n\n              case 9:\n                return _context3.abrupt(\"return\", _context3.sent);\n\n              case 12:\n                return _context3.abrupt(\"return\", currentPoint);\n\n              case 13:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      return function move(_x3, _x4) {\n        return _move.apply(this, arguments);\n      };\n    }()\n  }]);\n\n  return PlayingService;\n}();\n\nvar playingService = new PlayingService();\n\n//# sourceURL=webpack:///./src/app/service/playing-service.ts?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pg\");\n\n//# sourceURL=webpack:///external_%22pg%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ })

/******/ });