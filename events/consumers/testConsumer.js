const consume = require(".");
const { rabbitMQConfig } = require("../../config/rabbit_mq");
const { rabbitMQ } = require("../rabbit_MQ");

const testConsumer = async () => {

    const channel = await rabbitMQ.getChannel();
    const exchangeName = rabbitMQConfig.EXCHANGE_NAME;
   const routingKey = rabbitMQConfig.PERSON.ROUTING_KEY;
   const queueName = rabbitMQConfig.PERSON.QUEUE_NAME;
    const msg = await consume(
        channel,
        exchangeName,
        routingKey,
        queueName,
      )

      const data = JSON.parse(msg.content.toString());

      console.log(data);
      
}

module.exports = {testConsumer};