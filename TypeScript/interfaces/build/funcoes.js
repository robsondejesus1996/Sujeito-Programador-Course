"use strict";
function mostrarPromocao(preco) {
    let desconto = preco - (preco * 10 / 100);
    console.log(`Promoção do curso ${desconto}!`);
}
const novoCurso = {
    id: "1",
    nome: "Curso de TypeScript",
    preco: 99.99,
    promocao: mostrarPromocao
};
console.log(novoCurso.promocao(59.99));
let somaNumeros = (valor1, valor2) => {
    console.log(valor1 + valor2);
    return valor1 + valor2;
};
const resultado = somaNumeros(10, 20);
