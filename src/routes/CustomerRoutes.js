import { Router } from "express";
import CustomerController from "../controller/CustomerController.js";

const { getAll, createCustomer, getById } = CustomerController;

const customerRouter = Router();

customerRouter.get("/", getAll);
customerRouter.post("/create", createCustomer);
customerRouter.get("/get/:id([0-9]+)", getById);

export default customerRouter;
