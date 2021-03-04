import { Router } from "express";
import ProductController from "../controller/ProductController.js"

const { getAllProducts, getAllProductsBought, createProduct, deleteProduct, buyProduct, updateProduct} = ProductController;


const productRouter = Router()

productRouter.get("/", getAllProducts);
productRouter.get("/bought", getAllProductsBought);
productRouter.post("/create", createProduct);
productRouter.delete("/delete/:id([0-9]+", deleteProduct);
productRouter.post("/buy", buyProduct);
productRouter.put("/update", updateProduct);


export default productRouter;
