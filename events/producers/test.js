const produce = require(".");
const { rabbitMQConfig } = require("../../config/rabbit_mq");
const { rabbitMQ } = require("../rabbit_MQ")

const testProducer = async (event) => {

    const someone = {
        nama: "Some One",
        age: 20,
    }

    const channel = await rabbitMQ.getChannel();
    const exchangeName = rabbitMQConfig.EXCHANGE_NAME;
   const routingKey = rabbitMQConfig.PERSON.ROUTING_KEY;

    produce(
        channel,
        exchangeName,
        routingKey,
        someone,
      )
}


module.exports = {testProducer};