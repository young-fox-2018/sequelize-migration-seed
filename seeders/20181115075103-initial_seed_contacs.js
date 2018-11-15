'use strict';
const fs = require('fs')
let data = fs.readFileSync('./contacts.csv', 'utf8').split('\n')
let contacts = []
data.forEach((ctct, i) => {
  data[i] = data[i].split(',')
  contacts.push({
    name: data[i][1],
    email: data[i][2],
    phone: data[i][3],
    createdAt: new Date(),
    updatedAt: new Date()
  })
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', contacts, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
