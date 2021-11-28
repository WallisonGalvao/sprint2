var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

	var idAquario = req.params.idAquario;

	console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

	var idAquario = req.params.idAquario;

	console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTempMax(req, res) {
    var idAquario = req.params.idAquario;
    console.log("Buscando temperatura máxima");

    medidaModel.buscarTempMax(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a temperatura máxima", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}
function buscarTempMin(req, res) {
    var idAquario = req.params.idAquario;
    console.log("Buscando temperatura mínima");

    medidaModel.buscarTempMin(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a temperatura mínima", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}
function buscarUmiMax(req, res) {
    var idAquario = req.params.idAquario;
    console.log("Buscando umidade máxima");

    medidaModel.buscarUmiMax(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a umidade máxima", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}
function buscarUmiMin(req, res) {
    var idAquario = req.params.idAquario;
    console.log("Buscando umidade mínima");

    medidaModel.buscarUmiMin(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a temperatura máxima", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}
function buscarUmiMedia(req, res) {
    var idAquario = req.params.idAquario;
    console.log("Buscando média da umidade");

    medidaModel.buscarUmiMedia(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a média da umidade", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}
function buscarTempMedia(req, res) {
    var idAquario = req.params.idAquario;
    console.log("Buscando a média da temperatura");

    medidaModel.buscarTempMax(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a média da temperatura", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarTempMax,
    buscarTempMin,
    buscarTempMedia,
    buscarUmiMax,
    buscarUmiMin,
    buscarUmiMedia,
    buscarTempMedia
    
}