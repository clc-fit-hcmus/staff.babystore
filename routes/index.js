const csrf = require('csurf');
const passport = require('passport');
const { isLoggedIn, notLoggedIn } = require('../utils/login');

var express = require('express');
var router = express.Router();

const csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', notLoggedIn, function(req, res, next) {
  const messages = req.flash('error');
  res.render('index', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.get('/order-history', function(req, res, next) {
  res.render('staff/order-history');
});

router.get('/logout', isLoggedIn, function(req, res, next) {
  req.logout();
  res.redirect('/');
})

router.get('/profile', isLoggedIn, function(req, res, next) {
  const user = req.user.recordset[0];
  res.render('user/profile', { user });

})

router.post('/', passport.authenticate('local.signin', {
  successRedirect: '/profile',
  failureRedirect: '/',
  failureFlash: true
}));


module.exports = router;
