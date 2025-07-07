let primeiros = [1, 2, 3];

let numeros = [...primeiros, 4, 5, 10];
console.log(numeros);

let pessoa = {
  nome: "Matheus",
  idade: 45,
  cargo: "RG",
}

let novaPessoa = {
  ...pessoa,
  status: "Ativo", 
  cidade: "São Paulo",
}

console.log(novaPessoa);


function novoUsuario(info){
  let data = {
    ...info, 
    status: "Ativo", 
    inicio: "30/06/2025", 
    codigo: 12345
  }
  console.log(data)
}


novoUsuario({nome: "Jose", sobrenome: "Silva", cargo: "Dev"})