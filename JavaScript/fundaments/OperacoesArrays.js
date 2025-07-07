let lista = ["Mathues", "Jose", "Maria", "Lucas"];  

lista.map((item, index) => {
  console.log(`Passando: ${item} - esta na posicao: ${index}`)
})

let numeros = [5,3,2];
let total = numeros.reduce((acumulador, numero, indece, original) => {
  console.log(`${acumulador} - total ate o momento`)
  console.log(`${numero} - valor atual`)
  console.log(`${indece} - indice atual`)
  console.log(`${original} - array original`)
  console.log("-----")

  return acumulador + numero;
})

console.log(`total final: ${total}`)


let listagem = [5,3, "Jose", 2, "Mathues"]
let busca = listagem.find((item)=> {
  if(item === "Jose"){
    return console.log("Item encontrado: " + item);
  }
})

console.log(busca);


let palavras = ["Matheus", "Ana", "Jose", "Ricardo silva", "Sujeito Programador", "Jose"];

let resultado = palavras.filter((item)=>{
  return item === "Jose"
})

console.log(resultado);