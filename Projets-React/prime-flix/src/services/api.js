// Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR
//32df06d393945992f17444d7ec70eb03&language=pt-BR

import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;

