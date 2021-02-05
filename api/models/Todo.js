/**
 * Todo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title:{
      type: "string",
      required: true,
      description: "Title of a todo",
      example: "Play Football"
    },
    cartegory:{
      type: "string",
      required: true,
      description: "This is the cartegory that the todo belongs e.g Sports, Nutrition, Technology etc..."
    },
    body:{
      type: "string",
      required: true,
      description: "Main content of a todo",
      example: "This is the main content of the todo"
    }
  },

};

