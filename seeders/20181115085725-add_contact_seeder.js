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

   let initContact = fs.readFileSync("./contacts.csv", "utf-8").trim().split("\n")
   
   initContact = initContact.map((element)=> {
     element = element.split(",")
   
     let obj = {
       id: element[0],
       name: element[1],
       email: element[2],
       phone: element[3],
       createdAt: new Date(),
       updatedAt: new Date()
     }
   
     return obj
     })

    console.log(initContact)

    queryInterface.bulkInsert("Contacts",initContact);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   queryInterface.bulkDelete("Contacts")
  }
};


