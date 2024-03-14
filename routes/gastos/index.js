const express = require("express");
const gastosRouter = express.Router();
const { addGasto, getGastos, getGastoById, getSuma } = require("../../controllers/gastos.controller");

gastosRouter.post("/add",addGasto)
gastosRouter.get("/",getGastos)
gastosRouter.get("/total",getSuma)
gastosRouter.get("/:id",getGastoById)

module.exports = {
  gastosRouter,
};
