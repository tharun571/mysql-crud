import Sequelize from "sequelize";
import config from "../../config/config.js";

const DATABASE = config.mysql.database;
const USERNAME = config.mysql.user;
const PASSWORD = config.mysql.password;

const sequelize = new Sequelize({
  dialect: "mysql",
  database: DATABASE,
  username: USERNAME,
  password: PASSWORD,
});

try {
  await sequelize.authenticate();
  console.log("Success");
} catch (err) {
  console.error(err);
}

export { sequelize };
