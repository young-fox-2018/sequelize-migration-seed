'use strict';
const fs = require('fs')
let dataAddress = fs.readFileSync('./addresses.csv', 'utf8').toString().split('\n')
let addresses = []
for (let i = 0; i < dataAddress.length; i++) {
  let splitAddress = dataAddress[i].split(',')
  let obj = {}
  obj.street = splitAddress[1]
  obj.city = splitAddress[2]
  obj.zip_code = splitAddress[3]
  obj.createdAt = new Date()
  obj.updatedAt = new Date()
  addresses.push(obj)
}


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', addresses, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
