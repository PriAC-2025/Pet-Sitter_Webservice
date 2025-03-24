
const express = require('express');
const router = express.Router();

// Rota para listar pets
router.get('/', (req, res) => {
    res.send('Listagem de pets');
});

// Rota para adicionar um pet
router.post('/add', (req, res) => {
    res.send('Pet adicionado com sucesso');
});

module.exports = router;
