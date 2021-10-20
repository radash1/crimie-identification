const User = require("../models/user");

const login = (req, res) => {
  User.findOne({ username: "abc", password: "123" }).then((result) => {
    res.send({
      page: "login",
      data: result,
    });
  });
};

const search = (req, res) => {
  res.send({
    page: "search",
  });
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
