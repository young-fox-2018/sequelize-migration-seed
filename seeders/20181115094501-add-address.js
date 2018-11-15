'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    let bulkInsert = []
    let contactsData = fs.readFileSync('./addresses.csv', 'utf8')
    let contactsDataArray = contactsData.split('\n')

    for (let i = 0; i < contactsDataArray.length; i++) {
      let data = contactsDataArray[i].split(",")
      let obj = {
        street: data[1],
        city: data[2],
        zip_code: data[3],
        createdAt: new Date,
        updatedAt: new Date
      }
      bulkInsert.push(obj)
    }
    console.log(bulkInsert);
    return queryInterface.bulkInsert('Addresses', bulkInsert)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Addresses', null)
  }
};
