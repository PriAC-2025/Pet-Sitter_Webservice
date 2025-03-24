
const Pet = require('../models/pet'); // Importa o modelo Pet

// Cadastro de pet
const registerPet = async (req, res) => {
    const { nome, tipo, idade, idTutor } = req.body; // Desestrutura os dados do corpo da requisição
    try {
        const novoPet = await Pet.create({ nome, tipo, idade, idTutor }); // Cria o pet no banco
        res.status(201).json({ message: 'Pet cadastrado com sucesso!', pet: novoPet });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar o pet.' });
    }
};

module.exports = { registerPet };
