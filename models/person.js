'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
  };
  return Person;
};