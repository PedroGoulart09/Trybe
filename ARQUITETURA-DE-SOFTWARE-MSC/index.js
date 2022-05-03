const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const authorRouter = require('./src/routers/author.router')
const bookRouter = require('./src/routers/books.router')

app.use(bodyParser.json())
app.use(authorRouter)
app.use(bookRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))