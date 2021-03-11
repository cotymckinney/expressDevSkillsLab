// REQUIRE EXPRESS AND DEFINE ROUTER OBJECT FROM EXPRESS
const express = require('express');
const router = express.Router();

// EXPORT
module.exports = router;

// Mount Routes 
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/timestamp', function(req, res) {
    res.redirect('/');
    // Creates a timestamp in the database.
});