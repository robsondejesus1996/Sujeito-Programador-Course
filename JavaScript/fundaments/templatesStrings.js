let nome = "Robson";
let sobrenome = "De Jesus";
let idade = 29;

let mensagemNormal = "Meu nome e" + nome + " " + sobrenome + " e tenho " + idade + " anos.";

console.log(mensagemNormal);

let mensagemTemplate = `Meu nome e ${nome} ${sobrenome} e tenho ${idade} anos.`;
console.log(mensagemTemplate);