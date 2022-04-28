// models/Author.js

const connection = require('./connection');

// Busca todas as pessoas autoras do banco.

const getAll = async () => {
    const [authors] = await connection.execute(
        'select id, first_name, middle_name, last_name from model_example.authors;',
    );
    return authors
};

const isValid = (firstName, middleName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;

    return true
}

const createUser = async (firstName, middleName, lastName) => {
    return connection.execute("INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES(?,?,?)", [firstName, middleName, lastName])
}

const findById = async (req, res) => {
    const { id } = req.params;
    const autor = await getAll();
    if (Number(id) < 1 || Number(id) > autor.length || isNaN(id)) return res.status(400).json({ message: 'nao encontrou' })
    const result = autor.find(value => value.id === Number(id));

    return res.status(200).json(result)
}


module.exports = {
    getAll,
    isValid,
    createUser,
    findById,
};