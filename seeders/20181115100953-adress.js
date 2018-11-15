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
   let result = [];
   let readAddress = fs.readFileSync("./addresses.csv", "utf8").split("\n");
  //  console.log(readAddress)
    for(let i = 0; i < readAddress.length - 1; i++) {
      // console.log(readAddress[i].split(","))
      let splitted = readAddress[i].split(",");
      let addressObj = {
        id: Number(splitted[0]),
        street: splitted[1],
        city: splitted[2],
        zip_code: splitted[3],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      result.push(addressObj);
    }
    return queryInterface.bulkInsert("Addresses", result);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Addresses', null);
  }
};
