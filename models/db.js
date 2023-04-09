const Sequelize = require('sequelize');

const sequelize= new Sequelize("ponto", "root", "root",{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco realizada com sucesso");
}).catch(function(){
    console.log("Erro: não foi possível se conectar ao banco")
});

module.exports = sequelize;