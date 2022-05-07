const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Payments", {
    order: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    client_id: { 
      type: DataTypes.UUID,
      allowNull: false
    },
    plan: {
        type: DataTypes.STRING,
        allowNull: false
      },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  });
};