
const express = require('express');
const router = express.Router();

// Rota simples
router.get('/', (req, res) => {
    res.send('Rota de Usuários');
});

module.exports = router;
