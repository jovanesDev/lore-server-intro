const express = require("express");
const { getBalance, setBalance } = require("../../controllers/balance.controller");
const balanceRouter = express.Router();

balanceRouter.get("/", getBalance)
balanceRouter.post("/charge",setBalance)

module.exports = {
    balanceRouter,
};
