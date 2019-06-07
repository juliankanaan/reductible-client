webpackHotUpdate("static/development/pages/csv.js",{

/***/ "./helpers/CsvHelper.js":
/*!******************************!*\
  !*** ./helpers/CsvHelper.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _getIterator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js"));

var Papa = __webpack_require__(/*! Papaparse */ "./node_modules/Papaparse/papaparse.min.js"); // return jsonData


function readCsv(file) {
  var config = {
    headers: true
  };
  Papa.parse(file, {
    header: false,
    complete: function complete(results) {
      //console.log(results);
      //console.log(cleanUp(results));
      console.log(transformer(results, 0, 1));
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
      var el = _step.value;
      el.map(function (x) {
        if (x.length > 0) {
          return x;
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


function transformer(json, descPos, costPos) {
  // alias = file column names for procedureName, etc
  var records = [];
  var recordTemplate = {
    hospital: '',
    procedureName: '',
    procedureCost: ''
  };

  for (var element in json) {
    /*
    var record = {...recordTemplate};
    record['procedureName'] = element[descPos].trim();
    record['procedureCost'] = element[costPos].replace("$", "").trim();
    records.push(record);
    */
    console.log(element);
  }

  return json; //console.log(record);
}

module.exports.readCsv = readCsv;

/***/ })

})
//# sourceMappingURL=csv.js.4b9c2b29a53d62173292.hot-update.js.map