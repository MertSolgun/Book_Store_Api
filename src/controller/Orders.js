const order = require("../models/Orders");
const book = require("../models/Book");
const mongoose = require("mongoose");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(order, {}, ["categoryId"]);
    res.status(200).send({ data });
  },
  create: async (req, res) => {
    const booksInOrder = req.body.books;

    let totalPrice = 0;

    for (let books of booksInOrder) {
      const bookInfo = await book.findById(books);
      if (bookInfo) {
        totalPrice += bookInfo.price;
      }
    }
    const data = await order.create({
      userId: req.body.userId,
      books: req.body.books.map((bookId) => ({ _id: bookId })),
      totalPrice: totalPrice,
    });

    res.status(201).send({ data });
  },
  read: async (req, res) => {
    const data = await order.findOne({ _id: req.params.id });
    res.status(200).send({ data });
  },
  update: async (req, res) => {
    const data = await order.updateOne({ _id: req.params.id }, req.body);
    res.status(202).send({
      data,
      newData: await order.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data = await order.deleteOne({ _id: req.params.id });
    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
