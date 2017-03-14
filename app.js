

var express = require('express'),
    admin = require("firebase-admin"),
    config = require('./config/config');

var app = express();

require('./config/firebase')(admin);

module.exports = require('./config/express')(app, config, admin);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

