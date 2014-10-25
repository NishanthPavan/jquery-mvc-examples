/**
 * Allows for action based on selections and command buttons in a form.
 * A row-select change triggers the isEnabled function of the given implementation, which decides if
 *  the command is enabled or not.
 * A click on the button triggers the execute function of the give implementation, given that the command
 *  is enabled.
 */

define(['jquery'], function($) {
    var rowSelectClass = '.js-row-select';

    var command = function(implementation) {
        var $commandButton = $(implementation.buttonSelector);

        $(rowSelectClass).change(function() {
            if (implementation.isEnabled($(rowSelectClass + ":selected"))) {
                $commandButton.removeClass('js-command--disabled');

                // triggers event which view listens to 
                $commandButton.trigger('enabled');
            } else {
                $commandButton.addClass('js-command--disabled');

                // triggers event which view may listens to 
                $commandButton.trigger('disabled');
            }
        });

        $(implementation.selector).click(function() {
            if ($commandButton.hasClass('js-command--disabled')) {
                return;
            }

            implementation.execute($(rowSelectClass + ":selected"));
        });
    };

    return command;
});