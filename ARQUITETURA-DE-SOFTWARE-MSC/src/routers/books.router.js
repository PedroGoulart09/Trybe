const express = require('express');
const router = express.Router();
const { getAllBooks, createBook, findUsersId } = require('../controllers/books.controller')


router.get('/books', getAllBooks)

router.get('/books/:id', findUsersId)

router.post('/books', createBook)



module.exports = router;
