const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postsRoute = require("./routes/posts");
const bodyParser = require("body-parser");

//Middleware app.use
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Home");
});

//Middleware app.use
app.use("/post", postsRoute);

mongoose.connect(
  "mongodb+srv://cristian_nass:Ppl4kDIR7TshY1zi@cluster.rtl3m8s.mongodb.net/practice?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connect to db")
);

app.listen(4000);
