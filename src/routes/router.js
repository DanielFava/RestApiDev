const express = require("express");
const router = express.Router();

// Users
const getUsers = require("../app/controllers/users/getUsers");
const postUsers = require("../app/controllers/users/postUsers");
const deleteUsers = require("../app/controllers/users/deleteUsers");
const putUsers = require("../app/controllers/users/putUsers");

// Wallets
const getWallets = require("../app/controllers/wallets/getWallets");
const postWallets = require("../app/controllers/wallets/postWallets");
const deleteWallets = require("../app/controllers/wallets/deleteWallets");
const putWallets = require("../app/controllers/wallets/putWallets");

router.use("/api", getUsers)
router.use("/api", postUsers)
router.use("/api", deleteUsers)
router.use("/api", putUsers)

router.use("/api", getWallets)
router.use("/api", postWallets)
router.use("/api", deleteWallets)
router.use("/api", putWallets)

module.exports = router; 