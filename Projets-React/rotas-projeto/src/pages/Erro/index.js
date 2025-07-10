import { Link } from "react-router-dom";

function Error(){
  return(
    <div>
      <h2>Ops parece que essa pagina não existe</h2>

      <span>Encontramos essas paginas:</span> <br />
      <Link to="/home">Home</Link> <br />
      <Link to="/contato">Contato</Link> <br />
      <Link to="/sobre">Sobre</Link> <br />
    </div>
  )
}

export default Error;