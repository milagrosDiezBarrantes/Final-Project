const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Creators', {
    id:{
      type:DataTypes.INTEGER ,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePic: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    comics:{
      type:DataTypes.INTEGER ,
      primaryKey: true,
    },
    series:{
      type:DataTypes.INTEGER ,
      primaryKey: true,
    },
    stories:{
      type:DataTypes.INTEGER ,
      primaryKey: true,
    },
    events:{
      type:DataTypes.INTEGER ,
      primaryKey: true,
    },
  });
};