//require('dotenv').config();
const fetch = require('isomorphic-fetch');
// maybe get thus from the ``
const restApiPath = 'https://localhost:4000/post/push';


async function callAsync(url, schema) {
    const response = await fetch(url);
    const data = await response.json();
    return formatter(data, schema);
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
  var jsonData = JSON.stringify({
    hospital: '',
    procedureName: '',
    procedureCost: ''
  });
  //console.log(jsonData);
  return postToApi(jsonData);
}
async function postToApi(data){
  // push a single data point to DB
  // NOTE: maybe use bulk insert?
  const post = await fetch(restApiPath,{
    method: 'POST',
    body: JSON.stringify({
      hospital: data.hospital,
      procedureName: data.procedureName,
      procedureCost: data.procedureCost
    }),
    headers: {'Content-Type': 'application/json'}
  });
  const request = await response.json();
  console.log(request);
}
module.exports.callAsync = callAsync;
