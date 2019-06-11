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
  var data = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contextManagers_RecordsProvider__WEBPACK_IMPORTED_MODULE_2__["RecordsContext"]);
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
  }, "Recent inserts"), data.map(function (records) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Record__WEBPACK_IMPORTED_MODULE_1__["default"], {
      procedureName: data.procedureName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Records);

/***/ })

})
//# sourceMappingURL=index.js.68c2a7c5de667080d2f8.hot-update.js.map