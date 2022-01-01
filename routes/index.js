var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/order-history', function(req, res, next) {
  res.render('staff/order-history');
});

router.get('/salary-history', function(req, res, next) {
  res.render('staff/salary-history');
});

router.get('/order-list', function(req, res, next) {
  res.render('staff/order-list');
});

module.exports = router;
