
const Review = require('../models/review'); // Importa o modelo Review

// Cadastro de avaliação
const registerReview = async (req, res) => {
    const { idAgendamento, nota, comentario } = req.body; // Desestrutura os dados do corpo da requisição
    try {
        const novaReview = await Review.create({ idAgendamento, nota, comentario }); // Cria a avaliação no banco
        res.status(201).json({ message: 'Avaliação adicionada com sucesso!', review: novaReview });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar a avaliação.' });
    }
};

module.exports = { registerReview };
