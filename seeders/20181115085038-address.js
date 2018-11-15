const fs = require('fs');
let address_tables = fs.readFileSync('./addresses.csv', 'utf-8').toString().split('\n');


let data = [];
for (let i = 0; i < address_tables.length; i++) {
  let obj = {};
  let DataSplit = address_tables[i].split(',')
  obj.street = DataSplit[1];
  obj.city = DataSplit[2];
  obj.zipcode = DataSplit[3];
  obj.createdAt = new Date();
  obj.updatedAt = new Date();
  data.push(obj);
}



module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Addresses', data);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null)
  }
};
