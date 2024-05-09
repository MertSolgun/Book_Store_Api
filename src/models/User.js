const { mongoose } = require("../config/dbConnection");
const passEncrypt = require("../helpers/passEncrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      set: (password) => passEncrypt(password),
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "user",
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
