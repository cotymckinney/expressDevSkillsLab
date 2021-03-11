// REQUIRE EXPRESS, DEFINE ROUTER OBJECT FROM EXPRESS, REQUIRE CONTROLLER
const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

// EXPORT
module.exports = router;

// Mount Routes 
router.get('/skills', function(req, res) {
    res.render('skills');
});

// router.get('/timestamp', function(req, res) {
//     res.redirect('/');
//     // Creates a timestamp in the database.
// });

router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);