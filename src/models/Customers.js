import { sequelize } from "../db/DBConnection.js";
import pkg from "sequelize";
const { DataTypes } = pkg;

export const Customers = sequelize.define("Customers", {
  firstName: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(20),
  },
  phoneNo: {
    type: DataTypes.BIGINT(11),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
