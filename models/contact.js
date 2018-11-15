'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    phone: DataTypes.TEXT
  }, {});
  Contact.associate = function (models) {
    // associations can be defined here
  };
  return Contact;
};