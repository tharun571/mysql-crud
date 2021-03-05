"use strict";

const fs = require("fs");
const config = require("../../config/config");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const db = {};

const DATABASE = config.mysql.database;
const USERNAME = config.mysql.user;
const PASSWORD = config.mysql.password;

const sequelize = new Sequelize({
  dialect: "mysql",
  database: DATABASE,
  username: USERNAME,
  password: PASSWORD,
});

const appDir = path.dirname(require.main.filename);

fs.readdirSync(appDir + "\\src\\models")
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    console.log(file);
    const model = require(path.join(appDir + "\\src\\models", file))(
      sequelize,
      Sequelize.DataTypes
    );
    console.log(model.name);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
