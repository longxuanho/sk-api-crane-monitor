var express = require('express'),
  router = express.Router();

module.exports = function (app, admin) {
  app.use('/api/sts-operation-logs', router);

  router
    .get('/', function (req, res, next) {
      console.log(req.query);
      if (req.query) {
        var preparedData = {
          asset: req.query.asset,
          contNum: req.query.contNum,
          category: req.query.category,
          start: req.query.start,
          end: req.query.end
        }

        admin.database().ref('sts-operation-logs').push(preparedData);
        res.status(200).end();
      }

      else {
        console.log('validating data failed');
        res.status(400).send('Validating model failed');
      }
    });
};

