var database = require('../database/config');

function setor(nomeSetor, fkFazenda) {
  console.log(
    "ACESSEI O SETOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():"
  );
  var instrucao = `
        INSERT INTO SETOR (IDSETOR, NOME, FKFAZENDA)
        VALUES
        (NULL, '${nomeSetor}', ${fkFazenda});
    `;
  console.log('Executando a instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}



module.exports = {
  setor
};
