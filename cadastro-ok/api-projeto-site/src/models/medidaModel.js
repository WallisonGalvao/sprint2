var database = require("../database/config");

function buscarUltimasMedidas(idAquario) {
    instrucaoSql = `SELECT 
                        temperatura, 
                        umidade,
                        data_hora_registro,
                        convert(varchar, getdate(), 13) momento_grafico
                        FROM [dbo].[registros]
                        WHERE fksetor= ${idAquario}
                        ORDER BY data_hora_registro `;
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {
    instrucaoSql = `SELECT temperatura, 
                            umidade, 
                            data_hora_registro,
                            convert(varchar, getdate(),13) momento_grafico,
                            fksetor
                            FROM [dbo].[registros]
                     WHERE fkSetor= ${idAquario} 
                        ORDER BY data_hora_registro `;
                    
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTempMax(idAquario) {
    instrucaoSql = `SELECT 
                    MAX(temperatura) AS 'TEMPERATURA MAXIMA'
                    FROM [dbo].[registros]
                        WHERE fkSetor = ${idAquario}`;
                    
                    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTempMin(idAquario) {
    instrucaoSql = `SELECT MIN(temperatura) AS 'TEMPERATURA MINIMA'
                    FROM [dbo].[registros]
                    WHERE fkSetor = ${idAquario}`; 
                    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUmiMax(idAquario) {
    instrucaoSql = `SELECT MAX(umidade) AS 'UMIDADE MAXIMA'
                    FROM [dbo].[registros]
                    WHERE fkSetor = ${idAquario}`; 
                    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUmiMin(idAquario) {
    instrucaoSql = `SELECT MIN(umidade) AS 'UMIDADE MINIMA'
                    FROM [dbo].[registros]
                    WHERE fkSetor = ${idAquario}`; 
                    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUmiMedia(idAquario) 
{
    instrucaoSql = ` SELECT 
                        AVG(umidade) as 'Media umidade'
                    FROM [dbo].[registros]
                        WHERE fkSetor = ${idAquario}
    `;
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTempMedia(idAquario) 
{
    instrucaoSql = ` SELECT 
                        AVG(temperatura) as 'Media temperatura'
                    FROM [dbo].[registros]
                        WHERE fkSetor = ${idAquario}
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