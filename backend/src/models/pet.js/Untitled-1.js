
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    nome: { type: String, required: true }, // Nome do pet
    raça: { type: String, required: true }, // Ex.: "cachorro", "gato", etc.
    idade: { type: Number, required: true }, // Idade do pet em anos
    idTutor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Relacionamento com o tutor
});

module.exports = mongoose.model('Pet', petSchema);
