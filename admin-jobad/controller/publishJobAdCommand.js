/**
 * PublishJobAdCommand published all the jobads the user has selected.
 * Handles atleast one selection (1 - ∞).
 */

define([
    "jquery",
    "admin-jobad/command/abstract/multiItemCommand",
    "admin-jobad/model/adminJobAdService"
], function($, multiItemCommand, adminJobAdService) {
    multiItemCommand({
        buttonSelector: '.js-publish-button',
        execute: function($selectedItems) {
            $selectedItems.each(function() {
                var id = $(this).data('jobadId');
                adminJobAdService.publishJobAd(id);
            });
        }
    });
});