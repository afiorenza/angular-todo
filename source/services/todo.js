// VENDOR LIBS
var _ = require('lodash');
var moment = require('moment');

var CHANGE = 'change'
var TODOS = 'todos';

function saveToLocalStorage (todos) {
    localStorage.setItem(TODOS, JSON.stringify(todos));
};

function getFromLocalStorage () {
    var todos = localStorage.getItem(TODOS);

    if (_.isEmpty(todos)) {
        todos = {};
    } else {
        todos = JSON.parse(todos);
    }

    return todos;
};

var todoFactory = function ($rootScope) {
    return {
        getTodos: function () {
            return getFromLocalStorage();
        },

        getTodo: function (index) {
            return todos[index];
        },

        setTodo: function (todo) {
            var todos = getFromLocalStorage();
            var dateTime = moment().format();

            todos[dateTime] = todo;

            saveToLocalStorage(todos);

            $rootScope.$emit(CHANGE);
        },

        updateTodo: function (index, done) {
            var todos = getFromLocalStorage();

            todos[index].done = done;

            saveToLocalStorage(todos);
        }
    };
};

module.exports = todoFactory;
