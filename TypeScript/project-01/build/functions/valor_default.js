"use strict";
function cadastro(email, senha, nome = "Aluno", idade) {
    let data = { email, senha, nome };
    console.log(data);
}
cadastro("robson@gmail.com", "123123", "Robson", 29);
function cadastroLoja(nome, email, status = false) {
    console.log(nome, status);
    return status;
}
cadastroLoja("yerros", "yerros@", true);
