var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");
const { buscarTempMax } = require("../models/medidaModel");

router.get("/ultimas/:idAquario", function(req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function(req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/temp-max/:idAquario", function (req, res) {
    medidaController.buscarTempMax(req, res);    
})
router.get("/temp-min/:idAquario", function (req, res) {
    medidaController.buscarTempMin(req, res);    
})
router.get("/umi-max/:idAquario", function (req, res) {
    medidaController.buscarUmiMax(req, res);    
})
router.get("/umi-min/:idAquario", function (req, res) {
    medidaController.buscarUmiMin(req, res);    
})
router.get("/umi-media/:idAquario", function (req, res) {
    medidaController.buscarUmiMedia(req, res);    
})
router.get("/temp-media/:idAquario", function (req, res) {
    medidaController.buscarTempMedia(req, res);    
})


  
module.exports = router;