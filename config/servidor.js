var express = require('express');

var app = express();

app.listen(3000, function () {
    console.log('Servidor iniciado...');
});

module.exports = app;