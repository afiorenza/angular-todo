var angular = require('angular');

// Directives
var homeDirective = require('./directives/home');
var navbarDirective = require('./directives/navbar');

// Services
var todoFactory = require('./services/todo');

// Routes
var routes = require('./routes/routes');

var app = angular.module('myApp', []);

routes.initialize();

homeDirective.instanciate();
navbarDirective.instanciate();
todoFactory.instanciate();
