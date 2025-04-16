const logger = require("../../utils/logger");


const consume = (
  channel,
  exchangeName,
  routingKey,
  queueName,
) => {
  return new Promise(async (resolve, reject) => {
    const queue = await channel.assertQueue(queueName, {
      durable: true,
      autoDelete: false,
    });

    await channel.bindQueue(queue.queue, exchangeName, routingKey);

    channel
      .consume(queue.queue, async (msg) => {
        if (msg) {
          resolve(msg);
          channel.ack(msg);
        }
      })
      .catch((error) => {
        logger.error(`Error consuming auth email message consume(): ${error}`);
        resolve("error");
      });
  });
};

module.exports = consume;
