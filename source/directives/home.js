module.exports.instanciate = function () {
    var app = angular.module('myApp', ['myApp.services']);

    app.directive('home', ['$templateCache', function ($templateCache) {
        return {
            restrict: 'E',
            template: $templateCache.get('home.html')
        };
    }])
    .controller('HomeController', function ($scope, TodoService) {
        $scope.todos = TodoService.getTodos();

        $scope.handleListClick = function (index, event) {
            TodoService.updateTodo(index, event.target.checked);
        };
    });
};
