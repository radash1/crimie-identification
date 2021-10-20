const express = require("express");
const { search, login, profile } = require("../controllers/controller");
const router = express.Router();

router.post("/login", login);
router.post("/search", search);
router.post("/profile", profile);

module.exports = router;
