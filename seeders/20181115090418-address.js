'use strict';
const fs = require("fs")
const contactPath = "/home/cascade/Documents/hacktiv8immersive/phase1reload/week3/day4/sequelize-migration-seed/contacts.csv"
let data = fs.readFileSync(contactPath, "utf8")
data = data.split("\n")
let doc = []
data.forEach(element => {
    let split = element.split(",")
    let obj = {
        name:split[1],
        email:split[2],
        phone:split[3],
        createdAt:new Date(),
        updatedAt:new Date()
    }
    doc.push(obj)
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', doc,{});
    
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Contacts', null, {});    
  }
};
