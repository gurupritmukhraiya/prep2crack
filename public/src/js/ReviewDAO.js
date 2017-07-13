var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var router = express.Router();

var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

var review = new Review({
    companyName: 'Siemens',
    jobTitle: 'SSE'
});

/* POST /customers */
router.post('/', function (req, res, next) {
    review.save(review, function (err, post) {
        if (err) return next(err);
        console.log("Review Saved!");
        res.json(post);
    });
});

module.exports = router;