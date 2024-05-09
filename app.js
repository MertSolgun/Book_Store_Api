const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());

/* ----Database Connection------ */
require("./src/config/dbConnection");

/* ----To Accept to Json------ */
app.use(express.json());

//To accept to form data
app.use(express.urlencoded({ extended: true }));

app.all("/", (req, res) => {
  res.send({
    message: "Welcome Book Store",
    user: req.user,
  });
});

app.use(require("./src/middlewares/authentication"));
app.use(require("./src/middlewares/queryHandler"));

/* ----Router------ */

app.use("/book", require("./src/routes/Book"));
app.use("/category", require("./src/routes/category"));

/* ----Router------ */

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server runned");
});
