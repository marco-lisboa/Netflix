/* eslint-disable no-template-curly-in-string */
const API_KEY = "63fb11146b1186a684967716f2a032c2";

const categories = [
  {
    name: "trending",
    title: "Em alta",
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    isLarge: true
  },
  {
    name: "netflixOriginals",
    title: "Originais Netflix",
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isLarge: false
  },
  {
    name: "topRated",
    title: "Populares",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    isLarge: false
  },
  {
    name: "comedy",
    title: "Comédias",
    path: `/discover/tv?api_key=${API_KEY}&genres=35`,
    isLarge: false
  },
  {
    name: "animation", //Romances
    title: "Animes",
    path: `/discover/tv?api_key=${API_KEY}&genres=16`,
    isLarge: false
  },
  {
    name: "documentaries", //Romances
    title: "Documentários",
    path: `/discover/tv?api_key=${API_KEY}&genres=99`,
    isLarge: false
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

