var setorModel = require('../models/setorModel');

function testar(req, res) {
  console.log('ENTRAMOS NA setorController');
  res.json('ESTAMOS FUNCIONANDO!');
}

function setor(req, res) {
  var nomeSetor = req.body.nome;
  var cep = req.body.cep;
  var fkFazenda = sessionStorage.ID_FAZENDA;

  if (nomeSetor == undefined) {
    res.status(400).send('O nome do setor está undefined!');
  } else {
    setorModel
      .setor(nome, fkFazenda)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          '\nHouve um erro ao realizar o cadastro! Erro: ',
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  setor,

  testar
};
