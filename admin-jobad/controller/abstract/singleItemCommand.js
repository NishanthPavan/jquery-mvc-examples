/*
 * A multiitem command is enabled when one, and only one, item is selected.
 * The implementations execute function will be called with the selected items wrapped as a jquery object.
 */

define(["jquery", "command"], function($, command) {
    var singleItemCommand = function(implementation) {
        return command({
            buttonSelector: implementation.buttonSelector,
            isEnabled: function($selectedItems) {
                return $selectedItems.length === 1;
            },
            execute: function($selectedItems) {
                implementation.execute($($selectedItems[0]));
            }
        });
    };

    return singleItemCommand;
});