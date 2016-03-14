'use strict';

var express = require('express');

var app = express();

// To connect the json router to app.js as well as the app.use('/api', router); on this page
var router = require ('./api');

app.use('/', express.static('../public'));

app.use('/api', router);

app.listen(3000, function () {
    console.log("The server is running on port 3000!");
});