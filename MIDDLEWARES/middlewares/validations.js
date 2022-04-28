const users = [
    { username: 'pedro', email: 'pedro@example.com', password: 1234 },
    { username: 'joao', email: 'joao@example.com', password: 12345678 }
]

const getUsers = (req, res) => {
    return res.status(200).json(users)
}

const validUserName = (req, res, next) => {
    const { username } = req.body[0]
    if (!username || username.length < 3) return res.status(400).json({ message: 'Invalid name' })
    next()
}

const validEmail = (req, res, next) => {
    const { email } = req.body[0]
    if (!email ||
        !email.includes('@') ||
        !email.includes('.com')
    )
        return res.status(400).json({ message: 'Invalid email' })
    next()
}

const validPassword = (req, res, next) => {
    const { password } = req.body[0]
    const passwordRegex = /^[0-9]*$/;
    if (password.toString().length < 3 ||
        password.toString().length > 8 ||
        !passwordRegex.test(password)
    )
        return res.status(400).json({ message: 'Invalid pass' })

    next()
}

const newUser = (req, res, next) => {
    users.push({ username: 'tiago', email: 'tiateste.com', password: 2315646496598458948 })
    return res.status(201).json({ message: 'user created successfully' })
}

const login = (req, res) => {
    const { email, password } = req.body[0]
    const passwordRegex = /^[0-9]*$/;
    if (!email || !email.includes('@') || !email.includes('.com'))
        return res.status(400).json({ message: 'Invalid password or email' })

    if (password.length < 3 || password.length > 8) {
        return res.status(400).json({ message: 'Invalid password or email' })
    }

    return res.status(200).json({ token: JSON.parse(Math.random() * 12) })

}

module.exports = {
    validUserName,
    validEmail,
    validPassword,
    getUsers,
    newUser,
    login
}