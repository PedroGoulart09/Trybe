const connection = require('../bd/connection');

const isValidUsers = async (firstName, lastName, email, password) => {
    if (!firstName || !lastName) return false;
    if (!password || !email) return false;

    return true;
}


const createUser = async (firstName, lastName, email, password) => connection.execute(
    "INSERT INTO users (first_name,last_name,email,password) VALUES(?,?,?,?)", [firstName, lastName, email, password]
)

const getUsers = async () => {
    const [users] = await connection.execute(
        "select id, first_name, last_name, email, password from users"
    )
    return users;
}

const getUsersId = async (req, res) => {
    const { id } = req.params;
    const getUser = await getUsers()
    if (Number(id) < 1 || Number(id) > getUser.length) return res.status(404).json({ message: 'not found' })
    const result = getUser.find(value => value.id === Number(id))

    return res.status(200).json(result)
}



module.exports = {
    isValidUsers,
    createUser,
    getUsers,
    getUsersId
}