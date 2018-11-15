'use strict';

const fs = require("fs")
var data = fs.readFileSync("./contacts.csv", "utf-8")
data = data.split("\n")
var output = []
var current = null
for (let i = 0; i < data.length-1; i++) {
      current = data[i].split(",")
      output.push({
        name: current[1],
        email:current[2], 
        phone_type: current[3],
        createdAt: new Date(),
        updatedAt: new Date() 
      })
}

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Contacts',output, {});
 
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Contacts', null, {});
  }
};
