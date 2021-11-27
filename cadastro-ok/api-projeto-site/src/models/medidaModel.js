var database = require("../database/config");

function buscarUltimasMedidas(idAquario,limite_linhas) {
    instrucaoSql = `SELECT 
                        temperatura, 
                        umidade, 
                        DATA_HORA_REGISTRO,
                        DATE_FORMAT(DATA_HORA_REGISTRO,'%H:%i:%s') as momento_grafico
                        FROM REGISTROS
                        where FKSETOR = ${idAquario}
                        order by FKSETOR desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {
    instrucaoSql = `SELECT temperatura, 
                            umidade, 
                            DATE_FORMAT(DATA_HORA_REGISTRO,'%H:%i:%s') as momento_grafico, 
                            FKSETOR 
                            FROM REGISTROS WHERE FKSETOR = ${idAquario} 
                    order by IDREGISTRO desc limit 1`;
                    
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTempMax(idAquario) {
    instrucaoSql = `SELECT MAX(temperatura) AS 'TEMPERATURA MAXIMA'
                    FROM registros
                    WHERE FKSETOR = ${idAquario}`;
                    
                    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTempMin(idAquario) {
    instrucaoSql = `SELECT MIN(temperatura) AS 'TEMPERATURA MINIMA'
                    FROM registros
                    WHERE FKSETOR = ${idAquario}`; 
                    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUmiMax(idAquario) {
    instrucaoSql = `SELECT MAX(umidade) AS 'UMIDADE MAXIMA'
                    FROM registros
                    WHERE FKSETOR = ${idAquario}`; 
                    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUmiMin(idAquario) {
    instrucaoSql = `SELECT MIN(umidade) AS 'UMIDADE MINIMA'
                    FROM registros
                    WHERE FKSETOR = ${idAquario}`; 
                    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUmiMedia(idAquario) 
{
    instrucaoSql = ` SELECT 
                        AVG(umidade) as 'Media'
                    FROM registros
                        WHERE FKSETOR = ${idAquario}
    `;
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTempMedia(idAquario) 
{
    instrucaoSql = ` SELECT 
                        AVG(temperatura) as 'Media'
                    FROM registros
                        WHERE FKSETOR = ${idAquario}
    `;
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}






module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarTempMax,
    buscarTempMin,
    buscarUmiMax,
    buscarUmiMin,
    buscarUmiMedia,
    buscarTempMedia
}