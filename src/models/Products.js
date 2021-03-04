import { sequelize } from "../db/DBConnection.js";
import pkg from "sequelize";
const { DataTypes } = pkg;

export const Products = sequelize.define("Products", {
  productName: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.BIGINT(11),
    allowNull: false,
  },
  vendorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
