import { sequelize } from "../db/DBConnection.js";
import pkg from "sequelize";
const { DataTypes } = pkg;

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
