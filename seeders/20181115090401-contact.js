'use strict';
const fs = require("fs")
const addressPath = "/home/cascade/Documents/hacktiv8immersive/phase1reload/week3/day4/sequelize-migration-seed/addresses.csv"
let data = fs.readFileSync(addressPath, "utf8")
data = data.split("\n")
let doc = []
data.forEach(element => {
    let split = element.split(",")
    let obj = {
        street:split[1],
        city:split[2],
        zip_code:split[3],
        createdAt:new Date(),
        updatedAt:new Date()

    }
    doc.push(obj)
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', doc,{});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Addresses', null, {});
  }
};
