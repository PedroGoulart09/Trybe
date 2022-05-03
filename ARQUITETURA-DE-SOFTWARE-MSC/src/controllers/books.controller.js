const serviceBooks = require('../services/books.service')


const getAllBooks = async (_req, res) => {
    const books = await serviceBooks.getAllBooks();
    return res.status(200).json(books);
}

const createBook = async (req, res) => {
    const { title, authorId } = req.body;
    if (!serviceBooks.isValidBook(title, authorId)) return res.status(400).json({ message: 'invalid' })
    await serviceBooks.createBook(title, authorId)
    return res.status(201).json({ message: 'criado com sucesso' })
}


const isValid = async (title, authorId) => {
    return serviceBooks.isValidBook(title, authorId)
}


const findUsersId = async (req, res) => {
    const { id } = req.params;
    const [books] = await serviceBooks.findById(Number(id));
    if (books.length === 0) return res.status(400).json({ message: 'Invalid ID' })
    return res.status(200).json(books)
}

module.exports = {
    isValid,
    getAllBooks,
    createBook,
    findUsersId
}