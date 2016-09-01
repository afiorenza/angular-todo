var ngRoute = require('angular-route');

// Controllers
var exampleController = require('../controllers/example');

module.exports.initialize = function () {
    var app = angular.module('myApp', [ngRoute]);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/example', {
                templateUrl: 'example.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }]);
};
