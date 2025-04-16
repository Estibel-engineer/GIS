const { winstonLogger } = require("cris-shared");
const { appConfig } = require("../config/app_config");

const logger = winstonLogger(
  appConfig.LOKI_URL,
  "Stakeholder Service",
  "debug",
  appConfig.NODE_ENV
);

module.exports = logger;