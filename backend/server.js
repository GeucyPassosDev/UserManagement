require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const { Sequelize } = require('sequelize');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

app.use('/users', userRoutes)

const sequelize = new Sequelize(
    'user_management_db',
    'postgres',
    'Gdev@98',
    {
        host: 'db', // Alterado para o nome do serviço do banco de dados no Docker
        dialect: 'postgres',
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados foi bem-sucedida.');
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });
