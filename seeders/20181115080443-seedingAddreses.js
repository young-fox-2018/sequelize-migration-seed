'use strict';

const fs = require("fs")
var data = fs.readFileSync("./addresses.csv", "utf-8")
data = data.split("\n")
var output = []
var current = null
for (let i = 0; i < data.length-1; i++) {
      current = data[i].split(",")
      output.push({
        street: current[1],
        city:current[2], 
        zip_code: current[3],
        createdAt: new Date(),
        updatedAt: new Date() 
      })
}

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Addresses', output, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Addresses', null, {});
  }
};
