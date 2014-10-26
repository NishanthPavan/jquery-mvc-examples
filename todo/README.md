Example MVC with jQuery and RequrieJS
===============
Architecture inspired by AngularJS and Spring MVC.

This folder contains a todo-application with add and remove functionality.

# How does it work?

Four layers.

Model, View, Controller and Service

## Model
Pure data objects. The model is readable by the view layer and editable by the service layer.

## View
Listens for both user events and application events. Updates the DOM as a reaction of these by adding/removing view-classes, DOM-objects and effects.

## Controller
Listens to user events. Collects data from the event & DOM and forwards it to the service layer. The controller layer is allowed to do smaller view changes, such as reseting a form and manipulating .js-classes.

## Service
Edits the model and communicates with external services like ajax-calls to a backend. Fires application-events to notify of model updates.


# Possible adaptions
## Merge of Controller and Service

Controller handles user events, DOM-reading, business logic and AJAX communication.

\+ Less lasagnea


\- Messier code

## Separate AJAX-communication from service to a new layer (like a DAO-layer)
Service layer handles business logic and model updates. The new layer handles AJAX communcation.

\+ More separation gives more maintainable and reusable code

\- More boilerplate, probably all for nothing