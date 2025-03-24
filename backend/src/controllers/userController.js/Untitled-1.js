
const User = require('../models/user');

// Cadastro de usuário
const registerUser = async (req, res) => {
    const { nome, email, senha, tipo } = req.body;
    try {
        const novoUsuario = await User.create({ nome, email, senha, tipo });
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user: novoUsuario });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
    }
};

module.exports = { registerUser };
 