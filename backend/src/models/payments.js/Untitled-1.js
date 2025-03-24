
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    idAgendamento: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
    valor: { type: Number, required: true },
    status: { type: String, enum: ['pendente', 'pago'], default: 'pendente' },
    metodo: { type: String, enum: ['cartao', 'pix'], required: true }
});

module.exports = mongoose.model('Payment', paymentSchema);
 
