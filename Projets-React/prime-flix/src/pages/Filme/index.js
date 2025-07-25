import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './style.css';

import api from "../../services/api";

function Filme(){
  const {id} = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "32df06d393945992f17444d7ec70eb03",
          language: "pt-BR",
          page: 1
        }
      })

      .then((response) => {
        console.log(response.data)
        setFilme(response.data);
        setLoading(false);        
      })
      .catch(()=> {
        console.log("Filme não encontrado");
        navigate("/", { replace: true});
        return;
      })
    }

    loadFilme();


    return() => {
      console.log("Componente desmontado")
    }
  }, [navigate, id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");

    let filmesSalvos = JSON.parse(minhaLista)|| [];

    const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id)

    if(hasFilme){
      alert("Esse filme já está na lista!");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    alert("Filme salvo com sucesso!");
  }

  if(loading){
    return(
     <div className="filme-info">
       <h1>Carregando detalhes...</h1>
     </div>
    )
  }


  return(
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} /> 
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Avaliação: {filme.vote_average} /10</strong>

      <div className="arrea-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a target="_blank" href={`https://youtube.com/results?search_query=${filme.title}`} rel="external noreferrer">
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}

export default Filme;