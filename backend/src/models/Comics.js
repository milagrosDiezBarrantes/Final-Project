const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define("Comics", {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Otro comic",
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
    },
    img: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    pages: { 
      type: DataTypes.INTEGER,
      allowNull: true,
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
    }
  });
};

