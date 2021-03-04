const { Sequelize } = require("sequelize");

const DATABASE = config.mysql.database;
const USERNAME = config.mysql.username;
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

module.exports = sequelize;
