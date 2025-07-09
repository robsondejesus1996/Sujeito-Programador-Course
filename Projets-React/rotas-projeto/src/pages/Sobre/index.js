import { Link } from "react-router-dom";


function Sobre() {
  return (
   <div>
    <h1>Pagina Sobre a empresa</h1>
    <Link to="/home">Home</Link>
    <Link to="/contato">Contatos</Link>
   </div>
  );
}

export default Sobre;
