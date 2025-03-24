
const Appointment = require('../models/appointment');

// Criação de agendamento
const createAppointment = async (req, res) => {
    const { idTutor, idPetSitter, dataHora, valor } = req.body;
    try {
        const agendamento = await Appointment.create({ idTutor, idPetSitter, dataHora, valor });
        res.status(201).json({ message: 'Agendamento criado com sucesso!', appointment: agendamento });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar agendamento.' });
    }
};

module.exports = { createAppointment };
