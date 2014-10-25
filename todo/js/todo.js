require({
    paths: {
        "jquery": "http://code.jquery.com/jquery-2.1.1.min"
    }
});

require([
    'jquery',
    'controller/todoController',
    'view/todoView'
], function($, todoController, todoView) {
    $(function() {
        todoController.init();
        todoView.init();
    });
});