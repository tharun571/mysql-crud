import { sequelize } from "../db/DBConnection.js";
const { DataTypes } = require("sequelize");

export const ProductsBought = sequelize.define("ProductsBought", {
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
