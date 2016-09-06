module.exports.instanciate = function() {

    angular.module('myApp.services', []).factory('TodoService', [function () {
        var todos = [
            {
                description: 'Item 1',
                done: false
            },
            {
                description: 'Item 1',
                done: true
            },
            {
                description: 'Item 1',
                done: false
            },
            {
                description: 'Item 1',
                done: true
            },
            {
                description: 'Item 1',
                done: false
            }
        ];

        return {
            getTodos: function () {
                return todos;
            },

            getTodo: function (index) {
                return todos[index];
            },

            setTodo: function (todo) {
                todos.push(todo);
            },

            updateTodo: function (index, done) {
                todos[index].done = done;
            }
        };
    }]);
};
