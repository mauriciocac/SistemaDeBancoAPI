var express = require('express');
var consign = require('consign');
var bodyparser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next()
})

app.use(expressValidator());

consign()
    .include('./app/route')
    .then('./config/banco.js')
    .then('./app/controller')
    .then('./app/dao')
    .into(app);

app.listen(3000, function () {
    console.log('Servidor iniciado...' +Date());
});

module.exports = app;