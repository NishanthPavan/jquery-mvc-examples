define([
    'jquery', 'model/todos', 'events'
], function($, todos, events) {

    var addTodo = function(description) {
        todos.push({
            description: description
        });

        //notify listeners of model change
        events.trigger('todo.update');
    };

    var removeTodo = function(index) {
        todos.splice(index, 1);

        //notify listeners of model change
        events.trigger('todo.update');
    };

    return {
        addTodo: addTodo,
        removeTodo: removeTodo
    };
});