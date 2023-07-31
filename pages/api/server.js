require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use('/openai', router);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
