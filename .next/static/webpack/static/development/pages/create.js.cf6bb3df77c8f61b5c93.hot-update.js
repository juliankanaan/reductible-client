webpackHotUpdate("static/development/pages/create.js",{

/***/ "./helpers/helper.js":
/*!***************************!*\
  !*** ./helpers/helper.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

//require('dotenv').config();
var fetch = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js"); // maybe get thus from the ``


var restApiPath = 'https://localhost:4000/post/push';

function callAsync(_x, _x2) {
  return _callAsync.apply(this, arguments);
}

function _callAsync() {
  _callAsync = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(url, schema) {
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
            return response.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", formatter(data, schema));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _callAsync.apply(this, arguments);
}

function formatter(data, schema) {
  // separate into lines

  /*
  var lines = returnLines(data);
   for (line of lines) {
    //
    getPriceProcedurePairs(line, schema)
  }
  */
  return data;
}

function returnLines(data) {
  // body
  return data;
}

function getPriceProcedurePairs(line, schema) {
  // loop concurrently over each array. ALSO: try to catch errors (index out of range, just ignore the bad rows )
  // then join the descriptions together
  // then push into json pairs
  var jsonData = (0, _stringify.default)({
    hospital: '',
    procedureName: '',
    procedureCost: ''
  }); //console.log(jsonData);

  return postToApi(jsonData);
}

function postToApi(_x3) {
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
//# sourceMappingURL=create.js.cf6bb3df77c8f61b5c93.hot-update.js.map