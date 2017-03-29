require("babel-polyfill");

var express = require('express');
var app = express();
var logger = require('morgan');

var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express(),
    server = http.createServer(app);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));



//静态文件
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).end();
});

//start
var port=3000;
server.listen(port, function () {
  console.log('App listening on port '+port);
});

