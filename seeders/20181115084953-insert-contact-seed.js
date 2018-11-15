'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = fs.readFileSync('./contacts.csv', 'utf8')
    data = data.split('\n')
    let VeryNewData = []
    for(let i = 0; i < data.length-1; i++) {
      let newData = data[i].split(',')
      let temp = {
        name: newData[1],
        email: newData[2],
        phone: newData[3],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      VeryNewData.push(temp)
    }
    return queryInterface.bulkInsert('Contacts', VeryNewData)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {})
  }
};
