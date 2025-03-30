require("dotenv").config({ path: "./config/config.env" });

const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  console.log("hello AI");
});

app.use("/ai", aiRoutes);

module.exports = app;
