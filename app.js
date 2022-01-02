<<<<<<< HEAD
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHbs =  require('express-handlebars');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
=======
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const expressHbs =  require('express-handlebars');
const app = express();
>>>>>>> e9c86ad369230fdd8dd7b8b7973b634ea15227b5

const hbs = expressHbs.create({
  defaultLayout: 'layout', 
  extname: '.hbs',
  helpers: {
    if_even: function(conditional, options) {
      if((conditional % 2) == 0) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    },
    times: function(n, block) {
<<<<<<< HEAD
      const accum = '';
      for(const i = 1; i < n + 1; ++i)
=======
      var accum = '';
      for(var i = 1; i < n + 1; ++i)
>>>>>>> e9c86ad369230fdd8dd7b8b7973b634ea15227b5
          accum += block.fn(i);
      return accum;
    },
    for: function(from, to, incr, block) {
<<<<<<< HEAD
      const accum = '';
      for(const i = from; i < to; i += incr)
=======
      var accum = '';
      for(var i = from; i < to; i += incr)
>>>>>>> e9c86ad369230fdd8dd7b8b7973b634ea15227b5
          accum += block.fn(i);
      return accum;
    },
    dateFormat: function (date, options) {
      const formatToUse = (arguments[1] && arguments[1].hash && arguments[1].hash.format) || "DD/MM/YYYY"
      return moment(date).format(formatToUse);
    }
  }
});
<<<<<<< HEAD
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

=======
// view engine setup
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/order-history', indexRouter);
app.use('/salary-history',indexRouter);
app.use('/order-list',indexRouter);

>>>>>>> e9c86ad369230fdd8dd7b8b7973b634ea15227b5
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
