const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config/config");
const customerRouter = require("./src/routes/CustomerRoutes");
const productsRouter = require("./src/routes/ProductRoutes");
const vendorRouter = require("./src/routes/VendorRoutes");
const model = require("./src/db/DBConnection");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./public"));

app.use("/api/customers", customerRouter);
app.use("/api/products", productsRouter);
app.use("/api/vendors", vendorRouter);

app.set("port", process.env.PORT || config.express.port);

app.listen(app.get("port"), () => {
  console.log("Connected");
});
