import express from "express";
import config from "./config.js";
import bodyParser from "body-parser";
import { sequelize, Customer, Product } from "./models.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = config.express.port;

const router = express.Router();

(async () => {
  await sequelize.sync();
  const user = await Customer.create({
    firstName: "a",
    lastName: "b",
    phoneNo: "1234567890",
    address: "hgsfdb",
  });
  console.log(user.toJSON());
})();

router.get("/:id([0-9]+)", (req, res) => {
  res.send(req.params.id);
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Connected");
});
