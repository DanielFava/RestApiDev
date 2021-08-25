const express = require("express");
const router = express.Router();

const Wallet = require("../../modals/wallets");

router.get("/wallets/:id?", (req, res) => {
  const { id } = req.body;

  try {
  } catch (error) {}
});

module.exports = router;
