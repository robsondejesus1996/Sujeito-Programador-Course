"use strict";
function acessar(uuid, nome) {
    console.log(`ID: ${uuid}, Bem-Vindo Nome: ${nome}`);
}
function logUsuarios(uuid) {
    console.log(`Conta referente ao ID: ${uuid}`);
}
function comprarItem(moeda) {
    console.log("Comprando item com a moeda: " + moeda);
}
comprarItem("BRL");
