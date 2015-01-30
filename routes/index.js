var express = require('express');
var router = express.Router();


var hello = require('../controllers/hello');
var reg = require('../controllers/reg');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});


router.get('/reg',reg);


router.get('/hello/:who',hello.hello);

module.exports = router;
