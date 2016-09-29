module.exports = function() {
    var _ = require('lodash');

    var TODOS = 'todos';
    var mockData = [
        {
            description: 'Item 1',
            done: false
        },
        {
            description: 'Item 2',
            done: true
        },
        {
            description: 'Item 3',
            done: true
        }
    ];

    if (_.isEmpty(localStorage.getItem(TODOS))) {
        saveToLocalStorage(mockData);
    }

    return {
        getTodos: function () {
            return getFromLocalStorage();
        },

        getTodo: function (index) {
            return todos[index];
        },

        setTodo: function (todo) {
            todos.push(todo);
        },

        updateTodo: function (index, done) {
            var todos = getFromLocalStorage();

            todos[index].done = done;

            saveToLocalStorage(todos);
        }
    };

    function saveToLocalStorage (todos) {
        localStorage.setItem(TODOS, JSON.stringify(todos));
    };

    function getFromLocalStorage () {
        return JSON.parse(localStorage.getItem(TODOS));
    };
};
