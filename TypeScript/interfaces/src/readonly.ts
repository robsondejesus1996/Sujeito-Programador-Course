interface ProdutoPros{
  readonly id: string;
  nome: string;
  descricao: string;
}

let produto1: ProdutoPros = {
  id: "1",
  nome: "Tenis Nike",
  descricao: "Tenis da Nike de skate"
}


produto1.nome = "Tenos nike 2";

console.log(produto1)