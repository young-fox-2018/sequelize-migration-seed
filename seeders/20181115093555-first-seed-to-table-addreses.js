'use strict';
const fs = require('fs')
let data = fs.readFileSync('./addresses.csv', 'utf-8').toString().split('\n')

let addresses = []
data.forEach(datum => {
  let address = datum.split(',')
  let obj = {}
  obj.street = address[1]
  obj.city = address[2]
  obj.zip_code = address[2]
  obj.createdAt = new Date()
  obj.updatedAt = new Date()
  addresses.push(obj)
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
    return queryInterface.bulkInsert('Addresses', addresses, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Addresses', null, {})
  }
};
