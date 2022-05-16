const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Characters', {
    
    idPrincipal:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type:DataTypes.INTEGER ,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    comics: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    series: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    stories: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    events: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
  });
};