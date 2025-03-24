
const express = require('express');
const router = express.Router();

// Rota para listar pagamentos
router.get('/', (req, res) => {
    res.send('Listagem de pagamentos');
});

// Rota para processar um pagamento
router.post('/process', (req, res) => {
    res.send('Pagamento processado com sucesso');
});

module.exports = router;
