"use strict";
// function login (username: string | number ): boolean{
//   let message = "Bem vindo " + username;
//   console.log(message);
//   return true;
// }
// console.log(login(123));
let n1 = 10;
let n2 = 2;
function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    if (soma > 20) {
        return "A soma é maior que 20";
    }
    else {
        return "A soma é menor que 20";
    }
}
console.log(soma(n1, n2));
