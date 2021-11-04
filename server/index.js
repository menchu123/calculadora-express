const chalk = require("chalk");
const debug = require("debug")("calculator:server");
const express = require("express");
const morgan = require("morgan");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.yellow(`Escuchando en el puerto ${port}`));
  });
};

module.exports = initializeServer;
