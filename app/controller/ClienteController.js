module.exports.listar_clientes = function (app, req, res) {
    let conn = app.config.banco();
    var clienteDao = new app.app.dao.ClienteDAO(conn);
    clienteDao.getListarClientes(function (err, result) {
        res.json(result);
    })
}