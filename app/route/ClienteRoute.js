module.exports = function (app) {
    app.get('/clientes', function (req, res) {
        console.log(`${req.query} Rota no API - LISTA`);
        app.app.controller.ClienteController.listar_clientes(app, req, res);
    });
}