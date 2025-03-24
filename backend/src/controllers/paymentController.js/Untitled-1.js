
const Payment = require('../models/payment');

// Criação de pagamento
const processPayment = async (req, res) => {
    const { idAgendamento, valor, metodo } = req.body;
    try {
        const pagamento = await Payment.create({ idAgendamento, valor, metodo });
        res.status(201).json({ message: 'Pagamento processado com sucesso!', payment: pagamento });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao processar pagamento.' });
    }
};

module.exports = { processPayment };
