const Sequelize = require('sequelize');
const db = require('./db');

const PontoEletronico = db.define('pontoEletronico', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    data:{
        type: Sequelize.STRING,
        allowNull: false
    },
    entrada:{
        type: Sequelize.STRING,
        allowNull: true
    },
    horas: {
        type:Sequelize.STRING,
        allowNull: true
    }

});

PontoEletronico.sync();
module.exports = PontoEletronico;