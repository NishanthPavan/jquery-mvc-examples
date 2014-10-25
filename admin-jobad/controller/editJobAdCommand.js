/**
 * EditJobAdCommand send the user to the edit jobad view of the selected jobad.
 * Can only handle one selection.
 */

define([
    "jquery",
    "admin-jobad/command/abstract/singleItemCommand"
], function($, singleItemCommand) {
    singleItemCommand({
        buttonSelector: '.js-edit-button',
        execute: function($selectedItems) {
            $selectedItems.each(function() {
                var id = $(this).data('jobadId');
                //send to edit jobad view
            });
        }
    });
});