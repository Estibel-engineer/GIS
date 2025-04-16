const express = require('express');
const cors = require('cors');
const app = express();

const corsMiddleware = cors({
    origin: "http://172.20.54.39:3000",
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
});

module.exports = corsMiddleware;