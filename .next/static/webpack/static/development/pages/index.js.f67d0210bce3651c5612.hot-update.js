webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Record.jsx":
/*!*******************************!*\
  !*** ./components/Record.jsx ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/juliankanaan/Documents/GitHub/clientReactInterfact/components/Record.jsx";
// individial records as pulled from Mongo


var Record = function Record(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.procedureName));
};

/***/ }),

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
var _jsxFileName = "/Users/juliankanaan/Documents/GitHub/clientReactInterfact/components/Records.jsx";



var data = __webpack_require__(/*! ../sampleSources/datasample.json */ "./sampleSources/datasample.json");

var Records = function Records() {
  var records = data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, records.map(function (record) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Record__WEBPACK_IMPORTED_MODULE_1__["default"], {
      procedureName: "record.procedureName",
      procedureCost: "record.procedureCost",
      hospital: "record.hospital",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Records);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_Records__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Records */ "./components/Records.jsx");
var _jsxFileName = "/Users/juliankanaan/Documents/GitHub/clientReactInterfact/pages/index.jsx";




var helper = __webpack_require__(/*! ../helpers/helper.js */ "./helpers/helper.js");

function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Records__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })));
}

/***/ }),

/***/ "./sampleSources/datasample.json":
/*!***************************************!*\
  !*** ./sampleSources/datasample.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"hospital":"","procedureName":"12X40X120 PROTEGE STENT","procedureCost":"1500.00"},{"hospital":"","procedureName":"12X46 RELIANT STENT GRAFTCATH","procedureCost":"500.00"},{"hospital":"","procedureName":"12X8 AMPLATZER VASCULAR PLUG","procedureCost":"1484.00"}];

/***/ })

})
//# sourceMappingURL=index.js.f67d0210bce3651c5612.hot-update.js.map