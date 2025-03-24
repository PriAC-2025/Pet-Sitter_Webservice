
const express = require('express');
const router = express.Router();

// Rota para listar avaliações
router.get('/', (req, res) => {
    res.send('Listagem de avaliações');
});

// Rota para adicionar uma avaliação
router.post('/add', (req, res) => {
    res.send('Avaliação adicionada com sucesso');
});

module.exports = router;
