define(['jquery', 'service/todoService'], function($, todoService) {
    'use strict';

    var init = function() {
        $('.js-todo-form').submit(function(e) {
            e.preventDefault();

            var $todoInput = $(this).find('.js-todo-form__todo-description');
            var todoDescription = $todoInput.val();

            todoService.addTodo(todoDescription);

            $todoInput.val('');
        });

        $('.js-todos').on('click', '.js-todos__remove-todo', function(e) {
            e.preventDefault();

            var index = $(this).data('index');

            todoService.removeTodo(index);
        });
    };

    return {
        init: init
    }
});