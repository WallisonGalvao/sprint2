var database = require("../database/config");

function buscarUltimasMedidas(idSetor,limite_linhas) {
    instrucaoSql = `select 
                        TEMPERATURA, 
                        UMIDADE, 
                        DATA_HORA_REGISTRO,
                        DATE_FORMAT(DATA_HORA_REGISTRO,'%H:%i:%s') as momento_grafico
                        from REGISTRO
                        where FKSETOR = ${idSetor}
                        order by id desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSetor) {
    instrucaoSql = `SELECT TEMPERATURA, 
                            UMIDADE, 
                            DATE_FORMAT(DATA_HORA_REGISTRO,'%H:%i:%s') as momento_grafico, 
                            FKSETOR 
                            from REGISTRO where FKSETOR = ${idSetor} 
                    order by id desc limit 1`;
                    
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}