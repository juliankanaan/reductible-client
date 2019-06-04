//require('dotenv').config();
const fetch = require('isomorphic-fetch');
const EventEmitter = require("events");

const emitter = new EventEmitter();

module.exports = emitter;

// create events
// we fetched a file body successfully
emitter.on('fetchedBody', (body) => {
  console.log("got body: " +body);
  parseData(body);
});
// successfully got a clean row

// successfully got an array of [hospital, procedure, cost]
emitter.on('gotRecord', (record) => {
  console.log('got record: ' + record);
  postToRestApi(record);
})


export  function callApi(url) {
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

export  function parseData(lines) {
  var record = lines;
  // foreach line..
  emitter.emit('gotRecord', record);
}
export  function postToRestApi(arr){
  console.log('..sending data' + arr);
}
