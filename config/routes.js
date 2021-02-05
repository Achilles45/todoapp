/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    "GET /" : "pages.index",
    "GET /about" : "pages.about",

    "POST /create" : "todos.create",
    "GET /all" : "todos.all"

};
