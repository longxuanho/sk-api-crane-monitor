var express = require('express'),
  router = express.Router();

module.exports = function (app, admin) {
  app.use('/api/sts-operation-logs', router);

  router
    .get('/', function (req, res, next) {
      console.log(req.query);
      if (req.query.message && typeof(req.query.message) === "string") {
        admin.database().ref('sts-operation-logs').push(req.query.message);
        res.status(200).end();
      }
      else {
        console.log('validating data failed');
        res.status(400).send('Validating model failed');
      }
    })
    .post('/', function (req, res, next) {
      if (req.body && typeof(req.body) === "string") {
        admin.database().ref('sts-operation-logs').push(req.body);
        res.status(200).end();
        console.log(req.body);
      } else {
        console.log('validating data failed');
        res.status(400).send('Validating model failed');
      }
    });
};

