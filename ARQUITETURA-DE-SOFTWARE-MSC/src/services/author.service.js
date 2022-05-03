const connection = require('../connection')
const authorModel = require('../models/author.model')


const createAuthor = async (firstName, lastName) => {
    return authorModel.createAuthor(firstName, lastName)
}

const getAll = async () => {
    const [authors] = await connection.execute(
        'select id, first_name, middle_name, last_name from model_example.authors;',
    );
    return authors
};

const isValid = (firstName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;

    return true
}

const findById = (id) => {
    return authorModel.findById(id)
}

module.exports = {
    getAll,
    isValid,
    createAuthor,
    findById
}