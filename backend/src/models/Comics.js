const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define("Comics", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
    },
    img: {
      type: DataTypes.TEXT,
    },
    pages: { 
      type: DataTypes.STRING,
      allowNull: true,
    },
    banner: { 
      type: DataTypes.ENUM("true","false"),
      defaultValue: "false",
      allowNull: true,
    }
  });
};

