'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
      let data = fs.readFileSync('contacts.csv', 'utf8').split('\n')
      let result = []
      data.forEach(element => {
          let arr = element.split(',')
          let obj = {
              name: arr[1],
              email: arr[2],
              phone:arr[3],
              createdAt: new Date(),
              updatedAt: new Date()
          }
          result.push(obj)
      });

      return queryInterface.bulkInsert('Contacts', result, {

      });
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Contacts', null, {});

  }
};
