const dotenv = require("dotenv");
dotenv.config();

const rabbitMQConfig = {
    RABBITMQ_ENDPOINT: process.env.RABBITMQ_ENDPOINT,

    EXCHANGE_NAME: "dms-exchange",

    PERSON: {
        QUEUE_NAME: "person-queue",
        ROUTING_KEY: "person"
    }
}


module.exports = {
    rabbitMQConfig
}