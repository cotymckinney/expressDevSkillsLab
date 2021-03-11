// REQUIRE EXPRESS, DEFINE ROUTER OBJECT FROM EXPRESS, REQUIRE CONTROLLER
const express = require('express');
const router = express.Router();
const catsCtrl = require('../controllers/cats');

// EXPORT
module.exports = router;

// Mount Routes 
router.get('/cats', function(req, res) {
    res.render('cats');
});

// router.get('/timestamp', function(req, res) {
//     res.redirect('/');
//     // Creates a timestamp in the database.
// });

router.get('/', catsCtrl.index);
router.get('/:id', catsCtrl.show);