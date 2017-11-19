var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('landing');
});

router.get('/register', function (req, res, next) {
	res.render('register', {errors: []});
});


module.exports = router;


