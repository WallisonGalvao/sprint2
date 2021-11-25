var setorModel = require('../models/setorModel');

function testar(req, res) {
  console.log('ENTRAMOS NA setorController');
  res.json('ESTAMOS FUNCIONANDO!');
}

function setor(req, res) {
  var nomeSetor = req.body.nome;
  var fkFazenda = req.params.idFazenda;

  if (nomeSetor == undefined) return res.status(400).send('O nome do setor está undefined!');

  
  return setorModel
    .setor(nomeSetor, fkFazenda)
    .then((resultado) => res.json(resultado))
    .catch(function (erro) {
      console.log(erro);
      console.log(
        '\nHouve um erro ao realizar o cadastro! Erro: ',
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
  
}

module.exports = {
  setor,

  testar
};
