First Fullstack App
===

## TODO

### DB seed functionality

### The UD of CRUD

View:

* Add a delete button on the detail view
  * When the action is complete, programmatically navigate back to the list view
* Add an edit button on the detail view that navigates to a new route: `/<items>/:id/edit`
  * When the action is complete, programmatically navigate back to the detail view
  * Create a new component that either has a more extensive update form, or reuse the add form if it has
all the right fields.

### Add features for elements (or think of better use of second table)

### Add JOINS

1. Add a JOIN to your `GET` list select
    * Keep the detail view get as just the id
2. Add a `GET` for the lookup values

### Aggregation (bonus)

1. Add a route that uses JOIN with GROUP BY to return stats by the lookup. If you have quantifyable data, try and use 
that. Otherwise, do a COUNT.
    

### Get d3.js working as a model!

 

## Notes

### Postgres access

* su - postgres
  * enter password for postgres user
* psql
