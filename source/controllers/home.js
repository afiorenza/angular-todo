module.exports = function ($scope, TodoService) {
    $scope.todos = TodoService.getTodos();

    $scope.handleListClick = function (index, event) {
        TodoService.updateTodo(index, event.target.checked);
    };
};
