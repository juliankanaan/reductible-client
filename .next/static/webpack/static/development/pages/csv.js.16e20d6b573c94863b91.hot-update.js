webpackHotUpdate("static/development/pages/csv.js",{

/***/ "./helpers/CsvHelper.js":
/*!******************************!*\
  !*** ./helpers/CsvHelper.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js"));

var Papa = __webpack_require__(/*! Papaparse */ "./node_modules/Papaparse/papaparse.min.js"); // return jsonData


function readCsv(file) {
  var config = {
    headers: true
  };
  Papa.parse(file, config, function (result) {
    console.log(result);
  });
} // parse source, return array of clean records


function transformer(json, descAlias, costAlias) {
  // alias = file column names for procedureName, etc
  var recordTemplate = {
    hospital: '',
    procedureName: '',
    procedureCost: ''
  };
  var record = (0, _objectSpread2.default)({}, recordTemplate); // clone
  // look through source column names, get relevant data for us

  for (var prop in json) {
    console.log("".concat(prop, ": ").concat(json[prop])); // "DataType: value"

    if (prop == descAlias) {
      record["procedureName"] = json[prop];
    } else if (prop == costAlias) {
      record["procedureCost"] = json[prop];
    }
  } //console.log(record);

}

module.exports.readCsv = readCsv;

/***/ })

})
//# sourceMappingURL=csv.js.16e20d6b573c94863b91.hot-update.js.map