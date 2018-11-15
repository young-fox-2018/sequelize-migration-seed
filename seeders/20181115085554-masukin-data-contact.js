'use strict';
const fs = require('fs')
let data = fs.readFileSync('./contacts.csv', 'utf8').split('\n')
data = data.slice(0, data.length-1)

let contacts = []
data.forEach(element => {
  element = element.split(',')
  let obj = {
    name: element[1],
    email: element[2],
    phone: element[3],
    createdAt: new Date(),
    updatedAt: new Date()
  }
  contacts.push(obj)
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', contacts, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {})
  }
};
