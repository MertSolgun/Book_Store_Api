const express = require("express");
const router = express.Router();
const book = require("../controller/Book");

router.route("/book").get(book.list).post(book.create);

router.route("/:id").get(book.read).put(book.update).delete(book.delete);

module.exports = router;
