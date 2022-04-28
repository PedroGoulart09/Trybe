const express = require('express');
const router = require('./router');
const port = 3000;
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


app.use(router)
app.listen(port, () => console.log(`Ouvindo na porta ${port}`))

