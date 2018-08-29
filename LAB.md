First Fullstack App
===

## TODO

### Detail View

1. Add a new route at `/<items>/:id` that loads a detail view of your resource
    1. Create the detail view component
    1. In the `created` lifecycle hook, fetch the data
1. Add a new service api call that takes and id and fetches the requested resource from the server
1. Add a GET route on the server that returns the requested id from the database.
    1. Use `req.params.id` to get to the id

## Bonus Stretch Goals!

### Delete Functionality

1. Add a delete button on the detail view
1. Create new client side api function
1. Add new route to express that deletes the specfied id from the database
1. When the action is complete, programmatically navigate back to the list view


### Update Functionality

1. Add an edit button on the detail view that navigates to a new route: `/<items>/:id/edit`
1. Create a new component that either has a more extensive update form, or reuse the add form if it has
all the right fields.
1. Add new route to express that deletes the updates by id
1. When the action is complete, programmatically navigate back to the detail view
