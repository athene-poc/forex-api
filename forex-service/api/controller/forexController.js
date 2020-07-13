'use strict';
var url = require('url');
var Forex = require('../service/forexService');

module.exports.list_all = function(req, res) {
    Forex.requestAsync().then(res.json(Forex.getLatest()));
};

module.exports.list_base = function(req, res) {
    var adr = req.protocol + '://' + req.get('host') + req.originalUrl;
    var q = url.parse(adr, true);
    var qdata = q.query;
    Forex.requestAsyncParam(qdata.base).then(res.json(Forex.getLatest()));
};