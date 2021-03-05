const CustomerService = require("../services/CustomerServices");

function CustomerController() {
  const getAllCustomers = (_, res) => {
    CustomerService.getAll().then((customers) => {
      if (!customers) {
        res.status(500).send("Internal server error. Please try again later");
      } else {
        res.status(200).send(customers);
      }
    });
  };

  const getCustomerById = (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    CustomerService.getById(id).then((customer) => {
      if (!customer) {
        res.status(404).json({ message: "Customer not found" });
      } else {
        res.status(200).send(customer);
      }
    });
  };

  const createCustomer = (req, res) => {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const phoneNo = parseInt(req.body.phone_number);
    const address = req.body.address;
    if (!firstName || !lastName || !phoneNo || !address) {
      return res.status(501).json({ message: "Fill all fields" });
    }
    CustomerService.createUser(firstName, lastName, phoneNo, address).then(
      (customer) => {
        if (!customer) {
          res.status(500).send("Internal Server Error. Please try again later");
        } else {
          res.status(201).send(customer);
        }
      }
    );
  };

  const deleteCustomer = (req, res) => {
    const id = parseInt(req.params.id);
    CustomerService.deleteCustomer(id).then((status) => {
      if (!status) {
        res.status(404).send("User with id " + id + " cannot be deleted");
      } else {
        res.status(200).send("Successfully deleted");
      }
    });
  };
  return {
    getAll: getAllCustomers,
    getById: getCustomerById,
    createCustomer: createCustomer,
    deleteCustomer: deleteCustomer,
  };
}

module.exports = CustomerController();
