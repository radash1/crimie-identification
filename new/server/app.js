var express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const {json} = require("body-parser");

const app = express();

// connect to database
const dbURL = "mongodb://root:1234@localhost/criminal_db";
mongoose
  .connect(dbURL)
  .then((result) => {
    console.log("connected to db");

    // listen fore request
    app.listen(5000);
  })
  .catch((err) => console.log(err));

// app.listen(5000);
app.use(json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api", routes);
