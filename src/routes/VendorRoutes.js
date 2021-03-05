const Router = require("express").Router;
const VendorController = require("../controller/VendorController.js");

const { getAll, getById, createVendor, deleteVendor } = VendorController;

const vendorRoute = Router();

vendorRoute.get("/", getAll);
vendorRoute.post("/createVendor", createVendor);
vendorRoute.get("/getVendor/:id([0-9]+)", getById);
vendorRoute.get("/vendorDelete/:id([0-9]+)",deleteVendor);

module.exports = vendorRoute;