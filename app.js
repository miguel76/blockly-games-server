var express = require('express'),
    fs = require('fs'),
    path = require('path');

var app = express();

app.use(express.static(
    path.join(__dirname, 'public'),
    {
      'redirect': false, 'extensions': ['html', 'htm'], 'index': false
    }));
// app.use(express.static(
//     path.join(__dirname, 'public'),
//     { 'redirect': false, 'extensions': ['html', 'htm'], 'index': false }));

module.exports = app;
