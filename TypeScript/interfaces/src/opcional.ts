interface CadastroProps {
  nome?: string;
  email: string;
  status: boolean; 
}

const novoUsuario: CadastroProps = {
  // nome: "Robson", 
  email: "robson@gmail.com", 
  status: true,
}

console.log(novoUsuario);

function novoUser(propriedades: CadastroProps){
  console.log(propriedades.nome)
}

novoUser({ nome: "maria", email: "maria@gmail.com", status: true });
