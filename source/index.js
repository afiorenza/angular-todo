// VENDOR LIBS
var angular = require('angular');
var ngRoute = require('angular-route');

// DIRECTIVES
var controlDirective = require('./directives/control');
var homeDirective = require('./directives/home');
var navbarDirective = require('./directives/navbar');

// CONTROLLERS
var controlController = require('./controllers/control');
var homeController = require('./controllers/home');
var navbarController = require('./controllers/navbar');

// SERVICES
var todoFactory = require('./services/todo');

// ROUTES
var routes = require('./routes/routes');

var app = angular.module('myApp', [
    'myApp.directives',
    'myApp.services',
    ngRoute
]);

routes.initialize(app);

var services = angular.module('myApp.services', []);

services.factory('TodoService', todoFactory);

var directives = angular.module('myApp.directives', []);

directives.directive('control', ['$templateCache', controlDirective]).controller('ControlController', controlController);
directives.directive('home', ['$templateCache', homeDirective]).controller('HomeController', homeController);
directives.directive('navbar', ['$templateCache', navbarDirective]).controller('NavbarController', navbarController);
