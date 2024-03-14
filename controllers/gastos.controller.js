const { fetchGetBalance } = require("../services/balance.service.js");
let gastos = [];

const addGasto = async (req, res) => {
  const gasto = req.body;

  if (!gasto) {
    return res.status(400).json({
      status: 400,
      message: "No pusiste gasto",
    });
  }
  try {
    const balance = await fetchGetBalance();
    console.log(balance)
    if (balance.data > gasto.monto) {
      gastos.push(gasto);
      return res.status(400).json({
        status: 200,
        message: "Se agrego el gasto correctamente !",
      });
    } else {
      return res.status(400).json({
        status: 401,
        message: "No tenes fondos suficientes",
      });
    }
  } catch (error) {
    return res.status(500).json({
        status: 500,
        message: "Internal Error",
      });
  }
};

const getGastos = (req, res) => {
  return res.status(200).json({
    data: gastos,
  });
};

const getGastoById = (req, res) => {
  const { id } = req.params;
  const gasto = gastos.find((g) => g.id === id);
  if (gasto) {
    return res.status(200).json({
      data: gasto,
    });
  } else {
    return res.status(404).json({
      status: 400,
      message: "No existe el gasto",
    });
  }
};

const getSuma = (req, res) => {
  const total = gastos.reduce((acc, curr) => {
    acc += curr.monto;
    return acc;
  }, 0);
  if (total < 1) {
    res.status(200).json({
      data: "Aun no tenes gastos",
    });
  } else {
    res.status(200).json({
      data: total,
    });
  }
};

module.exports = {
  addGasto,
  getGastos,
  getGastoById,
  getSuma,
};
