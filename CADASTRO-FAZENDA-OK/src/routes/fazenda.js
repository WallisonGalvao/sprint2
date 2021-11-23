var express = require("express");
var router = express.Router();

var fazendaController = require("../controllers/fazendaController");

router.get("/", function(req, res) {
    fazendaController.testar(req, res);
});


router.post("/fazenda", function(req, res) {
    fazendaController.fazenda(req, res);
})


module.exports = router;