import { sequelize } from "../db/DBConnection.js";
import { Customers } from "../models/Customers.js";

function CustomerService() {
  return {
    getAll: async () => {
      sequelize.sync();
      const customers = await Customers.findAll();
      return customers;
    },
    getById: async (id) => {
      sequelize.sync();
      return await Customers.findByPk(id);
    },
    createUser: async (firstName, lastName, phoneNo, address) => {
      sequelize.sync();
      const customer = await Customers.create({
        firstName: firstName,
        lastName: lastName,
        phoneNo: phoneNo,
        address: address,
      });
      console.log(customer);
      return customer;
    },
  };
}

export default CustomerService();
