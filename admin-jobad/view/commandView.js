/**
 * View representation of the .js-command object.
 * Changes the view based on event changes such as if a command is enabled or disabled.
 */

define(['jquery'], function($, events) {
    var commandsSelector = '.js-command';

    $(commandsSelector).on('disabled', function() {
        $(this).addClass('btn--disabled');
    });

    $(commandsSelector).on('enabled', function() {
        $(this).removeClass('btn--disabled');
    });
});