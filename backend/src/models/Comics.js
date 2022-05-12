const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define("Comics", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idPrincipal:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      allowNull:false

    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    img: {
      type: DataTypes.TEXT,
    },
    pages: { 
      type: DataTypes.INTEGER,
      allowNull: true,
      default:0
    },
    banner: { 
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true,
    },
    creators: { 
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
      allowNull: true,
    },
    url:{
      type:DataTypes.TEXT,
      defaultValue:"Not Have PDF",
      allowNull:true
    }
  });
};

