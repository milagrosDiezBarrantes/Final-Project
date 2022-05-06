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
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profilePic: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    comics:{
      type:DataTypes.INTEGER ,
      primaryKey: true,
      allowNull:true
    },
    series:{
      type:DataTypes.INTEGER ,
      primaryKey: true,
      allowNull:true
    },
    stories:{
      type:DataTypes.INTEGER ,
      primaryKey: true,
      allowNull:true
    },
    events:{
      type:DataTypes.INTEGER ,
      primaryKey: true,
      allowNull:true
    },
  });
};