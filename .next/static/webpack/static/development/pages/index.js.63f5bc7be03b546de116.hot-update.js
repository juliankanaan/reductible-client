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
/* harmony import */ var _contextManagers_RecordsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contextManagers/RecordsContext */ "./components/contextManagers/RecordsContext.jsx");
var _jsxFileName = "/Users/juliankanaan/Documents/GitHub/clientReactInterfact/components/Records.jsx";


 //data = require('../sampleSources/datasample.json')

var data = fetch("http://localhost:4000/api/records/lookup?procedureDescription=xray&limit=50&hospital=Mount+Sinai");

var Records = function Records() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Recent inserts"), data.map(function (record) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, record.procedureName);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Records);

/***/ })

})
//# sourceMappingURL=index.js.63f5bc7be03b546de116.hot-update.js.map