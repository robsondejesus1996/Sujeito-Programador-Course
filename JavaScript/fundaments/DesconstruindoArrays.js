let pessoa = {
  nome: "Matheus",
  sobrenome: "Fraga", 
  empresa: "Rocketseat",
  cargo: "Desenvolvedor",
}


console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.cargo)

const {nome:nomePessoa, cargo, empresa, sobrenome } = pessoa;
console.log(nomePessoa + " Aqui")
console.log(sobrenome)
console.log(empresa)
console.log(cargo)

let nomes = ["Robson", "Fraga", "Rocketseat", "Desenvolvedor"];
console.log(nomes[0])

let {0:robson } = nomes;

console.log(robson);

let [primeiro, segundonome] = nomes;

console.log(primeiro);
console.log(segundonome);