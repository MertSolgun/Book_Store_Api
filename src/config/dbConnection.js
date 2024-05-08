const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Db Connected"))
  .catch(() => console.log("Db not connected"));

module.exports = {
  mongoose,
};
