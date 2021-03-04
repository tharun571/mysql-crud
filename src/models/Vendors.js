import { sequelize } from "../db/DBConnection.js";
import pkg from "sequelize";
const { DataTypes } = pkg;

export const Vendors = sequelize.define("Vendors", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNo: {
    type: DataTypes.BIGINT(10),
    allowNull: false,
  },
});
