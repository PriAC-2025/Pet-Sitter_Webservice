
const express = require('express');
const router = express.Router();

// Rota para listar agendamentos
router.get('/', (req, res) => {
    res.send('Listagem de agendamentos');
});

// Rota para criar um novo agendamento
router.post('/create', (req, res) => {
    res.send('Agendamento criado com sucesso');
});

module.exports = router;
