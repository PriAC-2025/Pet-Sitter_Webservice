
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    idTutor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    idPetSitter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    dataHora: { type: Date, required: true },
    status: { type: String, enum: ['pendente', 'concluído', 'cancelado'], default: 'pendente' },
    valor: { type: Number, required: true }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
