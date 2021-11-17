var mysql = require('mysql2');

var connection = mysql.createConnection({
    host     : '127.0.0.2',
    user     : 'root',
    password : 'max361992',
    database : 'Coffe'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado ao BD com sucesso!')
});



module.exports = connection;