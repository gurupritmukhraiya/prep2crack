var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var router = express.Router();

var url = "mongodb://localhost:27017/mydb";

/*MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});*/

/* POST /customers */
router.post('/', function (req, res, next) {

});

module.exports = router;