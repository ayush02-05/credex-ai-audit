require("dotenv").config();
const app = require("./src/app");
const ConnectedToDB = require("./src/db/db");

app.listen(process.env.PORT, () => {
  ConnectedToDB();
  console.log("Server is now running on port:", process.env.PORT);
});
