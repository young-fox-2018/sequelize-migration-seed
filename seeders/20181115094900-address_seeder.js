'use strict';
const fs = require('fs')
let data = fs.readFileSync('./addresses.csv').toString()
data = data.split('\n')
let addressData = []
data.forEach((datum) => {
  let temporary = datum.split(',')
  let obj = {}
  obj.street = temporary[0]
  obj.city = temporary[1]
  obj.zip_code = temporary[2]
  obj.createdAt = new Date()
  obj.updatedAt = new Date()

  addressData.push(obj)

})

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Addresses',addressData, {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Addresses', null, {});
  }
};
