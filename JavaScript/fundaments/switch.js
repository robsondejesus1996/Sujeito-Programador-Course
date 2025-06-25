function pedir(){
    var valor = prompt("Digite um valor de 1 a 4");
    //console.log(typeof Number(valor));
    switch(Number(valor)){
      case 1:
        alert("Voce escolheu 1 = Suco");
        break;
      case 2:
        alert("Voce escolheu 2 = Agua gelada");
        break;
      case 3:
        alert("Voce escolheu 3 = Sorvete");
        break;
      case 4:
        alert("Voce chamou o garçom");
        break;  
      default:
        alert("Escolha entre 1 a 4.");
        break;  
    }
}


var valor = 30;

if(valor === 30){
  console.log("Sim o valor é 30");
}else {
  console.log("Numero diferente de 30")
}


var nome = "Robson";
var userOnline = true;

if(userOnline === true){
  console.log("Usuário está online")
}else {
  console.log("Usuário está offline")
}

var numero = 110;
if(numero == 10 ? console.log("Numero é 10"): console.log("Numero não é 10"));