import pkg from "sequelize";
const { Sequelize, Model, DataTypes } = pkg;
import config from "./config.js";

const DATABASE = config.mysql.database;

export const sequelize = new Sequelize({
  dialect: "mysql",
  database: DATABASE,
  username: "nanth",
  password: "nanth",
});

try {
  await sequelize.authenticate();
  console.log("Success");
} catch (err) {
  console.error(err);
}

export const Customer = sequelize.define("Customer", {
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

export const Product = sequelize.define("Product", {
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
export const Vendor = sequelize.define("Vendor", {
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

export const ProductBought = sequelize.define("ProductBought", {
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
