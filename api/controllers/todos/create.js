module.exports = {


  friendlyName: 'Create new todo',


  description: '',


  inputs: {
    title:{
      type: "string",
      required: true
    },
    cartegory:{
      type: "string",
      required: true
    },
    body:{
      type: "string",
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const newTodo = await Todo.create({
      title: inputs.title,
      cartegory: inputs.cartegory,
      body: inputs.body
    }).fetch()
    return exits.success({
      message: "Todo was successfully created",
      todo: newTodo
    })
  }
};
