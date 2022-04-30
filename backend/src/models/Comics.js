const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define("Comics", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
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
      defaultValue: "true",
      allowNull: true,
    },
    
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    }
  },{
    timestamps:false
  });
};

