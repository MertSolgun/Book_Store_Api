const express = require("express");
const router = express.Router();
const user = require("../controller/User");

router.route("/").get(user.list);

router.route("/login").post(user.login);
router.route("/register").post(user.register);
router.route("/:id").delete(user.delete);

module.exports = router;
