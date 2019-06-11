webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/juliankanaan/Documents/GitHub/clientReactInterfact/components/contextManagers/RecordsContext.jsx";


var data = __webpack_require__(/*! ./../../sampleSources/datasample.json */ "./sampleSources/datasample.json");

var RecordsContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
var RecordsProvider = function RecordsProvider(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("hey"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 1),
      records = _useState2[0];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RecordsContext.Provider, {
    value: records,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.children);
};

/***/ })

})
//# sourceMappingURL=index.js.3e901757cd549da012f9.hot-update.js.map