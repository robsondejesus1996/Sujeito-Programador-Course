type Uuid = number | string | null;

function acessar(uuid: Uuid, nome: string) {
  console.log(`ID: ${uuid}, Bem-Vindo Nome: ${nome}`)
}

function logUsuarios(uuid: Uuid){
  console.log(`Conta referente ao ID: ${uuid}`)
}

// acessar("123", "Robson");
// acessar(123, "Joao");
// logUsuarios("123");

type Moedas = "BRL" | "EUR"| "USD";
function comprarItem(moeda: Moedas){
  console.log("Comprando item com a moeda: " + moeda)
}

comprarItem("BRL");