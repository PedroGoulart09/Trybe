const express = require('express');
const router = express.Router();
const { getAuthors, createAuthor, findById } = require('../controllers/author.controller')


router.get('/authors', getAuthors)

router.get('/authors/:id', findById)

router.post('/authors', createAuthor)




module.exports = router;
