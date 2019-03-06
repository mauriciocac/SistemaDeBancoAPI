module.exports.listar_clientes = function (app, req, res) {
    let conn = app.config.banco();
    var clienteDao = new app.app.dao.ClienteDAO(conn);
    clienteDao.getListarClientes(function (err, result) {
        res.json(result);
    })

}

module.exports.pesquisar_cliente = function (app, req, res) {
    let conn = app.config.banco();
    var clienteDao = new app.app.dao.ClienteDAO(conn);
    let obj = req.query; 
    
    clienteDao.getPesquisarCliente(obj, function (err, result) {
        res.json(result);
    })

}