const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Characters', {
    id:{
      type:DataTypes.INTEGER ,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    profilePic: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
};