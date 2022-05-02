const connection = require('../bd/connection');

const createAuthor = async (firstName, lastName) => {
    return connection.execute("INSERT INTO model_example.authors (first_name, last_name) VALUES(?,?)", [firstName, lastName])
}

const findById = async (id) => {
    return connection.execute("select * from model_example.authors WHERE id = ?", [id])
}


module.exports = {
    createAuthor,
    findById,
};