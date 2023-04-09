const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const User = require('./models/Users'); // tabela user
const Ponto = require('./models/PontoEletronico'); // tabela ponto
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// usuario criado
const usuario = User.findOrCreate({ where: {name: 'julia', 
    senha: 'AB79xcVV'}
});

const db = require('./models/db'); // conexão com o banco

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html')); // rota index

});

// tentativa de fazer consumindo a api para conectar com React 
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// botão saída
app.post("/saiu", async (req, res) => {
    const p = await Ponto.update({horas: req.body.horasTrabalhadas}, {where: {nome: 'julia', data: req.body.data, horas: null}});
    res.sendFile(path.join(__dirname+'/index.html'));
});

// botão confirmar
router.post('/ponto', async function(req, res){
    const project = await User.findOne();
    if(req.body.senha == project.senha){
        res.sendFile(path.join(__dirname+'/ponto.html'));
    }else{
        res.sendFile(path.join(__dirname+'/index.html'));
    }
})

// botão entrada
router.post('/ponto_saida', async function(req, res){

    // inserindo a entrada no banco
    const entradaExiste = await Ponto.findOne({where: {horas:null}});
    if(!entradaExiste){
        const p = await Ponto.create({ nome: 'julia', data: req.body.data, entrada: req.body.hora_entrada});
    }

    const entrada = await Ponto.findOne({where: {horas:null}});

    const id = entrada.id;
    const idLast = id - 1;
    var lastEntrada = await Ponto.findOne({where:{id: idLast}});

    // caso não encontre entradas anteriores
    if(lastEntrada == null){
        var lastEntrada = {};
        lastEntrada.data = '-';
        lastEntrada.horas = '-';
    }


    // manipulando datas
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    var data_antiga = new Date(entrada.entrada*1000);

    var data = today - data_antiga;
    var horas = data / 1000 / 60 / 60;
    let s = horas.toString();

    const myArray = s.split(".");
    var n = horas - myArray[0]; 
    var x = n * 6;
    let d = x.toString();
    const rep = d.replace(".","");
    const min = rep.substr(0,2);
    var horan = myArray[0];

    if(horan.length == 1){
        horan = '0'+horan;
    }
    if(min.lenght == 1){
        min = '0'+min;
    }

    horasTrabalhadas = horan+':'+min; 
    
    // enviando informações pro html
    res.render('ponto.pug', {entrada: horasTrabalhadas, day: entrada.data, lastData: lastEntrada.data, lastHoras: lastEntrada.horas});
});




app.use('/', router);
app.use(express.static(path.join(__dirname,"public"))); // css
app.listen(process.env.port || 5000);