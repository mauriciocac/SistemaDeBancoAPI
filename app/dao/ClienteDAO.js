function ClienteDAO(conn) {
    this._conn = conn;
}

ClienteDAO.prototype.getListarClientes = function (callback) {
    this._conn.query('select * from cliente', callback);
}

module.exports = function () {
    return ClienteDAO;
}