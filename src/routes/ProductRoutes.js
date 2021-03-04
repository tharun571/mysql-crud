import { Router } from "express";
import ProductController from "../controller/ProductController.js"

const { getAllProducts, getAllProductsBought } = ProductController;


const productRouter = Router()

productRouter.get("/", getAllProducts);
productRouter.get("/bought", getAllProductsBought);
productRouter.post("/create", createProduct);

export default productRouter;
