const { mongoose } = require("../config/dbConnection");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    books: [
      {
        bookId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Book",
        },
      },
    ],

    totalPrice: {
      type: Number,
    },
  },
  {
    collection: "order",
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
