function ClienteDAO(conn) {
    this._conn = conn;
}

ClienteDAO.prototype.getListarClientes = function (callback) {
    this._conn.query('select * from cliente', callback);
}

ClienteDAO.prototype.getPesquisarCliente = function (obj, callback) {
    this._conn.query('select * from cliente where id = ' + obj.id, callback);
}

ClienteDAO.prototype.salvarCliente = function (cliente, callback) {
    this._conn.query('insert into cliente set ? ' , cliente, callback);
}

module.exports = function () {
    return ClienteDAO;
}