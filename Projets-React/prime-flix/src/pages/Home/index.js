//URL DA API: /movie/now_playing?api_key=32df06d393945992f17444d7ec70eb03&language=pt-BR

import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './style.css';


function Home(){
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function  loadFilmes(){
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "32df06d393945992f17444d7ec70eb03",
          language: "pt-BR",
          page: 1
          
        }
      })

      //console.log(response.data.results.slice(0, 10));
      setFilmes(response.data.results.slice(0, 10));
      setLoading(false);
    }

    loadFilmes();
  }, [filmes])

  if(loading){
    return (
      <h2 className="loading">Carregando filmes...</h2>
    )
  }


  return(
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme)=> {
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
             <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} /> 
             <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Home;