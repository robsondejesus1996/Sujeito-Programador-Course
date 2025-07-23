"use strict";
// não é recomendado usar o tipo any, mas é possível
// o tipo any pode ser usado para desabilitar a verificação de tipos
let precoProduto;
precoProduto = true;
console.log(precoProduto);
precoProduto = 25.9;
console.log(precoProduto);
precoProduto = [{
        nome: "Produto 1",
        preco: 10
    },
    {
        nome: "Produto 2",
        preco: 9
    }];
console.log(precoProduto);
