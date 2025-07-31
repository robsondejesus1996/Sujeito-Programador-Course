"use strict";
// function totalVendas(venda1: number, venda2: number, venda3: number, venda4: number): number {
//   const total = venda1 + venda2 + venda3 + venda4;
//   console.log(total)
//   return total;
// }
// totalVendas(100, 200, 300, 400);
function totalVendas(...vendas) {
    const quantidadeVendas = vendas.length;
    console.log(`Voce tem ${quantidadeVendas} hoje`);
}
totalVendas(400, 500, 600);
function mostrarNomes(...nomes) {
    let totalNomes = nomes.length;
    console.log(totalNomes);
    nomes.map(nome => {
        console.log(nome);
    });
}
mostrarNomes("Robson", "Sujeito", "Programador", "Curso");
