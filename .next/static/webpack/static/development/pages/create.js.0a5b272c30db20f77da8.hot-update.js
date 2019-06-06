webpackHotUpdate("static/development/pages/create.js",{

/***/ "./components/UrlForm.jsx":
/*!********************************!*\
  !*** ./components/UrlForm.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UrlForm; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_helper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/helper.js */ "./helpers/helper.js");
/* harmony import */ var _helpers_helper_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_helpers_helper_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Preview */ "./components/Preview.jsx");
/* harmony import */ var _components_Result__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Result */ "./components/Result.jsx");







var _jsxFileName = "/Users/juliankanaan/Documents/GitHub/clientReactInterfact/components/UrlForm.jsx";





var UrlForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(UrlForm, _React$Component);

  function UrlForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UrlForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(UrlForm).call(this, props));
    _this.state = {
      url: '',
      priceColumn: '',
      result: '',
      hospital: '',
      descStart: '',
      descEnd: ''
    }; // bind "this"

    _this.handleUrlChange = _this.handleUrlChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handlepriceColumnChange = _this.handlepriceColumnChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleHospitalChange = _this.handleHospitalChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleDescStartChange = _this.handleDescStartChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleDescEndChange = _this.handleDescEndChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(UrlForm, [{
    key: "handleUrlChange",
    value: function handleUrlChange(event) {
      this.setState({
        url: event.target.value
      });
    }
  }, {
    key: "handlepriceColumnChange",
    value: function handlepriceColumnChange(event) {
      this.setState({
        priceColumn: event.target.value
      });
    }
  }, {
    key: "handleHospitalChange",
    value: function handleHospitalChange(event) {
      this.setState({
        hospital: event.target.value
      });
    }
  }, {
    key: "handleDescStartChange",
    value: function handleDescStartChange(event) {
      this.setState({
        descStart: event.target.value
      });
    }
  }, {
    key: "handleDescEndChange",
    value: function handleDescEndChange(event) {
      this.setState({
        descEnd: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault(); //alert('A name was submitted: ' + this.state.url + " " + this.state.priceColumn);

      var res = _helpers_helper_js__WEBPACK_IMPORTED_MODULE_8___default.a.callAsync(this.state.url, this.state.priceColumn).then(function (data) {
        console.log(data);

        _this2.setState({
          result: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
        });
      });
    } // submit

  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "url",
        value: this.state.url,
        onChange: this.handleUrlChange,
        placeholder: "URL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "hospital",
        value: this.state.hospital,
        onChange: this.handleHospitalChange,
        placeholder: "Hospital name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "descStart",
        value: this.state.descStart,
        onChange: this.handleDescStartChange,
        placeholder: "DescStart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "descEnd",
        value: this.state.descEnd,
        onChange: this.handleDescEndChange,
        placeholder: "DescEnd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control",
        name: "priceColumn",
        value: this.state.priceColumn,
        onChange: this.handlepriceColumnChange,
        placeholder: "Price position?",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Submit")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Preview__WEBPACK_IMPORTED_MODULE_9__["default"], {
        json: this.state.priceColumn,
        url: this.state.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Result__WEBPACK_IMPORTED_MODULE_10__["default"], {
        text: this.state.result,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }));
    }
  }]);

  return UrlForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=create.js.0a5b272c30db20f77da8.hot-update.js.map