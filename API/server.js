const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var path = require("path");


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use('/api', require('./app/controller'));
app.use('/', (req, res)=>res.render("index", { title: "Express" }))

const server = app.listen(3000);
console.log("Express started at port", server.address().port);