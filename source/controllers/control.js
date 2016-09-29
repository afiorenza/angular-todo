var _ = require('lodash');

module.exports = function ($scope, $rootScope, TodoService) {

    $rootScope.$on('change', function () {
        $scope.nextTodo = '';
    });

    $scope.addTodo = function () {
        var nextTodo = $scope.nextTodo;

        if (!_.isEmpty(nextTodo)) {
            TodoService.setTodo({
                description: nextTodo,
                done: false
            });
        }
    };

    $scope.handleDoneFilterClick = function (event) {
        console.log(event);
    };
};
