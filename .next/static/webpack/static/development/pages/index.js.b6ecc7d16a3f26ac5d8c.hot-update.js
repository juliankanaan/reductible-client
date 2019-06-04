webpackHotUpdate("static/development/pages/index.js",{

/***/ "./helpers/helper.js":
/*!***************************!*\
  !*** ./helpers/helper.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callApi = callApi;
exports.parseData = parseData;
exports.postToRestApi = postToRestApi;

//require('dotenv').config();
var fetch = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");

var emitter = new EventEmitter();
module.exports = emitter; // create events
// we fetched a file body successfully

emitter.on('fetchedBody', function (body) {
  console.log("got body: " + body);
  parseData(body);
}); // successfully got a clean row
// successfully got an array of [hospital, procedure, cost]

emitter.on('gotRecord', function (record) {
  console.log('got record: ' + record);
  postToRestApi(record);
});

function callApi(url) {
  var data = url;
  emitter.emit('fetchedBody', data);
  /*
  fetch(url).then(data => {
    //console.log(data);
    // emit event: successfully fetched file body
    emitter.emit('fetchedBody', data);
     parseData(data);
    return true;
  })
  .catch(err => {
    console.log(err);
    //const bigData = null; // empty
    return false;
  });
  */
}

function parseData(lines) {
  var record = lines; // foreach line..

  emitter.emit('gotRecord', record);
}

function postToRestApi(arr) {
  console.log('..sending data' + arr);
}

/***/ })

})
//# sourceMappingURL=index.js.b6ecc7d16a3f26ac5d8c.hot-update.js.map