'use strict';
var http = require("https");
const { json } = require("express");

var forexJSON = {
                    "rates":
                    {
                        "CAD":1.5338,
                        "HKD":8.7468,
                        "ISK":157.4,
                        "PHP":55.898,
                        "DKK":7.4493,
                        "HUF":355.49,
                        "CZK":26.748,
                        "AUD":1.6242,
                        "RON":4.8408,
                        "SEK":10.431,
                        "IDR":16268,
                        "INR":84.6455,
                        "BRL":6.0439,
                        "RUB":80.4584,
                        "HRK":7.5385,
                        "JPY":121.39,
                        "THB":35.252,
                        "CHF":1.0624,
                        "SGD":1.5745,
                        "PLN":4.4765,
                        "BGN":1.9558,
                        "TRY":7.7478,
                        "CNY":7.9163,
                        "NOK":10.6885,
                        "NZD":1.7237,
                        "ZAR":19.1628,
                        "USD":1.1286,
                        "MXN":25.6433,
                        "ILS":3.8949,
                        "GBP":0.89923,
                        "KRW":1348.86,
                        "MYR":4.8219
                    },
                    "base":"EUR",
                    "date":"2020-07-07"
                };

module.exports.requestAsync = async function() {
    return new Promise((resolve, reject) => {
        var options = {
            "method": "GET",
            "hostname": "api.exchangeratesapi.io",
            "port": null,
            "path": "/latest",
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            }
        };
        
        var req = http.request(options, function (res) {
            var chunks = [];
    
            res.on("data", function (chunk) {
                chunks.push(chunk);
            });
    
            res.on("end", function () {
                var body = Buffer.concat(chunks);
                forexJSON = JSON.parse(body);
                console.log(forexJSON);
                json(forexJSON);
            });
    
        });
        req.end();
    });
}

exports.requestAsyncParam = async function(CURRENCY) {
    return new Promise((resolve, reject) => {
        var options = {
            "method": "GET",
            "hostname": "api.exchangeratesapi.io",
            "port": null,
            "path": "/latest?base=" + CURRENCY,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            }
        };
        
        var req = http.request(options, function (res) {
            var chunks = [];
    
            res.on("data", function (chunk) {
                chunks.push(chunk);
            });
    
            res.on("end", function () {
                var body = Buffer.concat(chunks);
                forexJSON = {};
                forexJSON = JSON.parse(body);
                console.log(body.toString());
                json(forexJSON);
            });
    
        });
        req.end();
    });
}

exports.getLatest = function() {
    return forexJSON;
};