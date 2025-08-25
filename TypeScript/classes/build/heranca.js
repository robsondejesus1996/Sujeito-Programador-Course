"use strict";
class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    constructor(id, nome, email, cargo, nivel) {
        super(id, nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo(novoCargo) {
        this.cargo = novoCargo;
        console.log("ID do usuario, " + this.id);
        return (`Alternado cargo para ${this.cargo}`);
    }
    acessarAdmin() {
        console.log(this.mudarCargo("Engenharia"));
    }
}
const usuario1 = new Admin(1, "Robson", "rosbon@gmail.com", "programador", 2);
console.log(usuario1.acessarAdmin());
