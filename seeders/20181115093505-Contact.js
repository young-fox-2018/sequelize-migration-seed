'use strict';

const fs    = require ('fs')
let data    = fs.readFileSync("/home/aandroomeedaa/Desktop/hacktiv8/rePhase-1/WEEK-3/day-4/sequelize-migration-seed/contacts.csv","utf8").split('\n')
// console.log(data)
let arr = []
for(let i = 0;i < data.length -1 ; i++){
    let obj = {}
    obj.name      = data[i].split(',')[1]
    obj.email     = data[i].split(',')[2]
    obj.phone     = data[i].split(',')[3]
    obj.createdAt = new Date()
    obj.updatedAt = new Date()
arr.push(obj)
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Contacts',arr, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Contacts', arr, {});
  }
};
