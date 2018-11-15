'use strict';
const fs = require('fs')
const data = fs.readFileSync('./contacts.csv', 'utf8').split('\n')

module.exports = {
  up: (queryInterface, Sequelize) => {
        let arr = []
        for (let i = 0; i < data.length; i++) {
          arr.push(data[i].split(','))          
        }
        let arrData = []
        for (let i = 0; i < arr.length; i++) {
          let obj = {}    
          obj.name = arr[i][1]
          obj.email = arr[i][2]
          obj.phone = arr[i][3]
          obj.createdAt = new Date()
          obj.updatedAt = new Date()
          arrData.push(obj)      
        }
      return queryInterface.bulkInsert('Contacts', arrData, {})
      
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Contacts', null, {});
  }
};
