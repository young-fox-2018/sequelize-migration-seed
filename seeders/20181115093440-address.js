'use strict';
let path = "/home/aandroomeedaa/Desktop/hacktiv8/rePhase-1/WEEK-3/day-4/sequelize-migration-seed/addresses.csv"
const fs    = require ('fs')
const data  = fs.readFileSync(path ,"utf8").split('\n')
// console.log(data)

var arr=[]
for(let i = 0 ; i < data.length-1 ; i++){
  let obj = {}
  obj.street  = data[i].split(',')[1]
  obj.city    = data[i].split(',')[2]
  obj.zipcode = data[i].split(',')[3]
  obj.createdAt=new Date()
  obj.updatedAt=new Date()
  arr.push(obj)
}
console.log(arr)
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
    return queryInterface.bulkInsert('Adresses', arr, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Adresses', arr, {});
  }
};
