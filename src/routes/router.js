const express = require("express");
const router = express.Router();

// Users
const getUsers = require("../app/controllers/users/getUsers");
router.use("/api", getUsers)
const postUsers = require("../app/controllers/users/postUsers");
router.use("/api", postUsers)
const deleteUsers = require("../app/controllers/users/deleteUsers");
router.use("/api", deleteUsers)
const putUsers = require("../app/controllers/users/putUsers");
router.use("/api", putUsers)

// Wallets
const getWallets = require("../app/controllers/wallets/getWallets");
router.use("/api", getWallets)
const postWallets = require("../app/controllers/wallets/postWallets");
router.use("/api", postWallets)
const deleteWallets = require("../app/controllers/wallets/deleteWallets");
router.use("/api", deleteWallets)
const putWallets = require("../app/controllers/wallets/putWallets");
router.use("/api", putWallets)

module.exports = router; 