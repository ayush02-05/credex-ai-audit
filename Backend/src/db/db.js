const { default: mongoose } = require("mongoose");

async function ConnectedToDB() {
  await mongoose
    .connect(process.env.MONGODB)
    .then(() => {
      console.log("Connected to database ✅");
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = ConnectedToDB;
