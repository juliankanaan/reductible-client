const Papa = require('Papaparse');


// return jsonData
function readCsv(file){
  const config = {
    headers: true
  }
  Papa.parse(file, {
    header: false,
    complete: (results) => {
      //console.log(results);
      //console.log(cleanUp(results));
      //console.log(transformer(results, 0,1));
      console.log(JSON.stringify(transformer(results, 0,1)));
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
  const endpoint = 'https://pacific-lake-79223.herokuapp.com/api/push/bulk'
  const options = {
    method: 'POST',
    body: data,
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  }
  // leggo
  fetch(endpoint, options)
    .then(response => { // check response
      console.log(response.status)
    })
    .then(json => {
      console.log(json.json());
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
function transformer(json, descPos, costPos){ // alias = file column names for procedureName, etc
  const records = [];
  const recordTemplate = {
    hospital: '',
    procedureName: '',
    procedureCost: ''
  }
  // remove first line {usually a shit header }
  json['data'].shift();
  for (var element of json['data']) {

    var record = {...recordTemplate};
    record['hospital'] = 'Mount Sinai Hospital';
    record['procedureName'] = element[descPos].trim();
    record['procedureCost'] = element[costPos].replace("$", "").replace(",", "").trim();
    records.push(record);

  }

  return records;
  //console.log(record);

}
module.exports.readCsv = readCsv;
