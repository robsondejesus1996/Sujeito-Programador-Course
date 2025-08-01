"use strict";
// let loja: object;
const BurgerK = {
    nome: "BK",
    endereco: "Rua x",
    status: true,
    produtoProgamocao: "Burger double"
};
console.log(BurgerK);
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço ${endereco}`);
    console.log(`Status: ${status}`);
    console.log("-------------------");
}
novaLoja({ nome: "BK", endereco: "Rua x", status: false, produtoProgamocao: "Burger double" });
novaLoja({ nome: "McDonald's", endereco: "Dublin", status: true, produtoProgamocao: "Big Mac" });
