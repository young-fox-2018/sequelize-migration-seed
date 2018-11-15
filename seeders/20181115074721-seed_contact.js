'use strict';
const fs = require('fs')
let dataContact = fs.readFileSync('./contacts.csv').toString().split('\n')

let contacts = []
for (let i = 0; i < dataContact.length; i++) {
  let splitContact = dataContact[i].split(',')
  let obj = {}
  obj.name = splitContact[1]
  obj.email = splitContact[2]
  obj.phone = splitContact[3]
  obj.createdAt = new Date()
  obj.updatedAt = new Date()
  contacts.push(obj)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', contacts, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
