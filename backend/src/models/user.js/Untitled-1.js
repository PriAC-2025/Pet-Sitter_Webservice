
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    tipo: { type: String, enum: ['tutor', 'pet sitter'], required: true },
    dataCadastro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
