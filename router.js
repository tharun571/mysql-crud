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

router.post("/customer_create",(req,res) => {
  const firstName = req.body.first_name
  const lastName = req.body.last_name
  const phNum = req.body.phone_number
  (async () => {
    sequelize.sync();
    const customer = await Customer.create({
      firstName: firstName,
      lastName: lastName,
      phoneNo: phNum,
    });
    res.send(customer);
  })();
  res.end()
})

router.post("/vendor_create",(req,res) => {
  const firstName = req.body.vendor_first_name
  const lastName = req.body.vendor_last_name
  const phNum = req.body.vendor_number
  (async () => {
    sequelize.sync();
    const vendor = await Customer.create({
      firstName: firstName,
      lastName: lastName,
      phoneNo: phNum,
    });
    res.send(vendor);
  })();
  res.end()
})

router.post("/vendor_create",(req,res) => {
  const firstName = req.body.vendor_first_name
  const lastName = req.body.vendor_last_name
  const phNum = req.body.vendor_number
  (async () => {
    sequelize.sync();
    const vendor = await Customer.create({
      firstName: firstName,
      lastName: lastName,
      phoneNo: phNum,
    });
    res.send(vendor);
  })();
  res.end()
})

router.post("/product_buy",(req,res) => {
  const productId = req.body.product_id
  const customer_name = req.body.customer_name
  const customer_number = req.body.customer_number
  const quantity = req.body.product_quantity
  (async () => {
    sequelize.sync();
    var cusId = await Customer.findOne({where: {phoneNo: customer_number}})
    const productBuy = await ProductBought.create({
      customerId: cusId,
      productId: productId,
      quantity: quantity,
    });
    res.send(productBuy);
  })();
  res.end()
})

router.post("/product_create",(req,res) => {
  const vendor_number = req.body.vendor_number
  const vendor_name = req.body.vendor_name
  const product_name = req.body.product_name
  const prod_qty = req.body.product_quantity
  (async () => {
    sequelize.sync();
    var vendorId = await Vendor.findOne({where: {phoneNo: vendor_number}})
    const product = await Product.create({
      productName: product_name,
      quantity: prod_qty,
      vendorId: vendorId,
    });
    res.send(productBuy);
  })();
  res.end()
})

router.put("/product_update",(req,res) => {
  const productId = req.body.product_id
  const customer_name = req.body.customer_name
  const customer_number = req.body.customer_number
  const quantity = req.body.product_quantity
  (async () => {
    sequelize.sync();
    const productBuy = await ProductBought.update({
      productId: productId,
      quantity: quantity,
    },
    {
      where: {
        customerId: cusId,
      }
    });
    res.send(productBuy);
  })();  
})