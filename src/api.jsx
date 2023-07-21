/* eslint-disable no-template-curly-in-string */
const API_KEY = "63fb11146b1186a684967716f2a032c2";

const categories = [
  {
    name: "trending",
    title: "Em alta",
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`
  },
  {
    name: "netflixOriginals",
    title: "Originais Netflix",
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`
  },
  {
    name: "topRated",
    title: "Populares",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`
  },
  {
    name: "comedy",
    title: "Comédias",
    path: `/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=35`
  },
  {
    name: "animation", //Romances
    title: "Animes",
    path: `/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=16`
  },
  {
    name: "documentaries", 
    title: "Documentários",
    path: `/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=99`
  },
];

export const getMovies = async (path) => {
  try {
    let url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(" getMovies", error);
  }
};

export default categories;
