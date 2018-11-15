'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let fs = require(`fs`)
    let data = fs.readFileSync(`./contacts.csv`, `utf8`)
    data = data.split(`\n`)
    data = data.slice(0, data.length - 1)
    let arrTemp = []
    let result = []

    for (let i = 0; i < data.length; i++) {
      arrTemp.push(data[i].split(`,`))
    }

    for (let i = 0; i < arrTemp.length; i++) {
      let obj = {}
      obj = {
        name: arrTemp[i][1],
        email: arrTemp[i][2],
        phone: arrTemp[i][3],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      result.push(obj)

    }
    return queryInterface.bulkInsert('Contacts', result);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
