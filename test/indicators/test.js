
// const $ = require("jquery");

class Test {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        console.log("constructor");
    }
}
var RequestClient = require("reqclient").RequestClient;
var test = new Test("key", "val");
 
var client = new RequestClient("http://baseurl.com/api/");


client.get("reports/clients")
  .then(function(response) {
    console.log(response);  // REST responses are parsed as JSON objects 
  })
  .catch(function(err) {
    console.error(err);
  });

