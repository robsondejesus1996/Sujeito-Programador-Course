function convidados(...nomes) {
  console.log(nomes)
}

convidados("Robson", "Franga", "Maria")

function sorteador(...numeros){
  console.log(numeros)

  const numeroGerado = Math.floor(Math.random() * numeros.length)
  console.log("Numero gerado foi: " + numeros[numeroGerado])
}

sorteador(1, 5, 10, 22, 42, 211)