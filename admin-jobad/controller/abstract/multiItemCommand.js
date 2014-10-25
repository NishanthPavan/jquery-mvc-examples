/*
 * A multiitem command is enabled when atleast one item is selected.
 * The implementations execute function will be called with all selected items.
 */

define(["jquery", "command"], function($, command) {
    var multiItemCommand = function(implementation) {
        return command({
            buttonSelector: implementation.buttonSelector,
            isEnabled: function($selectedItems) {
                return $selectedItems.length > 0;
            },
            execute: function($selectedItems) {
                implementation.execute($selectedItems);
            }
        });
    };

    return multiItemCommand;
});