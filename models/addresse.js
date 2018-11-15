'use strict';
module.exports = (sequelize, DataTypes) => {
  const Addresse = sequelize.define('Addresse', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {});
  Addresse.associate = function(models) {
    // associations can be defined here
  };
  return Addresse;
};