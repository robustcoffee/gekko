const RequestClient = require("reqclient").RequestClient;
const requestClient = new RequestClient("http://baseurl.com/api/");


const granMap = {"min":"histominute"};
const rootUri = "https://min-api.cryptocompare.com/data/histominute";

class MarketDataService {
    
    constructor(gran) {
        this.gran = granMap[gran];
        console.log("constructor");
    }
    
    getHistoricalPrice(provider, fromCurrecy, toCurrency, fromDate, toDate) {
        console.log("getting price");
        let uri = rootUri;
        let toTs = 1520370000; // TODO calculate from fromDate and toDate
        
        requestClient.get({
            "uri": rootUri,
            "encodeQuery" : true,
            "query": {
                "fsym":fromCurrecy,
                "tsym":toCurrency,
                "toTs":toTs,
                "limit":60,
                "aggregate":3,
                "e":provider
            }
        }).then(function(response) { //https://www.npmjs.com/package/http-response-object
            console.log(response);
            return response
        }).catch(function(err) {
            console.log(err);
        });
    }
    
    getCurrentyPrice(provider, fromCurrency, toCurrency) {
        
    }
}

console.log("start");
var mdService = new MarketDataService("min");
mdService.getHistoricalPrice("CCCAGG", "BTC", "USD", "1", "1");








