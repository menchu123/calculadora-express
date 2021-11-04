const express = require("express");
const debug = require("debug")("calculator:server");

const router = express.Router();

router.get("/", (req, res) => {
  debug(req.query);
  res.json("holi");
});

module.exports = router;
