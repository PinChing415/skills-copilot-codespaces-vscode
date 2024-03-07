// Create web server with Express
// Create RESTful API with Express
// Create a simple comment service

// Load the express module
var express = require('express');
var bodyParser = require('body-parser');

// Create an instance of express
var app = express();

app.use(bodyParser.json());

// Create an array to hold comments
var comments = [
    { name: 'John', email: '