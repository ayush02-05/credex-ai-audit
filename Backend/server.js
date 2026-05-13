require("dotenv").config();
const app = require("./src/app");
const ConnectToDB = require("./src/db/db");

const PORT = process.env.PORT || 4000;

ConnectToDB();
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}✅`);
});
