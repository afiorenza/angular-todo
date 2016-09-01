var angular = require('angular');

// var ngRoute = require('angular-router');

// Controllers
var formController = require('./controllers/form');
var homeController = require('./controllers/home');

// Directives
var homeDirective = require('./directives/home');

// Routes
// var routes = require('./routes/routes');

var app = angular.module('myApp', [ /* 'ngRoute' */ ]);

// routes.initialize(app);

app.directive('home', ['$templateCache', homeDirective]);
app.controller('FormController', formController);
app.controller('HomeController', homeController);
