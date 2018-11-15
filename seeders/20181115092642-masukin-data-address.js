'use strict';
const fs = require('fs')
let data = fs.readFileSync('./addresses.csv', 'utf8').split('\n')
data = data.slice(0, data.length-1)

let addresses = []
data.forEach(element => {
  element = element.split(',')
  let obj = {
    street: element[1],
    city: element[2],
    zip_code: element[3],
    createdAt: new Date(),
    updatedAt: new Date()
  }
  addresses.push(obj)
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', addresses, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {})
  }
};
