// interface TecnologiaPros {
//   id: string;
//   nome: string;
//   slug: string[];
// }

// let tecnologia1: TecnologiaPros = {
//   id: "1",
//   nome: "PHP",
//   slug: ["php", "js"]
// }

// console.log(tecnologia1);


interface TecnologiaPros {
  id: string;
  nome: string;
  descricao?: string;
  
}


interface NomesProps{
  tecnologia: TecnologiaPros[];
}

let frontend: NomesProps = {
  tecnologia: [{
    id: "1",
    nome: "React JS",
    // descricao: "Biblioteca JavaScript para construção de interfaces"
  }]
}

console.log(frontend.tecnologia)