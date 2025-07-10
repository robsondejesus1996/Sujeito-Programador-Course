import { Link } from "react-router-dom";


function Home() {
  let produtoID = 888;
  return (
   <div>
    <h1>Bem-vindo a pagina Home</h1>
    <Link to="/sobre">Sobre</Link>
    <Link to="/contato">Contatos</Link>

    <hr/>

    <Link to={"/produto/"+`${produtoID}`}>Acessa produto 123</Link>
   </div>
  );
}

export default Home;
