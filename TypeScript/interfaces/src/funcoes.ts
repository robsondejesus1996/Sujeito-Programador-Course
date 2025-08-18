interface cursoProps {
  id: string;
  nome: string;
  preco: number;

  promocao: (preco: number) => void;
}

function mostrarPromocao(preco: number): void{
  let desconto = preco - (preco * 10 / 100);
  console.log(`Promoção do curso ${desconto}!`);
}

const novoCurso: cursoProps = {
  id: "1", 
  nome: "Curso de TypeScript",
  preco: 99.99, 
  promocao: mostrarPromocao
}

console.log(novoCurso.promocao(59.99))


interface SomaProps {
  (valor1: number, valor2: number): number;
}

let somaNumeros: SomaProps = (valor1: number, valor2: number): number => {
  console.log( valor1 + valor2);
  return valor1 + valor2;
}


const resultado = somaNumeros(10, 20);