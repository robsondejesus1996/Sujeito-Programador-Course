"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_1 = require("./mixin/applyMixin");
class Automovel {
    ligar() {
        console.log("Automovel ligado");
    }
    desligar() {
        console.log("Automovel desligado");
    }
}
class Especificacao {
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixin_1.applyMixins)(Carro, [Automovel, Especificacao]);
const gol = new Carro("Gol");
gol.ligar();
gol.descricao = "Carro de luxo";
console.log(gol);
gol.desligar();
