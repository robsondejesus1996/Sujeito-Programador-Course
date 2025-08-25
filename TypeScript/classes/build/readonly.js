"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.id = "646464";
        this.nome = nome;
        this.idade = idade;
    }
    mostrarID() {
        console.log(this.id);
    }
}
const ana = new Pessoa("Ana", 12);
console.log(ana);
console.log(ana.mostrarID());
