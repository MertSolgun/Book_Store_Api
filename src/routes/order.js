const express = require("express");
const router = express.Router();
const order = require("../controller/Orders");

router.route("/").get(order.list).post(order.create);

router.route("/:id").get(order.read).put(order.update).delete(order.delete);

module.exports = router;
