const User = require("../models/user");
const Crime = require("../models/crime");
const Prevention = require("../models/prevention");

const login = (req, res) => {
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
  Crime.find({
    type: req.body.type,
  }).then((result) => {
    res.send({
      page: "search",
      result,
    });
  });
};

const profile = (req, res) => {
  Prevention.findOne({
    type: "physical",
  }).then((result) => {
    res.send({
      page: "profile",
      result,
    });
  });
};

module.exports = {
  login,
  search,
  profile,
};
