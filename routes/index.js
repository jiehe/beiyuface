var express = require('express');
var router = express.Router();


var hello = require('../controllers/hello');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/hello/:who',hello.hello);

module.exports = router;
