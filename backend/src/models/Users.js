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
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    picture: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    role: {
      type: DataTypes.ENUM('ROLE_USER', 'ROLE_ADMIN','ROLE_SUPER_ADMIN', 'ROLE_BANNED'),
      defaultValue: 'ROLE_USER',
      allowNull: true
  },
  });
};

