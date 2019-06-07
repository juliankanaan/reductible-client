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
      console.log(transformer(results, 0,1));
    }
  });

}
function cleanUp(json, removeHeader) {
  // remove first line if needed

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
  for (var element of json['data']) {

    var record = {...recordTemplate};
    record['procedureName'] = element[descPos].trim();
    record['procedureCost'] = element[costPos].replace("$", "").replace(",", "").trim();
    records.push(record);

  }

  return records;
  //console.log(record);

}
module.exports.readCsv = readCsv;
