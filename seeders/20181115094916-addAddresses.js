'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = fs.readFileSync('addresses.csv', 'utf8').split('\n')
    let result = []
    data.forEach(element => {
        let arr = element.split(',')
        let obj = {
            street: arr[1],
            city: arr[2],
            zip_code: arr[3],
            createdAt: new Date(),
            updatedAt: new Date()
        }
        result.push(obj)
    });

    return queryInterface.bulkInsert('Addresses', result, {

    });
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Addresses', null, {});
  }
};
