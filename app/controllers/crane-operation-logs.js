var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/api/crane-operation-logs', router);
};

router
  .post('/', function (req, res, next) {
    let newLog = req.body || {}
    
    if (validateNewLog(newLog)) {
      console.log('exec firebase...');
      res.status(200).end();
    } else {
      console.log('validating data failed', newLog);
      res.status(400).send('Validating model failed');
    }
  });

function validateNewLog(logObj) {
  return !!logObj && logObj.site && logObj.soCont && logObj.thaoTac;
}