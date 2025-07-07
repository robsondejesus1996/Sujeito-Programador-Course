function gerarNumeroMega(qtdNumeros) {
  if(qtdNumeros < 6 || qtdNumeros > 9){
    console.log("Apenas numeros de 6 até 9")
    return [];
  }

  
  const numeros = [];
  while(numeros.length < qtdNumeros) {
    const numerosAleatorios = Math.floor(Math.random() * 60) + 1;
    

    if(!numeros.includes(numerosAleatorios)){
      numeros.push(numerosAleatorios)
    }
  }

  return numeros;
}

const numeroSorteado = gerarNumeroMega(6);
console.log(numeroSorteado);