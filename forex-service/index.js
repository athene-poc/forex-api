const serverless = require('serverless-http');
const express = require('express');
const app = express();
var ForexService = require('./api/service/forexService');
var url = require('url');

app.get('/api/forex', function (req, res) { 
  var adr = req.protocol + '://' + req.get('host') + req.originalUrl;
  var q = url.parse(adr, true);
  var qdata = q.query;

  if(qdata.base !== null) {
    ForexService.requestAsyncParam(qdata.base).then(res.send(ForexService.getLatest()));
  } else {
    ForexService.requestAsync().then( res.send(ForexService.getLatest()));
  }
});

module.exports.handler = serverless(app);