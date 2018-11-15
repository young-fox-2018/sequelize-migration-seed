'use strict';

const fs = require("fs");

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

   let readData = fs.readFileSync("./contacts.csv", "utf8").split("\n");
   let result = [];
    for(let i = 0; i < readData.length - 1; i++) {
      let splitted = readData[i].split(",");

      let contactsObj = {
        id : splitted[0],
        name: splitted[1],
        email: splitted[2],
        phone: splitted[3],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      result.push(contactsObj);
    }
    return queryInterface.bulkInsert("Contacts", result);
  },
  
  down: (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Contacts', null);
  }
};