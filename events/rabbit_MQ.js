const amqplib = require("amqplib");
const { InternalServerError } = require("cris-shared");
const {rabbitMQConfig} = require("../config/rabbit_mq");
const logger = require("../utils/logger");

class RabbitMQ {
  static instance;
  isConnecting = false;

  constructor() {
    this.connection = undefined;
    this.channel = undefined;
  }

  static getInstance() {
    if (!RabbitMQ.instance) {
      RabbitMQ.instance = new RabbitMQ();
    }
    return RabbitMQ.instance;
  }

  async init() {
    await this.createConnection();
  }

  async createConnection() {
    if (this.connection) {
      logger.info("🟡 RabbitMQ connection already exists");
      return;
    }

    if (this.isConnecting) {
      logger.info("🟢 Connection is already being established. Waiting...");
      return;
    }

    this.isConnecting = true;
    logger.info(`⌛️ Connecting to Rabbit-MQ Server`);

    try {
      
      this.connection = await amqplib.connect(rabbitMQConfig.RABBITMQ_ENDPOINT);
      this.channel = await this.connection.createChannel();

      await this.channel.assertExchange(
        rabbitMQConfig.EXCHANGE_NAME,
        "direct",
        { durable: true, autoDelete: false }
      );

      this.setupConnectionCloseHandlers();
      logger.info("✅ RabbitMQ connection and channel created.");
    } catch (error) {
      console.log(error);
      
      throw new InternalServerError(
        "🚫 RabbitMQ connection error",
        "createConnection()",
        error
      );
    } finally {
      this.isConnecting = false;
    }
  }

  setupConnectionCloseHandlers() {
    process.once("SIGINT", async () => {
      await this.closeConnection();
      logger.info("🔴 RabbitMQ connection closed!");
      process.exit(0);
    });

    this.connection?.connection.on("error", async (err) => {
      logger.error(`🚫 RabbitMQ connection error: ${err}`);
      await this.closeConnection();
      process.exit(1);
    });

    this.channel?.on("close", async () => {
      logger.info("🔴 RabbitMQ channel closed!");
      await this.closeConnection();
    });
  }

  async closeConnection() {
    if (this.channel) {
      await this.channel.close();
      this.channel = undefined;
    }
    if (this.connection) {
      await this.connection.close();
      this.connection = undefined;
    }
  }

  async getChannel() {
    if (!this.channel) {
      await this.createConnection();
    }
    if (!this.channel) {
      throw new InternalServerError(
        "Failed to create RabbitMQ channel.",
        "getChannel()"
      );
    }
    return this.channel;
  }
}

const rabbitMQ = RabbitMQ.getInstance();

module.exports = { rabbitMQ };
