import express from "express";
import { Customers } from "./models/Customers.js";

const app = express();

app.use(express.static("public"));

// app.use("/api", router);

export { app };
