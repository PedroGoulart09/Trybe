const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const authorRouter = require('./src/routers/author.router')
app.use(bodyParser.json())


const Books = require('./src/models/Books');
const users = require('./src/models/users');

app.use(authorRouter)

app.get('/books', async (req, res) => {
    const books = await Books.getBooks();
    res.status(200).json(books);
})

app.post('/books', async (req, res) => {
    const { title, author_id } = req.body;
    if (!await Books.isValidBook(title, author_id)) return res.status(400).json({ message: 'Invalid book' })
    await Books.createBook(title, author_id)

    res.status(200).json({ message: 'Book created' })
})




app.get('/users', async (req, res) => {
    const returnUser = await users.getUsers()
    return res.status(200).json(returnUser)
})

app.get('/users/:id', users.getUsersId)

app.post('/user', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if (!await users.isValidUsers(firstName, lastName, email, password)) return res.status(400).json({ message: 'O campo password deve ter pelo menos 6 caracteres' })
    await users.createUser(firstName, lastName, email, password)
    return res.status(201).json({ message: 'criado com sucesso user' })
})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))