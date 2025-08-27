"use strict";
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log("=========================");
        console.log(`Conta aberta com sucesso ${dados.nome}`);
        console.log("=========================");
        return true;
    }
}
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log("=========================");
        console.log(`Conta pessoa juridica aberta com sucesso ${dados.nome}`);
        console.log("=========================");
        return true;
    }
}
const conta1 = new PessoaFisica();
conta1.abrirConta({
    nome: "Joana",
    numero: "1234",
    endereco: "Rua teste",
});
const conta2 = new PessoaJuridica();
conta2.abrirConta({
    nome: "João LTDA",
    numero: "2222",
    endereco: "Rua teste joao",
});
