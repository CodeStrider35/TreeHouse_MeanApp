'use strict';
// Index.js holds our routes
var express = require('express');
var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/todos', function(req, res) {
    res.json({todos: todos});
});

// TODO: Add Post route to create new entries

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete entries

module.exports = router;