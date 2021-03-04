import express from "express";
import bodyParser from "body-parser";
import customerRouter from "./routes/CustomerRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api/customers", customerRouter);

export { app };
