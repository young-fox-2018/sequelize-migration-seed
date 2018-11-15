'use strict';
const fs = require('fs')
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   let file= fs.readFileSync('./addresses.csv','utf8')
      let data1 = file.split('\r\n')
      let newfile = []
      for(let i = 0 ; i <data1.length;i++){
        let data2 = data1[i].split(',')
        let obj = {
          street:data2[1],
          city:data2[2],
          zip_code:data2[3],
          createdAt:new Date(),
          updatedAt:new Date()
        }
        newfile.push(obj)
      }
   return queryInterface.bulkInsert('Addresses',newfile)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bullDelete('Addresses',null)
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
