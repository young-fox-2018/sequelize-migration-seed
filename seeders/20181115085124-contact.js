const fs = require('fs');
let contacts_tables = fs.readFileSync('./contacts.csv', 'utf-8').toString().split('\n');


let contacts = [];
for (let i = 0; i < contacts_tables.length; i++) {
  let obj = {};
  let DataSplit = contacts_tables[i].split(',')
  obj.name = DataSplit[1];
  obj.email = DataSplit[2];
  obj.phone = DataSplit[3];
  obj.createdAt = new Date();
  obj.updatedAt = new Date();
  contacts.push(obj);
}



module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Contacts', contacts);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null)
  }
};
