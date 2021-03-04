const Router = require("express").Router;
const CustomerController = require("../controller/CustomerController.js");

const { getAll, createCustomer, getById } = CustomerController;

const customerRouter = Router();

customerRouter.get("/", getAll);
customerRouter.post("/create", createCustomer);
customerRouter.get("/get/:id([0-9]+)", getById);

module.exports = customerRouter;
