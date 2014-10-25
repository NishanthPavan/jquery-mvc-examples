/**
 * An independent command is always enabled and does not change its behaviour based on the current selection.
 */

define(["jquery", "command"], function($, command) {
    var independentCommand = function(implementation) {
        return command({
            buttonSelector: implementation.buttonSelector,
            isEnabled: function($selectedItems) {
                return true;
            },
            execute: function($selectedItems) {
                implementation.execute();
            }
        });
    };

    return independentCommand;
});