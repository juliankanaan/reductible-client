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
/* harmony import */ var _contextManagers_RecordsProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contextManagers/RecordsProvider */ "./components/contextManagers/RecordsProvider.jsx");
var _jsxFileName = "/Users/juliankanaan/Documents/GitHub/clientReactInterfact/components/Records.jsx";



var data = __webpack_require__(/*! ../sampleSources/datasample.json */ "./sampleSources/datasample.json");



var Records = function Records() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contextManagers_RecordsProvider__WEBPACK_IMPORTED_MODULE_2__["RecordsProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Recent inserts"));
};

/* harmony default export */ __webpack_exports__["default"] = (Records);

/***/ }),

/***/ "./components/contextManagers/RecordsProvider.jsx":
/*!********************************************************!*\
  !*** ./components/contextManagers/RecordsProvider.jsx ***!
  \********************************************************/
/*! exports provided: RecordsContext, RecordsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsContext", function() { return RecordsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsProvider", function() { return RecordsProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/juliankanaan/Documents/GitHub/clientReactInterfact/components/contextManagers/RecordsProvider.jsx";


var data = __webpack_require__(/*! ./../../sampleSources/datasample.json */ "./sampleSources/datasample.json");

var RecordsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var RecordsProvider = function RecordsProvider(props) {
  var records = useState(data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecordsContext.Provider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.children);
};

/***/ })

})
//# sourceMappingURL=index.js.e8752e22c5ce7f6c2d04.hot-update.js.map