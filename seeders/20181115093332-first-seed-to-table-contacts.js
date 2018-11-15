'use strict';
const fs = require('fs')
let data = fs.readFileSync('./contacts.csv', 'utf-8').toString().split('\n')
let contacts = []
data.forEach(datum => {
  let contact = datum.split(',')
  let obj = {}
  obj.name = contact[1]
  obj.email = contact[2]
  obj.phone = contact[3]
  obj.createdAt = new Date()
  obj.updatedAt = new Date()
  contacts.push(obj)
})
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
    return queryInterface.bulkInsert('Contacts', contacts, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
