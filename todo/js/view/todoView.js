define(['jquery', 'model/todos', 'events'], function($, todos, events) {
    'use strict';

    var $todoContainer;

    var renderTodos = function() {
        $.each(todos, function(index, todo) {

            var $div = $('<div />').text(todo.description);
            $div.append($('<a/>')
                .text('Ta bort')
                .attr('href', '#')
                .addClass('js-todos__remove-todo todos__remove-todo')
                .data('index', index));

            $todoContainer.append($div);
        });
    };

    var todoModelUpdated = function() {
        $todoContainer.empty();
        renderTodos();
    };

    var init = function() {
        $todoContainer = $('.js-todos');

        events.on('todo.update', todoModelUpdated);
    };

    return {
        init: init
    };
});