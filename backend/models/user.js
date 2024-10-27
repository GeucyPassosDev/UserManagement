const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    process.env.POSTGRES_DB || 'user_management_db',
    process.env.POSTGRES_USER || 'postgres',
    process.env.POSTGRES_PASSWORD || 'Gdev@98',
    {
        host: process.env.DB_HOST || 'db',  // O nome do serviço do banco de dados
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
    }
);

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['ativo', 'inativo']],
        },
    },
});

// Sincronizar o modelo com o banco de dados (opcional, mas pode ser feito aqui ou no server.js)
User.sync({ alter: true });

module.exports = User;
