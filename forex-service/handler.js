'use strict';

var ForexController = require('./api/controller/forexController');
var Forex = require('../service/forexService');

module.exports.getLatest = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      //ForexController.list_all,
      Forex.getLatest(),
      null,
      2
    ),
  };

  //return JSON.stringify(ForexController.list_all);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
