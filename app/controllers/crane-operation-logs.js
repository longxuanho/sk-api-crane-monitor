var express = require('express'),
  router = express.Router();

module.exports = function (app, admin) {
  app.use('/api/sts-operation-logs', router);

  router
    .post('/', function (req, res, next) {
      if (req.body && typeof(req.body) === "string") {
        admin.database().ref('sts-operation-logs').push(req.body);
        res.status(200).end();
        console.log(req.body);
      } else {
        console.log('validating data failed', newLog);
        res.status(400).send('Validating model failed');
      }
    });
};

