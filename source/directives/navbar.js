module.exports.instanciate = function () {
    var app = angular.module('myApp');

    app.directive('navbar', ['$templateCache', function ($templateCache) {
        return {
            restrict: 'E',
            template: $templateCache.get('navbar.html')
        };
    }])
    .controller('NavbarController', function ($scope) {
    });
};
