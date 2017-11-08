var express = require('express');
var router = express.Router();
var fnUser = require('./../controller/user')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', fnUser.goLogin);
router.get('/resiter', fnUser.goResiter);
module.exports = router;
