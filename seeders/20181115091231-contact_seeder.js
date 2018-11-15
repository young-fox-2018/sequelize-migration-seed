'use strict';
const fs = require('fs')
let data = fs.readFileSync('./contacts.csv').toString()
data = data.split('\n')
let contactData = []
for(let i = 0; i < data.length; i++) {
  let temporary = data[i].split(',')
  let Obj = {}
  Obj.name = temporary[0]
  Obj.email = temporary[1]
  Obj.phone = temporary[2]
  Obj.createdAt = new Date()
  Obj.updatedAt = new Date()
  contactData.push(Obj)
}


module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Contacts',contactData, {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Contacts', null, {});
  }
};
