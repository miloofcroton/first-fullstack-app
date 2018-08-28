First Fullstack App
===

## Lab

Create your first app and server (fullstack minus database)!

Pick an "entity" (resource) for your app. Ideally, something of interest to you.
**However**, your resource should:

1. Only have one level of properties (no nested objects or arrays)
1. Have at least one property of type:
    * string/text
    * number
    * boolean (true/false)

## App

The app needs to display a list of resources and have an add form to add a new resource. Make sure to:

* Update the list after adding a new item
* Clear the add form after successful save

## Server

The server needs to:

* Use `express.json()` to "read" POST body
* Use `cors()` to handle direct request from app
* Create a `.json` file with initial data for the app
* Handle a `GET` to `/api/<your-resource-plural>` and return list of data
* Handle a `POST` to `/api/<your-resource-plural>` and update file then return the posted object

