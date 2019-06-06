//require('dotenv').config();
const fetch = require('isomorphic-fetch');

const restApiPath = 'https://localhost:4000/api/post/bulk';


async function callAsync(url, descStart, descEnd, priceColumn, hospital) {
  const response = await fetch(url);
  const data = await response.text();
  const formattedData = transformer(data, descStart, descEnd, priceColumn, hospital);
  console.log(formattedData);
  return formattedData;

  // return postToApi(formattedData);

}

function givePreview(data) {
  const preview = [];
  console.log(data[0]);
  // pick out three random elements of JSON array
  var rand1 = Math.random() * data.length;
  var rand2 = Math.random() * data.length;
  var rand3 = Math.random() * data.length;
  preview.push(data[rand1], data[rand2], data[rand3]);
  return preview;

}

function transformer(data, descStart, descEnd, priceColumn, hospital) {
  var readyVals = [];
  // separate into lines
  const lines = returnLines(data);
  // JSON populate
  for (var line of lines) {
    var jsonReady = groupDataReturnRecord(line, descStart, descEnd, priceColumn);
    jsonReady['hospital'] = hospital;
    readyVals.push(jsonReady);
    //console.log(jsonReady);
  }
  return readyVals;
}

function returnLines(data) { // works: 2:40pm
  var lines = [];
  for (var line of data.split('\n')) {
    lines.push(line.replace(/\s+/g, ' ')); // trimmed extra spaces

  }
  lines.pop(); // there's always an empty element created at end, remove it
  return lines;
}

function groupDataReturnRecord(line, descStart, descEnd, priceColumn) {
  // create arr
  var arr = line.split(" ");
  arr.pop(); // there's always an empty element created at end, remove it

  const record = {
    hospital: '',
    procedureName: '',
    procedureCost: ''
  }

  const cost = arr[arr.length + parseInt(priceColumn)]; // probably -2 position
  // convert relative negative pos for descEnd to positive for this array
  const positiveEnd = arr.indexOf(arr[arr.length + parseInt(descEnd)]);
  // remap
  var description = arr.map((word, pos) => {
    if (pos >= parseInt(descStart) && pos <= positiveEnd) {
      return word;
    }
  });

  record['procedureName'] = description.join(" ").trim();
  record['procedureCost'] = cost;
  //console.log(cost);
  return record;
}
async function postToApi(data) {
  // push a single data point to DB
  // NOTE: maybe use bulk insert?
  const post = await fetch(restApiPath, {
    method: 'POST',
    body: JSON.stringify({
      hospital: data.hospital,
      procedureName: data.procedureName,
      procedureCost: data.procedureCost
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const request = await response.json();
  console.log(request);
}
module.exports.callAsync = callAsync;
