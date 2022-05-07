const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Plans", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  });
};