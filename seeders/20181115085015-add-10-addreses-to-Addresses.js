'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Addresses', [{
        street: '711-2880 Nulla St',
        city: 'Mississipi',
        zip_code: '96522',
        createdAt: new Date(),
        updatedAt : new Date()  
      },
      {
        street: '8652 Fusce Rd',
        city: 'Nebraska',
        zip_code: '20620',
        createdAt: new Date(),
        updatedAt : new Date()   
      },
      {
      street: '606-3727 Ullamcorper',
        city: 'Roseville',
        zip_code: '11523',
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        street: '867-859 Sit Rd',
        city: 'New York',
        zip_code: '39531',
        createdAt: new Date(),
        updatedAt : new Date()   
      },
      {
        street: '7292 Dictum Av',
        city: 'San Antonio',
        zip_code: '47096',
        createdAt: new Date(),
        updatedAt : new Date()   
      },
      {
        street: '651-8679 Sodales Av',
        city: 'Muskegon KY',
        zip_code: '08219',
        createdAt: new Date(),
        updatedAt : new Date()  
      },
      {
        street: '191-103 Integer Rd',
        city: 'Corona New Mexico',
        zip_code: '96522',
        createdAt: new Date(),
        updatedAt : new Date()   
      },
      {
        street: '2508 Dolor',
        city: 'Mississipi',
        zip_code: '09289',
        createdAt: new Date(),
        updatedAt : new Date()   
      }, 
      {
        street: '666-4366 Lacinia Avenue',
        city: 'Mississipi',
        zip_code: '96522',
        createdAt: new Date(),
        updatedAt : new Date()   
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Addresses', null);
  }
};
