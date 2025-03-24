# Pet-Sitter_Webservice
API RESTful para o gerenciamento de usuários, pets, agendamentos, avaliações e pagamentos de serviços de pet sitter

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

// Importar rotas
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
app.use(express.json()); // Middleware para interpretar JSON

// Configurar rotas
app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/payments', paymentRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 

