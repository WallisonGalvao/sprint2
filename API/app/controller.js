const express = require('express');
const { ArduinoDataTemp } = require('./newserial');
const db = require('./database')
const router = express.Router();


router.get('/', (request, response, next) => {
    
    ArduinoDataTemp.List.map((item)=>{
        let sum = item.data.reduce((a, b) => a + b, 0);
        let average = (sum / item.data.length).toFixed(2);
        item.total = item.data.length;
        item.average = isNaN(average) ? 0 : average
    })
    
    //let sum = ArduinoDataTemp.List.reduce((a, b) => a + b, 0);
    //let average = (sum / ArduinoDataTemp.List.length).toFixed(2);


    /*response.json({
        data: ArduinoDataTemp.List,
        total: ArduinoDataTemp.List.length,
        average: isNaN(average) ? 0 : average,
    });*/

    response.json(ArduinoDataTemp.List);


});

router.post('/sendData', (request, response) => {

    var umidade  =  ArduinoDataTemp.List[0].data;
    var temperatura_dht11 = ArduinoDataTemp.List[1].data;
    var luminosidade = ArduinoDataTemp.List[2].data;
    var temperatura_lm35 = ArduinoDataTemp.List[3].data;

    umidade = umidade[umidade.length-1];
    temperatura_dht11 = temperatura_dht11[temperatura_dht11.length-1];
    luminosidade = luminosidade[luminosidade.length-1];
    temperatura_lm35 = temperatura_lm35[temperatura_lm35.length-1];

    var sql = `INSERT INTO medidas (idmedidas, umidade, temperatura_dht11) VALUES (NULL, ${umidade}, ${temperatura_dht11})`;

    db.query(sql, [umidade, temperatura_dht11] , function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
      
    
    response.sendStatus(200);
})
router.get('/consultaUmidade', (request, response)=>{
    var sql = `SELECT umidade FROM medidas`; 
    db.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " );
        response.status(200).json(result);
      });
})

router.get('/consultaTemperaturaDHT11', (request, response)=>{
    var sql = `SELECT temperatura_dht11 FROM medidas`; 
    db.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " );
        response.status(200).json(result);
      });
})

router.get('/consultaLuminosidade', (request, response)=>{
    var sql = `SELECT luminosidade FROM medidas`; 
    db.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " );
        response.status(200).json(result);
      });
})

router.get('/consultaTemperaturaLM35', (request, response)=>{
    var sql = `SELECT temperatura_lm35 FROM medidas`; 
    db.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " );
        response.status(200).json(result);
      });
})

router.get('/', (request, response)=>{
    res.render("index", { title: "Express" });
})
module.exports = router;