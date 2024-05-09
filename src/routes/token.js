const express = require("express");
const router = express.Router();
const token = require("../controller/token");

router.route("/").get(token.list).post(token.create);

router.route("/:id").get(token.read).put(token.update).delete(token.delete);

module.exports = router;
