var setorModel = require("../models/setorModel");



function testar (req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}






function setor(req, res) {
    var nome = req.body.nome;
    var fkFazenda = req.params.idFazenda;
   
   
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        setorModel.setor(nome, fkFazenda)
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
    
    setor,
       
    testar
}