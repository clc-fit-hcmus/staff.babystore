var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

<<<<<<< HEAD
=======
router.get('/order-history', function(req, res, next) {
  res.render('staff/order-history');
});

router.get('/salary-history', function(req, res, next) {
  res.render('staff/salary-history');
});

router.get('/order-list', function(req, res, next) {
  res.render('staff/order-list');
});

>>>>>>> e9c86ad369230fdd8dd7b8b7973b634ea15227b5
module.exports = router;
