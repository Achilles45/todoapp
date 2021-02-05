module.exports = {


  friendlyName: 'Index',


  description: 'Index pages.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    // All done.
    return exits.success({message: "You have reached the home page of the todo application"})

  }


};
