const Papa = require('Papaparse');

const thisHospital = "MD ANDERSON CANCER CENTER";
// return jsonData
function readCsv(file) {
  const config = {
    headers: true
  }
  Papa.parse(file, {
    header: false,
    encoding: "utf-8",
    complete: (results) => {
      //console.log(results);
      //console.log(transformer(results, 0, 1));

      postToEndpoint(JSON.stringify(transformer(results, 0, 1)));
    }
  });

}

function postToEndpoint(data) {
  const endpoint = 'http://localhost:4000/api/push/bulk'
  const options = {
    method: 'POST',
    body: data,
    headers: {
      "Content-Type": "application/json"
    }
  }
  // leggo
  fetch(endpoint, options)
    .then(response => { // check response
      if (response.status == '200') {
        console.log("yeet. sent and inserted");
      }
    })
    .catch(err => {
      console.log(err);
    });

}

function cleanUp(json, removeHeader) {

  for (var el of json) {
    el.map((x) => {
      if (x.length > 0) {
        return x;
      }
    });
  }
  return json;
}

// parse source, return array of clean records
function transformer(json, descPos, costPos) { // alias = file column names for procedureName, etc
  const records = [];
  const recordTemplate = {
    hospital: '',
    procedureName: '',
    procedureCost: ''
  }
  // remove first line {usually a shit header }
  json['data'].shift();
  for (var element of json['data']) {
    // ignore element of weird size [out of index bounds ]
    if (element.length > costPos) {
      var record = {
        ...recordTemplate
      };
      record['hospital'] = thisHospital;
      record['procedureName'] = element[descPos].trim();
      record['procedureCost'] = element[costPos].replace(",", "").replace("$", "").trim();
      records.push(record);
    }
  }

  return records;
  //console.log(record);

}
module.exports.readCsv = readCsv;
