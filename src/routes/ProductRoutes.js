const Router = require("express").Router;
const ProductController = require("../controller/ProductController.js");

const { getAllProducts, getAllProductsBought, createProduct, deleteProduct, buyProduct, updateProduct} = ProductController;


const productRouter = Router()

productRouter.get("/", getAllProducts);
productRouter.get("/bought", getAllProductsBought);
productRouter.post("/create", createProduct);
productRouter.get("/delete/:id([0-9]+)", deleteProduct);
productRouter.post("/buy", buyProduct);
productRouter.put("/update", updateProduct);


module.exports = productRouter;
