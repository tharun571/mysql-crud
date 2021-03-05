const db = require("../db/DBConnection");

function CustomerService() {
  return {
    getAll: async () => {
      db.sequelize.sync();
      const customers = await db.Customers.findAll();
      return customers;
    },
    getById: async (id) => {
      db.sequelize.sync();
      return await db.Customers.findByPk(id);
    },
    createUser: async (firstName, lastName, phoneNo, address) => {
      db.sequelize.sync();
      const customer = await db.Customers.create({
        firstName: firstName,
        lastName: lastName,
        phoneNo: phoneNo,
        address: address,
      });
      return customer;
    },
    deleteCustomer: async (id) => {
      db.sequelize.sync();
      const customer = await db.Customers.findByPk(id);
      if (customer == null) {
        return false;
      } else {
        await customer.destroy();
        return true;
      }
    },
  };
}

module.exports = CustomerService();
