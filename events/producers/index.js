const logger = require("../../utils/logger");

const produce = async (
  channel,
  exchangeName,
  routingKey,
  data,
) => {
  try {
    await channel?.assertExchange(exchangeName, "direct");

    channel?.publish(
      exchangeName,
      routingKey,
      Buffer.from(JSON.stringify(data))
    );
    logger.info(`Success producing, exchange name ${exchangeName}.`);
    return "success";
  } catch (error) {
    logger.error(
      `Error produced, exchange name ${exchangeName} message produce(): ${error}`
    );
    return "error";
  }
};

module.exports = produce;
