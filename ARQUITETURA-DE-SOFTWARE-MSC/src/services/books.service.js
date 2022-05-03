const connection = require('../connection')
const booksModel = require('../models/books.model')


const createBook = async (title, authorId) => {
    return booksModel.createBook(title, authorId)
}

const getAllBooks = async () => {
    const [books] = await connection.execute('select * from model_example.books')
    return books
}


const isValidBook = async (title, authorId) => {
    if (!title || typeof title !== 'string' || title.length < 3) return false;
    if (!authorId || typeof authorId !== 'number') return false;

    return true;
};


const findById = async (id) => {
    return booksModel.findById(id)
}


module.exports = {
    isValidBook,
    getAllBooks,
    createBook,
    findById
}