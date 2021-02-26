import express from "express";
import config from "./config.js";
import mysql from "mysql";

const app = express();

const PORT = config.express.port;
const DATABASE = config.mysql.database;

const conn = mysql.createConnection({
  host: "localhost",
  user: config.mysql.user,
  password: config.mysql.password,
  database: DATABASE,
});

conn.connect();
conn.query("SHOW TABLES", (err, results, _fields) => {
  if (err) console.log(err);
  console.log(results);
});
conn.end;

app.get("/user", (_, res) => {
  res.send("Connected");
});

app.listen(PORT, () => {
  console.log(config.mysql.database);
});
