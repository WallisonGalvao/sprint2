var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'app',
  password: 'urubu100',
  database: 'COFFEE ANALYTICS'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Conectado com sucesso!');
});

module.exports = connection;
