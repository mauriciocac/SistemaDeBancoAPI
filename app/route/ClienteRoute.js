module.exports = function (app) {
    app.get('/clientes', function (req, res) {
        console.log(`${req.query} Rota no API - LISTA`);
        app.app.controller.ClienteController.listar_clientes(app, req, res);
    });

    app.get('/cliente', function (req, res) {
        console.log(`${req.query} Rota no API - PESQUISA`);
        app.app.controller.ClienteController.pesquisar_cliente(app, req, res);
    });

    app.post('/cliente', function (req, res) {
        console.log(`${req.query} Rota no API - SALVAR`);
        app.app.controller.ClienteController.salvar_cliente(app, req, res);
    });
}