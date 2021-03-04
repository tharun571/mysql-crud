import { Router } from "express";
import VendorController from "../controller/VendorController.js";

const { getAll, getById, createVendor, deleteVendor } = VendorController;

const vendorRoute = Router();

vendorRoute.get("/vendors", getAll);
vendorRoute.post("/createVendor", createVendor);
vendorRoute.get("/getVendor/:id([0-9]+)", getById);
vendorRoute.delete("/vendorDelete/:id([0-9]+)",deleteVendor);

export default vendorRoute;
