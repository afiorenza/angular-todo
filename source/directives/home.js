module.exports.instanciate = function () {
    var app = angular.module('myApp');

    app.directive('home', ['$templateCache', function ($templateCache) {
        return {
            restrict: 'E',
            template: $templateCache.get('home.html')
        };
    }])
    .controller('HomeController', function ($scope) {
        $scope.count = 0;
        $scope.show = true;

        $scope.add = function () {
            $scope.count = $scope.count + 1;
        };

        $scope.subtract = function () {
            $scope.count = $scope.count - 1;
        };

        $scope.showCount = function () {
            $scope.show = (!$scope.show);
        }

    });
};
