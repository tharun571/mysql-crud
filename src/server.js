const app = require("./app");
const config = require("../config/config");

app.set("port", process.env.PORT || config.express.port);

app.listen(app.get("port"), () => {
  console.log("Connected");
});
