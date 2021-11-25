// var database = require("../database/config")


// function fazenda(nome,cep,logradouro,numero,cidade,estado) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
//     var instrucao = `
//         INSERT INTO FAZENDA (NOME_FAZENDA, CEP, LOGRADOURO, NUMERO, CIDADE, ESTADO)
//         VALUES
//         ('${nome}', '${cep}', '${logradouro}' , '${numero} ', '${cidade}', '${estado}');
//     `;
//     console.log("Executando a instrução SQL: \n"+instrucao);
//     return database.executar(instrucao);
// }

// module.exports = {
    
//     fazenda,
    
// };