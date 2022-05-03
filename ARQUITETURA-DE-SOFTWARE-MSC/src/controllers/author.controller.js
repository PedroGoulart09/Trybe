const service = require('../services/author.service')


const getAuthors = async (_req, res) => {
    const authors = await service.getAll();
    return res.status(200).json(authors);
}

const createAuthor = async (req, res) => {
    const { firstName, lastName } = req.body;
    if (!service.isValid(firstName, lastName)) return res.status(400).json({ message: 'invalid' })

    await service.createAuthor(firstName, lastName)

    return res.status(201).json({ message: 'criado com sucesso' })
}

const findById = async (req, res) => {
    const { id } = req.params;
    const [author] = await service.findById(Number(id));
    if (author.length === 0) return res.status(400).json({ message: 'Invalid ID' })
    return res.status(200).json(author)
}

module.exports = {
    getAuthors,
    createAuthor,
    findById
}

