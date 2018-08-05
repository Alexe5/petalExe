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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _sayHello = __webpack_require__(/*! ./lib/sayHello.js */ \"./lib/sayHello.js\");\n\nvar _sayHello2 = _interopRequireDefault(_sayHello);\n\nvar _canvas = __webpack_require__(/*! ./lib/canvas.js */ \"./lib/canvas.js\");\n\nvar _canvas2 = _interopRequireDefault(_canvas);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _sayHello2.default)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYXlIZWxsbyBmcm9tICcuL2xpYi9zYXlIZWxsby5qcyc7XG5pbXBvcnQgY2FudmFzIGZyb20gJy4vbGliL2NhbnZhcy5qcyc7XG5zYXlIZWxsbygpO1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./lib/canvas.js":
/*!***********************!*\
  !*** ./lib/canvas.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d');\n\nvar dots = 1000;\n\n// var radius = 100;\n\nvar centerX = 500;\nvar centerY = 250;\nvar varRadius, x, y, teta, numPetal, lengthPetal, time, radius;\n\n// ctx.fillStyle = 'yellow';\n// ctx.fillRect(400,0,200,5);\n// ctx.fillRect(995,150,5,200);\n// ctx.fillRect(400,495,200,5);\n// ctx.fillRect(0,150,5,200);\n\nnumPetal = prompt('Введи количество лепестков или просто нажми OK', 15);\nlengthPetal = prompt('Введи длину лепестков или просто нажми OK', 55);\n\n// ctx.beginPath();\n// for (var i = 0; i <= dots; i++) {\n//   teta = i*2*Math.PI/dots;\n//   VarRadius = radius + 55*Math.sin(teta*15);\n//   x = centerX + VarRadius*Math.cos(teta);\n//   y = centerY + VarRadius*Math.sin(teta);\n\n//   // ctx.fillRect(x,y,2,2);\n\n//   if(i===0) {ctx.moveTo(x,y);}\n//   else{\n//     ctx.lineTo(x,y);\n//   }\n// }\n// ctx.closePath();\n// ctx.stroke();\n// ctx.fill();\n\nvar drawCircle = function drawCircle(radius, color, offset) {\n  ctx.fillStyle = color;\n  ctx.beginPath();\n  for (var i = 0; i <= dots; i++) {\n    teta = i * 2 * Math.PI / dots;\n    varRadius = radius + lengthPetal * Math.sin(teta * numPetal + offset);\n    x = centerX + varRadius * Math.cos(teta);\n    y = centerY + varRadius * Math.sin(teta);\n\n    // ctx.fillRect(x,y,2,2);\n\n    if (i === 0) {\n      ctx.moveTo(x, y);\n    } else {\n      ctx.lineTo(x, y);\n    }\n  }\n  ctx.closePath();\n  ctx.stroke();\n  // ctx.fill();\n};\n\ntime = 0;\nvar draw = function draw() {\n  time++;\n  ctx.clearRect(0, 0, 1000, 500);\n  for (var i = 0; i < 3; i++) {\n    drawCircle(100 - i * 25, 'green', (i + 1) * time / 10);\n  }\n};\n\nvar render = function render() {\n  draw();\n  window.requestAnimationFrame(render);\n};\nrender();\n\n// drawCircle(100,'green',10);\n// drawCircle(75,'red',20);\n// drawCircle(50,'blue',30);\n\n\nmodule.exports = canvas;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2FudmFzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9saWIvY2FudmFzLmpzPzdlOTEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxudmFyIGRvdHMgPSAxMDAwO1xuXG4vLyB2YXIgcmFkaXVzID0gMTAwO1xuXG52YXIgY2VudGVyWCA9IDUwMDtcbnZhciBjZW50ZXJZID0gMjUwO1xudmFyIHZhclJhZGl1cyx4LHksdGV0YSxudW1QZXRhbCxsZW5ndGhQZXRhbCx0aW1lLHJhZGl1cztcblxuLy8gY3R4LmZpbGxTdHlsZSA9ICd5ZWxsb3cnO1xuLy8gY3R4LmZpbGxSZWN0KDQwMCwwLDIwMCw1KTtcbi8vIGN0eC5maWxsUmVjdCg5OTUsMTUwLDUsMjAwKTtcbi8vIGN0eC5maWxsUmVjdCg0MDAsNDk1LDIwMCw1KTtcbi8vIGN0eC5maWxsUmVjdCgwLDE1MCw1LDIwMCk7XG5cbm51bVBldGFsID0gcHJvbXB0KCfQktCy0LXQtNC4INC60L7Qu9C40YfQtdGB0YLQstC+INC70LXQv9C10YHRgtC60L7QsiDQuNC70Lgg0L/RgNC+0YHRgtC+INC90LDQttC80LggT0snLDE1KTtcbmxlbmd0aFBldGFsID0gcHJvbXB0KCfQktCy0LXQtNC4INC00LvQuNC90YMg0LvQtdC/0LXRgdGC0LrQvtCyINC40LvQuCDQv9GA0L7RgdGC0L4g0L3QsNC20LzQuCBPSycsNTUpO1xuXG4vLyBjdHguYmVnaW5QYXRoKCk7XG4vLyBmb3IgKHZhciBpID0gMDsgaSA8PSBkb3RzOyBpKyspIHtcbi8vICAgdGV0YSA9IGkqMipNYXRoLlBJL2RvdHM7XG4vLyAgIFZhclJhZGl1cyA9IHJhZGl1cyArIDU1Kk1hdGguc2luKHRldGEqMTUpO1xuLy8gICB4ID0gY2VudGVyWCArIFZhclJhZGl1cypNYXRoLmNvcyh0ZXRhKTtcbi8vICAgeSA9IGNlbnRlclkgKyBWYXJSYWRpdXMqTWF0aC5zaW4odGV0YSk7XG5cdFxuLy8gICAvLyBjdHguZmlsbFJlY3QoeCx5LDIsMik7XG5cbi8vICAgaWYoaT09PTApIHtjdHgubW92ZVRvKHgseSk7fVxuLy8gICBlbHNle1xuLy8gICAgIGN0eC5saW5lVG8oeCx5KTtcbi8vICAgfVxuLy8gfVxuLy8gY3R4LmNsb3NlUGF0aCgpO1xuLy8gY3R4LnN0cm9rZSgpO1xuLy8gY3R4LmZpbGwoKTtcblxudmFyIGRyYXdDaXJjbGUgPSBmdW5jdGlvbihyYWRpdXMsY29sb3Isb2Zmc2V0KSB7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8PSBkb3RzOyBpKyspIHtcbiAgICB0ZXRhID0gaSoyKk1hdGguUEkvZG90cztcbiAgICB2YXJSYWRpdXMgPSByYWRpdXMgKyBsZW5ndGhQZXRhbCpNYXRoLnNpbih0ZXRhKm51bVBldGFsICsgb2Zmc2V0KTtcbiAgICB4ID0gY2VudGVyWCArIHZhclJhZGl1cypNYXRoLmNvcyh0ZXRhKTtcbiAgICB5ID0gY2VudGVyWSArIHZhclJhZGl1cypNYXRoLnNpbih0ZXRhKTtcblx0XG4gICAgLy8gY3R4LmZpbGxSZWN0KHgseSwyLDIpO1xuXG4gICAgaWYoaT09PTApIHtjdHgubW92ZVRvKHgseSk7fVxuICAgIGVsc2V7XG4gICAgICBjdHgubGluZVRvKHgseSk7XG4gICAgfVxuICB9XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LnN0cm9rZSgpO1xuICAvLyBjdHguZmlsbCgpO1xufTtcblxudGltZSA9IDA7XG52YXIgZHJhdyA9IGZ1bmN0aW9uKCkge1xuICB0aW1lKys7XG4gIGN0eC5jbGVhclJlY3QoMCwwLDEwMDAsNTAwKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgXHRkcmF3Q2lyY2xlKFxuICBcdFx0MTAwLWkqMjUsXG4gIFx0XHQnZ3JlZW4nLFxuICBcdFx0KGkrMSkqdGltZS8xMFxuICBcdCk7XG4gIH1cbn07XG5cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgZHJhdygpO1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG59O1xucmVuZGVyKCk7XG5cbi8vIGRyYXdDaXJjbGUoMTAwLCdncmVlbicsMTApO1xuLy8gZHJhd0NpcmNsZSg3NSwncmVkJywyMCk7XG4vLyBkcmF3Q2lyY2xlKDUwLCdibHVlJywzMCk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbnZhcztcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/canvas.js\n");

/***/ }),

/***/ "./lib/sayHello.js":
/*!*************************!*\
  !*** ./lib/sayHello.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction sayHello() {\n  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {\n    var args = ['\\n %c Made with ❤️ by Rivercode %c http://www.riverco.de/ %c %c 🐳 \\n\\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];\n    window.console.log.apply(console, args);\n  } else if (window.console) {\n    window.console.log('Made with love ❤️ Riverco.de - http://www.riverco.de/  ❤️');\n  }\n}\nmodule.exports = sayHello;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2F5SGVsbG8uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2xpYi9zYXlIZWxsby5qcz8xNTc1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNheUhlbGxvKCkge1xuICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Nocm9tZScpID4gLTEpIHtcbiAgICB2YXIgYXJncyA9IFsnXFxuICVjIE1hZGUgd2l0aCDinaTvuI8gYnkgUml2ZXJjb2RlICVjIGh0dHA6Ly93d3cucml2ZXJjby5kZS8gJWMgJWMg8J+QsyBcXG5cXG4nLCAnYm9yZGVyOiAxcHggc29saWQgIzAwMDtjb2xvcjogIzAwMDsgYmFja2dyb3VuZDogI2ZmZjAwMTsgcGFkZGluZzo1cHggMDsnLCAnY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMxYzFjMWM7IHBhZGRpbmc6NXB4IDA7Ym9yZGVyOiAxcHggc29saWQgIzAwMDsnLCAnYmFja2dyb3VuZDogI2ZmZjsgcGFkZGluZzo1cHggMDsnLCAnY29sb3I6ICNiMDk3NmQ7IGJhY2tncm91bmQ6ICNmZmY7IHBhZGRpbmc6NXB4IDA7J107XG4gICAgd2luZG93LmNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5jb25zb2xlKSB7XG4gICAgd2luZG93LmNvbnNvbGUubG9nKCdNYWRlIHdpdGggbG92ZSDinaTvuI8gUml2ZXJjby5kZSAtIGh0dHA6Ly93d3cucml2ZXJjby5kZS8gIOKdpO+4jycpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNheUhlbGxvO1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/sayHello.js\n");

/***/ })

/******/ });