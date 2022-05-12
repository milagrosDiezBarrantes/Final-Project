const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Users", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    email: { 
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    firstName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    lastName:{
      type: DataTypes.TEXT,
      allowNull: true,
    },
    userName:{
      type:DataTypes.TEXT, 
      allowNull:true,
     
    }, 
    age:{
      type: DataTypes.INTEGER,
    }, 
    password:{
      type: DataTypes.TEXT,
      allowNull: true,
    }, 
    picture:{
      type: DataTypes.TEXT, 
      allowNull:true,
    },
    nickname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name:{
      type: DataTypes.STRING, 
    },
    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    role: {
      type: DataTypes.ENUM('ROLE_USER', 'ROLE_ADMIN','ROLE_SUPER_ADMIN', 'ROLE_BANNED'),
      default: 'ROLE_USER'
  },
  });
};

