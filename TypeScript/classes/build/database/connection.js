"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = connection;
exports.statusConnection = statusConnection;
function connection(info) {
    console.log(`Conexão com ip: ${info.ip} e nome: ${info.name}`);
    return true;
}
function statusConnection() {
    console.log("Conexão ativa");
}
