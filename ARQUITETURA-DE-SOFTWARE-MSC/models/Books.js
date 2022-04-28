
const connection = require('./connection');
const getBooks = async () => {
    const [books] = await connection.execute(
        'select id, title, author_id from model_example.books;',
    )
    return books
}

const isValidBook = async (title, authorId) => {
    if (!title || typeof title !== 'string' || title.length < 3) return false;
    if (!authorId || typeof authorId !== 'number') return false;

    return true;
};

const createBook = async (title, authorId) => connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
    [title, authorId],
);


module.exports = {
    getBooks,
    isValidBook,
    createBook
}