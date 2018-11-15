'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [{
      name: 'Lani Rollins',
      email : 'blandit@quam,com',
      phone: '1-43535-3453-223',
      createdAt: new Date(),
      updatedAt : new Date()
    }, 
    {
      name: 'Lani Rollins',
      email : 'blandit@quam,com',
      phone: '1-43535-3453-223',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Lani Rollins',
      email : 'blandit@quam,com',
      phone: '1-43535-3453-223',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Lani Rollins',
      email : 'blandit@quam,com',
      phone: '1-43535-3453-223',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'Lani Rollins',
      email : 'blandit@quam,com',
      phone: '1-43535-3453-223',   
      createdAt: new Date(),
      updatedAt : new Date()
    }    
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null);  
  }
};
