const express = require('express');
const app = express();
const corsMiddleware = require('./middlewares/corsMiddleware');

app.get('/', (req, res) => {
    res.send('Hello, Node.js!');
});

app.use(corsMiddleware);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});