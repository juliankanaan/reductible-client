webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Records.jsx":
/*!********************************!*\
  !*** ./components/Records.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Record */ "./components/Record.jsx");
/* harmony import */ var _contextManagers_RecordsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contextManagers/RecordsContext */ "./components/contextManagers/RecordsContext.jsx");
var _jsxFileName = "/Users/juliankanaan/Documents/GitHub/clientReactInterfact/components/Records.jsx";



var data = __webpack_require__(/*! ../sampleSources/datasample.json */ "./sampleSources/datasample.json");



var Records = function Records() {
  var value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contextManagers_RecordsContext__WEBPACK_IMPORTED_MODULE_3__["RecordsContext"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Recent inserts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, value));
};

/* harmony default export */ __webpack_exports__["default"] = (Records);

/***/ }),

/***/ "./components/contextManagers/RecordsContext.jsx":
/*!*******************************************************!*\
  !*** ./components/contextManagers/RecordsContext.jsx ***!
  \*******************************************************/
/*! exports provided: RecordsContext, RecordsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsContext", function() { return RecordsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsProvider", function() { return RecordsProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/juliankanaan/Documents/GitHub/clientReactInterfact/components/contextManagers/RecordsContext.jsx";


var data = __webpack_require__(/*! ./../../sampleSources/datasample.json */ "./sampleSources/datasample.json");

var RecordsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var RecordsProvider = function RecordsProvider(props) {
  var records = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecordsContext.Provider, {
    value: 'hey',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.children);
};

/***/ }),

/***/ "./components/contextManagers/RecordsProvider.jsx":
false

})
//# sourceMappingURL=index.js.84c3530578c736b0e6ff.hot-update.js.map