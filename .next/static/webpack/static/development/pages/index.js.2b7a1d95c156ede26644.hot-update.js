webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.2b7a1d95c156ede26644.hot-update.js.map