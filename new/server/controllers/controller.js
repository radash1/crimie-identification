const User = require("../models/user");
const Crime = require("../models/crime");

const login = (req, res) => {
  console.log("params", req.body);
  User.findOne({
    username: req.body.username,
    password: req.body.password,
  }).then((result) => {
    res.send({
      page: "login",
      result,
    });
  });
};

const search = (req, res) => {
  console.log("body", req.body);
  Crime.find({
    age: req.body.victimAge,
  }).then((result) => {
    res.send({
      page: "search",
      result,
    });
  });

  // Crime.where('type').equals('physical').exec((err, result) => {
  //   res.send({
  //     page: "search",
  //     result,
  //   });
  // });
};

const profile = (req, res) => {
  res.send({
    page: "profile",
  });
};

module.exports = {
  login,
  search,
  profile,
};
