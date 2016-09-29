module.exports = function ($scope, $rootScope, TodoService) {
    $scope.todos = TodoService.getTodos();

    $rootScope.$on('change', function () {
        $scope.todos = TodoService.getTodos();
    });

    $scope.handleListClick = function (index, event) {
        TodoService.updateTodo(index, event.target.checked);
    };
};
