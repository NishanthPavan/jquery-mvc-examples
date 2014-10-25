/**
 * CreateJobAdCommand send the user to the create jobad view independent of current selections.
 */

define([
    "jquery",
    "admin-jobad/command/abstract/independentCommand"
], function($, independentCommand) {
    independentCommand({
        selector: '.js-create-button',
        execute: function() {
            // send to create new
        }
    });
});