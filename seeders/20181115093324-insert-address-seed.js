'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = fs.readFileSync('./addresses.csv', 'utf8')
    data = data.split('\n')
    let VeryNewData = []
    for(let i = 0; i < data.length-1; i++) {
      let newData = data[i].split(',')
      let temp = {
        street: newData[1],
        city: newData[2],
        zip_code: newData[3],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      VeryNewData.push(temp)
    }
    return queryInterface.bulkInsert('Addresses', VeryNewData)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {})
  }
};
