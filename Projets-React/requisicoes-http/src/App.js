// https://sujeitoprogramador.com/rn-api/?api=posts

import { useEffect, useState } from "react";
import './styles.css';

function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        console.log(json);

        setNutri(json);

      } )
    }

    loadApi();
  }, [])



  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <p className="categoria">Categoria: {item.categoria}</p>
            <img className="capa" src={item.capa} alt={item.titulo} />
            <p className="subtitulo">{item.subtitulo}</p>
            <a href={item.capa} target="_blank" className="botao" rel="noreferrer">Acessar</a>
          </article>
        )
      })}
    </div>



  );
}

export default App;
