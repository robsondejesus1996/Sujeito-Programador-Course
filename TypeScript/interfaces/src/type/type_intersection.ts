type Info = {
  id: number;
  nome: string;
  descricao?: string;
}

const produtoInfo: Info = {
  id: 1, 
  nome: 'Produto A', 
  descricao: 'Descrição do Produto A'
}

type Categoria = {
  slug: string;
  quantidadeProduto: number;

}

const categoria1: Categoria = {
  slug: 'hardware', 
  quantidadeProduto: 2
}

console.log(categoria1)

type ProdutoInfo = Info & Categoria;

const novoProduto: ProdutoInfo = {
  id: 2, 
  nome: 'Produto B', 
  descricao: 'Teclado Mecanico', 
  slug: 'teclado',
  quantidadeProduto: 1
}

console.log(novoProduto);