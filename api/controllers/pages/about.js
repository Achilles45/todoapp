module.exports = {


  friendlyName: 'About',


  description: 'About pages.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    // All done.
    return exits.success({message: "About page of the applicaiton"})

  }


};
