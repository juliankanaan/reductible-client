webpackHotUpdate("static/development/pages/index.js",{

/***/ "./helpers/helper.js":
/*!***************************!*\
  !*** ./helpers/helper.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _getIterator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

//require('dotenv').config();
var fetch = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js"); // maybe get thus from the ``


var restApiPath = 'https://localhost:4000/post/push';

function callAsync(_x, _x2, _x3, _x4) {
  return _callAsync.apply(this, arguments);
}

function _callAsync() {
  _callAsync = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(url, descStart, descEnd, priceColumn) {
    var response, data;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url);

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.text();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", transformer(data, descStart, descEnd, priceColumn));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _callAsync.apply(this, arguments);
}

function transformer(data, descStart, descEnd, priceColumn) {
  var readyVals = []; // separate into lines

  var lines = returnLines(data); // JSON populate

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(lines), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var line = _step.value;
      var jsonReady = groupDataReturnRecord(line, descStart, descEnd, priceColumn); //readyVals.push(jsonReady);

      console.log(jsonReady);
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

  return readyVals;
}

function returnLines(data) {
  // works: 2:40pm
  var lines = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = (0, _getIterator2.default)(data.split('\n')), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var line = _step2.value;
      lines.push(line.replace(/\s+/g, ' ')); // trimmed extra spaces
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

  return lines;
}

function groupDataReturnRecord(line, descStart, descEnd, priceColumn) {
  // create arr
  var arr = line.split(" ");
  var record = {
    hospital: '',
    procedureName: '',
    procedureCost: ''
  };
  var description = []; // positions: descStart -> descEnd

  var cost = arr[priceColumn]; // probably -2 position
  // convert relative negative pos for descEnd to positive for this array

  var positiveEnd = arr.indexOf(arr[descEnd]); // remap

  description.map(function (word, pos) {
    if (pos >= descStart && pos <= positiveEnd) {
      return word;
    }
  });
  record['procedureName'] = description.join(" ");
  record['procedureCost'] = cost;
  console.log(cost);
  return record;
}

function postToApi(_x5) {
  return _postToApi.apply(this, arguments);
}

function _postToApi() {
  _postToApi = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(data) {
    var post, request;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(restApiPath, {
              method: 'POST',
              body: (0, _stringify.default)({
                hospital: data.hospital,
                procedureName: data.procedureName,
                procedureCost: data.procedureCost
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 2:
            post = _context2.sent;
            _context2.next = 5;
            return response.json();

          case 5:
            request = _context2.sent;
            console.log(request);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _postToApi.apply(this, arguments);
}

module.exports.callAsync = callAsync;

/***/ })

})
//# sourceMappingURL=index.js.2bf3ed486374a3f6bb43.hot-update.js.map