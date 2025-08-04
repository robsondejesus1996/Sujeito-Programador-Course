"use strict";
const novoUsuario = {
    // nome: "Robson", 
    email: "robson@gmail.com",
    status: true,
};
console.log(novoUsuario);
function novoUser(propriedades) {
    console.log(propriedades.nome);
}
novoUser({ nome: "maria", email: "maria@gmail.com", status: true });
