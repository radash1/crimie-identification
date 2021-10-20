var express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const { json, urlencoded } = require("body-parser");

const app = express();

app.use(cors());

app.use(json());
app.use(urlencoded({ extended: true }));

// connect to database
const dbURL = "mongodb+srv://root:1234@cluster69.xondy.mongodb.net/criminal_db?retryWrites=true&w=majority";
mongoose
  .connect(dbURL)
  .then((result) => {
    console.log("connected to db");

    // listen fore request
    app.listen(5000);
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api", routes);
