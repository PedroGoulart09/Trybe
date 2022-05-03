const connection = require('../connection');

const findById = async (id) => {
    return connection.execute("select * from model_example.books WHERE id = ?", [id])
}

const createBook = async (title, authorId) => connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
    [title, authorId],
);


module.exports = {
    createBook,
    findById
}