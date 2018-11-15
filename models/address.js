'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    street: DataTypes.TEXT,
    city: DataTypes.TEXT,
    zip_code: DataTypes.TEXT
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};