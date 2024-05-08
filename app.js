const express = require("express");
const app = express();
require("dotenv").config();

/* ----Database Connection------ */
require("./src/config/dbConnection");

/* ----To Accept to Json------ */
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server runned");
});

//solgunmert
//jsVOhNag4k201ZT5
