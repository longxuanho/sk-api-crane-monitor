var admin = require("firebase-admin");

module.exports = function(admin) {
    var serviceAccount = require("./serviceAccountKey.json");

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://sk-api-crane-monitor.firebaseio.com"
    });
};
