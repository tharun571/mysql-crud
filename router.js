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
  (async () => {
    sequelize.sync();
    const vendors = await Vendor.findAll();
    res.send(vendors);
  })();
});

router.get("/customers", (_, res) => {
  (async () => {
    sequelize.sync();
    const customers = await Customer.findAll();
    res.send(customers);
  })();
});
router.get("/products", (_, res) => {
  (async () => {
    sequelize.sync();
    const products = await Product.findAll();
    res.send(products);
  })();
});

router.get("/productsBought", (_, res) => {
  (async () => {
    sequelize.sync();
    const productsBought = await ProductBought.findAll();
    res.send(productsBought);
  })();
});

router.post("/customer_create", (req, res) => {
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const phNum = req.body.phone_number;
  const addr = req.body.address;
  (async () => {
    sequelize.sync();
    const customer = await Customer.create({
      firstName: firstName,
      lastName: lastName,
      phoneNo: phNum,
      address: addr,
    });
    res.send(customer);
  })();
});

router.post("/vendor_create", (req, res) => {
  const firstName = req.body.vendor_first_name;
  const lastName = req.body.vendor_last_name;
  const phNum = req.body.vendor_number;
  (async () => {
    sequelize.sync();
    const vendor = await Vendor.create({
      firstName: firstName,
      lastName: lastName,
      phoneNo: phNum,
    });
    res.send(vendor);
  })();
});

router.post("/product_buy", (req, res) => {
  const productId = req.body.product_id;
  const customer_name = req.body.customer_name;
  const customer_number = req.body.customer_number;
  (async () => {
    sequelize.sync();
    const cusId = await Customer.findOne({
      where: { firstName: customer_name, phoneNo: customer_number },
    });
    const productBuy = await ProductBought.create({
      customerId: cusId,
      productId: productId,
    });
    res.send(productBuy);
  })();
});

router.post("/product_create", (req, res) => {
  const vendor_number = req.body.vendor_number;
  const vendor_name = req.body.vendor_name;
  const product_name = req.body.product_name;
  const prod_qty = req.body.product_quantity;
  (async () => {
    sequelize.sync();
    const vendorId = await Vendor.findOne({
      where: { firstName: vendor_name, phoneNo: vendor_number },
    });
    if (vendorId == null) {
      res.send("Vendor not found");
    } else {
      const product = await Product.create({
        productName: product_name,
        quantity: prod_qty,
        vendorId: vendorId,
      });
      res.send(product);
    }
  })();
});

router.delete("/productDelete/:id([0-9]+)", (req, res) => {
  (async () => {
    sequelize.sync();
    const product = await Product.findByPk(req.body.id);
    if (product == null) {
      res.send("No product found");
    } else {
      product.destroy();
      res.send("Done");
    }
  })();
});

router.delete("/customerDelete/:id([0-9]+)", (req, res) => {
  (async () => {
    sequelize.sync();
    const customer = await Customer.findByPk(req.body.id);
    if (customer == null) {
      res.send("No customer found");
    } else {
      customer.destroy();
      res.send("Done");
    }
  })();
});

router.delete("/vendorDelete/:id([0-9]+)", (req, res) => {
  (async () => {
    sequelize.sync();
    const vendor = await Vendor.findByPk(req.body.id);
    if (vendor == null) {
      res.send("No vendor found");
    } else {
      vendor.destroy();
      res.send("Done");
    }
  })();
});
