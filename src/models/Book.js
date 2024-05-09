const { mongoose } = require("../config/dbConnection");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    images: [],
    author: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      default: 0,
      trim: true,
    },
  },
  {
    collection: "book",
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
