const express = require("express");
const { search, login, profile } = require("../controllers/controller");
const router = express.Router();

router.post("/login", login);
router.get("/search", search);
router.get("/profile", profile);

module.exports = router;
