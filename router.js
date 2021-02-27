import express from "express";
import {
  sequelize,
  Customer,
  Product,
  ProductBought,
  Vendor,
} from "./models.js";
export const router = express.Router();

router.get("/customer/id/:id([0-9]+)", (req, res) => {
  (async () => {
    sequelize.sync();
    const user = await Customer.findByPk(req.params.id);
    if (user == null) {
      res.send("User not found");
    } else {
      res.send(user);
    }
  })();
});

router.get("/product/id/:id([0-9]+)", (req, res) => {
  (async () => {
    sequelize.sync();
    const product = await Product.findByPk(req.params.id);
    if (product == null) {
      res.send("Product not found");
    } else {
      res.send(user);
    }
  })();
});

router.get("/product/name/:name([a-zA-Z]+)", (req, res) => {
  (async () => {
    sequelize.sync();
    const product = await Product.findAll({
      where: { productName: req.params.name },
    });
    if (product == null) {
      res.send("Product not found");
    } else {
      res.send(product);
    }
  })();
});

router.get("/:customerId([0-9]+)/productbought", (req, res) => {
  (async () => {
    sequelize.sync();
    const productsBought = await ProductBought.findAll({
      where: { customerId: req.params.customerId },
    });
    res.send(productsBought);
  })();
});

router.post("/vendor", (req, res) => {
  const ven = req.body;
  (async () => {
    sequelize.sync();
    const vendor = await Vendor.create({
      firstName: ven.firstName,
      lastName: ven.lastName,
      phoneNo: ven.phNum,
    });
    res.send(vendor);
  })();
});

router.get("/vendors", (_, res) => {
    const vendors = await Vendor.findAll();
    res.send(vendors);
});
router.get("/customers", (_, res) => {
    const customers = await Customer.findAll();
    res.send(customers);
});
router.get("/products", (_, res) => {
    const products = await Product.findAll();
    res.send(products);
});
router.get("/productsBought", (_, res) => {
    const productsBought = await ProductBought.findAll();
    res.send(productsBought);
});
