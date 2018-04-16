module.exports = {


  friendlyName: 'View available things',


  description: 'Display "Available things" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/things/available-things'
    }

  },


  fn: async function (inputs, exits) {
    const things = [
      { id: 1, label: 'Sweet Red Drill' },
      { id: 2, label: 'Rad Mountain Bike' },
    ];

    // Respond with view.
    return exits.success({
      things,
    });

  }


};
