// accept URL, a schema
/*
Overall thoughts:
1. validate fields
2. check for errors
3. Re-render form w/ errors or make POST to REST endpoints
*/
const fetch = require('isomorphic-fetch');

export default function processFormRequest(url, schema){

  // 2: make fetch request
  /*
  fetch(url).then(data => {
    console.log(data);
    const bigData = data;
  })
  .catch(err => {
    console.log(err);
    //const bigData = null; // empty
  });
  */
  // 3: reformat existing data into clean objects

  // 3.5 create Price model objects via mongoose

  // 4: batch insert all the objects
  // var cleanData = [Arr1, Arr2  ...]
  /* https://mongoosejs.com/docs/api.html#model_Model.insertMany
  ThesePrices.insertMany(cleanData)
    .then(docs => {
      // do something w/ docs
    })
    .catch(err =>){
    // throw error
  } // end DB save();
  */
  console.log("urlFormHelper");
} // usage:
