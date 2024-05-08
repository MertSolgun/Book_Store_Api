const { mongoose } = require("../config/dbConnection");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    collection: "category",
    timestamps: "true",
  }
);

module.exports = mongoose.model("Category", categorySchema);
