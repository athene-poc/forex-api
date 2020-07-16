const serverless = require('serverless-http');
const express = require('express');
const app = express();
var ForexService = require('./api/service/forexService');
var url = require('url');

app.get('/api/forex', async function (req, res) { 
  var adr = req.protocol + '://' + req.get('host') + req.originalUrl;
  var q = url.parse(adr, true);
  var qdata = q.query;

  if(qdata.base !== undefined) {
    var forexJSON = await ForexService.requestAsyncParam(qdata.base);
    res.send(forexJSON);
  } else {
    var forexJSON = await ForexService.requestAsync(); 
    res.send(forexJSON);
  }
});

module.exports.handler = serverless(app);