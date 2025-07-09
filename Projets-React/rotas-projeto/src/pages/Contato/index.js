import { Link } from "react-router-dom";


function Contato() {
  return (
   <div>
    <h1>Pagina Contato</h1>
    <span>Contato da empresa 999999999</span>
    <Link to="/home">Home</Link>
    <Link to="/sobre">sobre</Link>
   </div>
  );
}

export default Contato;
