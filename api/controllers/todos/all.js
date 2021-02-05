module.exports = {


  friendlyName: 'All',


  description: 'All todos.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const allTodos = await Todo.find({})
    return exits.success({
      message: "All todos returned",
      data: allTodos
    })
  }
};
