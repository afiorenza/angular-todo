var angular = require('angular');

// Directives
var homeDirective = require('./directives/home');

// Routes
var routes = require('./routes/routes');

var app = angular.module('myApp', []);


routes.initialize();
homeDirective.instanciate();
