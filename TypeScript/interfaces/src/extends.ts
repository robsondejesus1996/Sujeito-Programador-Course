interface JogoPros {
  readonly id: string;
  nome: string;
  descricao: string;
  plataforma: string[];
}

const left4dead: JogoPros = {
  id: "1", 
  nome: "Left 4 Dead 2",
  descricao: "Jogo muito legal",
  plataforma: ["PC", "Playstation"]
}



// interface DLC extends JogoPros {
//   novoConteudo: string[];
// }

// const left4deadDLC: DLC = {
//   id: "1", 
//   nome: "Left 4 Dead 2",
//   descricao: "Jogo muito legal com DLC",
//   plataforma: ["PC", "Playstation", "Xbox"],
//   novoConteudo: ["Mapa Novo", "Arma Nova"]
// }

// console.log(left4deadDLC)

interface DLC extends JogoPros {
  jogoOriginal: JogoPros;
  novoConteudo: string[];
}

const left4deadDLC: DLC = {
  id: "1", 
  nome: "Left 4 Dead 2",
  descricao: "Jogo muito legal com DLC",
  plataforma: ["PC", "Playstation", "Xbox"],
  novoConteudo: ["Mapa Novo", "Arma Nova"], 
  jogoOriginal: left4dead
}

console.log(left4deadDLC)