const express = require("express");
const app = express();
require("dotenv").config();

/* ----Database Connection------ */
require("./src/config/dbConnection");

/* ----To Accept to Json------ */
app.use(express.json());

//To accept to form data
app.use(express.urlencoded({ extended: true }));

app.all("/", (req, res) => {
  res.send("Welcome Book Store");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server runned");
});

//solgunmert
//jsVOhNag4k201ZT5
