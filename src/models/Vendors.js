import { sequelize } from "../db/DBConnection.js";
const { DataTypes } = require("sequelize");

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
