import { sequelize } from "../db/DBConnection.js";
import { Customers } from "../models/Customers.js";

function CustomerService() {
  return {
    getAll: async () => {
      sequelize.sync();
      await Customers.findAll();
    },
  };
}

module.exports = CustomerService();
