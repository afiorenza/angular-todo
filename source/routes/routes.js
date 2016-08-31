// Controllers
var homeController = require('../controllers/home-controller');

module.exports.initialize = function (app) {

    app.config(['$routeProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'homeController'
            })

        $locationProvider.html5Mode(true);
    }]);
};
