
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    idAgendamento: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true }, // Relacionamento com o agendamento
    nota: { type: Number, required: true, min: 1, max: 5 }, // Nota de 1 a 5
    comentario: { type: String, required: false }, // Comentário opcional
});

module.exports = mongoose.model('Review', reviewSchema);
