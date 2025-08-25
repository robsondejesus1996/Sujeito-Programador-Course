"use strict";
class Conta {
    constructor() {
        this.limite = 450;
    }
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite += quantidade;
            console.log(`Agora seu limite é: ${this.limite}`);
        }
        else {
            console.log("Limite nao pode ser aumentado");
        }
    }
    solicitarLimiteApp(estadoAutenticado, quantiade) {
        if (estadoAutenticado) {
            this.aumentarLimite(quantiade);
        }
        else {
            return false;
        }
    }
}
const minhaConta = new Conta();
minhaConta.solicitarLimiteApp(true, 1001);
