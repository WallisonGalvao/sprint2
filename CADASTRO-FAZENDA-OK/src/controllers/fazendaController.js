var fazendaModel = require("../models/FazendaModel");



function testar (req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}






function fazenda(req, res) {
    var nome = req.body.nome;
    var cep = req.body.cep;
    var logradouro = req.body.logradouro;
    var numero = req.body.numero;
    var cidade = req.body.cidade;
    var estado = req.body.estado;
   
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        fazendaModel.fazenda(nome, cep, logradouro,numero,cidade,estado)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}



module.exports = {
    
    fazenda,
       
    testar
}