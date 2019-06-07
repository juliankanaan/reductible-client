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

var _values = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js"));

var _getIterator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js"));

var Papa = __webpack_require__(/*! Papaparse */ "./node_modules/Papaparse/papaparse.min.js"); // return jsonData


function readCsv(file) {
  var config = {
    headers: true
  };
  Papa.parse(file, {
    header: false,
    complete: function complete(results) {
      console.log(results); //look(results )
    }
  });
}

function cleanUp(json, removeHeader) {
  // remove first line if needed
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(json), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      element = _step.value;
      // remove empty elements of arrays 
      (0, _values.default)(element).map(function (el) {
        if (el.length > 0) {
          return el;
        }
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return json;
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
//# sourceMappingURL=csv.js.8a1abb8d3158150a4659.hot-update.js.map