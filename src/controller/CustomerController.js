import { CustomerService } from "../services/CustomerServices.js";

function CustomerController() {
  const getAllCustomers = (_, res) => {
    const users = CustomerService.getAll();
    res.send(users);
  };
}

module.exports = CustomerController();
