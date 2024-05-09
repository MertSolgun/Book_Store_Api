const { mongoose } = require("../config/dbConnection");

const tokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    token: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "token",
    timestamps: true,
  }
);

module.exports = mongoose.model("Token", tokenSchema);
