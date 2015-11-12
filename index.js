#!/usr/bin/env node
var html2jade = require('html2jade');
var express  = require('express');
var app      = express();
var path     = require('path');
var open     = require("open");
var jade     = require('jade');

app.use(express.static(path.join(__dirname, 'vendor/docs/')));

app.get('/', function (req, res) {
  res.send('Hello World')
})



var server = require('http').createServer(app);

// 随机端口3000 - 10000 之间
server.listen(3026)

// html2jade
// jade2html
open("http://127.0.0.1:3026");