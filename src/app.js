const express = require("express");
const bodyParser = require("body-parser");
const customerRouter = require("./routes/CustomerRoutes");
const productsRouter = require("./routes/ProductRoutes");
const vendorRouter = require("./routes/VendorRoutes");
const model = require("./db/DBConnection");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api/customers", customerRouter);
app.use("/api/products", productsRouter);
app.use("/api/vendors", vendorRouter);

module.exports = app;
