"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome} da categoria ${this.categoria} criado com sucesso!`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa ${mesa}`;
    }
    mudarStatus(status) {
        if (status === true) {
            console.log("Loja aberta");
            return true;
        }
        else {
            console.log("Loja fechada");
            return false;
        }
    }
}
const redBurger = new Loja("Red Burger", "Lanches");
// const sucos = new Loja("Suco Narutal", "Suco Natural");
console.log(redBurger.nome);
console.log(redBurger.categoria);
redBurger.criarLoja();
const returnLoja = redBurger.emitirPedido(5, "X-Burguer", "Coca-Cola", "Yerror");
console.log(returnLoja);
const statusLoja = redBurger.mudarStatus(true);
console.log(statusLoja);
