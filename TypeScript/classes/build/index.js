"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./database/connection");
const aplicativo_1 = __importDefault(require("./database/aplicativo"));
function acessarSistema() {
    (0, connection_1.connection)({
        ip: "localhost:3333",
        name: "root"
    });
}
acessarSistema();
(0, connection_1.statusConnection)();
(0, aplicativo_1.default)();
