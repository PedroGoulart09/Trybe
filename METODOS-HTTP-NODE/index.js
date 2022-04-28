const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const simpsonsUtils = require('./fs-utils');


app.get('/ping', (_req, res) => {
    res.json({ message: 'pong' })
})

app.post('/hello', (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hello ${name}!` })
})

app.post('/greetings', (req, res) => {
    const { name, age } = req.body;
    if (age >= 17) return res.status(200).json({ message: `Hello ${name}` })
    return res.status(401).json({ message: `Unauthorized` })
})

app.put('/users/:name/:age', (req, res) => {
    const { name, age } = req.params;
    return res.status(200)
        .json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
})

app.post('/simpsons', async (req, res) => {
    try {
        const simpsons = await simpsonsUtils.getSimpsons();

        return res.status(200).json(simpsons);
    } catch (error) {
        return res.status(500).json({ message: "Nada encontrado" }).end();
    }
})


app.get('/simpsons/:id', async (req, res) => {
    try {
        const simpsons = await simpsonsUtils.getSimpsons();
        const simpson = simpsons.find(({ id }) => id === req.params.id);

        if (!simpson) {
            return res.status(404).json({ message: "simpson not found" }).end();
        }
        return res.status(200).json(simpson)
    } catch (error) {
        return res.status(500).end();
    }

})

app.listen(3000, () => {
    console.log('Aplicação ouvindo na porta 3000');
});