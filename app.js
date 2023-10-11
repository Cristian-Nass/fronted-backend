const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postsRoute = require("./routes/posts");
const bodyParser = require("body-parser");
require("dotenv/config");

//Middleware app.use
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Home");
});

//Middleware app.use
app.use("/post", postsRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connect to db")
);

app.listen(4000);
