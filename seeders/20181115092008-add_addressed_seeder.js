'use strict';




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

   const fs = require("fs")

   let initAdresses = fs.readFileSync("./addresses.csv", "utf-8").trim().split("\n")
   
   initAdresses = initAdresses.map((element)=> {
     element = element.split(",")
   
     let obj = {
       id: element[0],
       street: element[1],
       city: element[2],
       zip_code: element[3],
       createdAt: new Date(),
       updatedAt: new Date()
     }
   
     return obj
     })

    queryInterface.bulkInsert("Addresses", initAdresses)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    queryInterface.bulkDelete("Addresses")
  }
};
