import { app } from "./app.js";
import config from "../config/config.js";

app.set("port", process.env.PORT || config.express.port);

app.listen(app.get("port"), () => {
  console.log("Connected");
});
