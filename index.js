import config from "./config.js";
import bodyParser from "body-parser";
import express from "express";
import { router } from "./router.js";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = config.express.port;

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Connected");
});
