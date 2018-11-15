'use strict';
const fs = require('fs')
let data = fs.readFileSync('./addresses.csv', 'utf8').split('\n')
let addresses = []
data.forEach((addr, i) => {
  data[i] = data[i].split(',')
  addresses.push({
    street: data[i][1],
    city: data[i][2],
    zip_code: data[i][3],
    createdAt: new Date(),
    updatedAt: new Date()
  })
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', addresses, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
