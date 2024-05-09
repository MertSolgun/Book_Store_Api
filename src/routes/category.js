const express = require("express");
const router = express.Router();
const category = require("../controller/category");

router.route("/").get(category.list).post(category.create);

router
  .route("/:id")
  .get(category.read)
  .put(category.update)
  .delete(category.delete);

module.exports = router;
