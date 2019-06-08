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

var _getIterator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js"));

var Papa = __webpack_require__(/*! Papaparse */ "./node_modules/Papaparse/papaparse.min.js"); // return jsonData


function readCsv(file) {
  var config = {
    headers: true
  };
  Papa.parse(file, {
    header: false,
    complete: function complete(results) {//console.log(results);
      //console.log(cleanUp(results));
      //console.log(transformer(results, 0,1));
      //console.log(JSON.stringify(transformer(results, 0,1)));

      /*
      ex = [
      {"hospital":"","procedureName":"12X40X120 PROTEGE STENT","procedureCost":"1500.00"},
      {"hospital":"","procedureName":"12X46 RELIANT STENT GRAFTCATH","procedureCost":"500.00"},
      {"hospital":"","procedureName":"12X8 AMPLATZER VASCULAR PLUG","procedureCost":"1484.00"}
      ]
      */
      //postToEndpoint(results);
    }
  });
}

function postToEndpoint(data) {
  var endpoint = 'https://pacific-lake-79223.herokuapp.com/api/push/bulk';
  var options = {
    method: 'POST',
    body: data,
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    } // leggo

  };
  fetch(endpoint, options).then(function (response) {
    // check response
    console.log(response.status);
  }).then(function (json) {
    console.log(json.json());
  }).catch(function (err) {
    console.log(err);
  });
}

function cleanUp(json, removeHeader) {
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
    procedureCost: '' // remove first line {usually a shit header }

  };
  json['data'].shift();
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = (0, _getIterator2.default)(json['data']), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var element = _step2.value;
      var record = (0, _objectSpread2.default)({}, recordTemplate);
      record['hospital'] = 'Mount Sinai Hospital';
      record['procedureName'] = element[descPos].trim();
      record['procedureCost'] = element[costPos].replace("$", "").replace(",", "").trim();
      records.push(record);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return records; //console.log(record);
}

module.exports.readCsv = readCsv;

/***/ })

})
//# sourceMappingURL=csv.js.76e744ccab21f0d64901.hot-update.js.map