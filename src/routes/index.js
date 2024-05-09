"use strict";

const router = require("express").Router();

// /auth:
router.use("/auth", require("./user"));
// /token:
router.use("/tokens", require("./token"));
// /book
router.use("/book", require("./Book"));
//category
router.use("/category", require("./category"));

router.use("/order", require("./order"));

module.exports = router;
