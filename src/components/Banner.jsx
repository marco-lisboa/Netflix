import React, { useEffect } from "react";
import "./Banner.css";
import categories, { getMovies } from "../api";

function Banner() {
  const [movie, setMovie] = React.useState({});
  const fetcRandomMovie = async () => {
    try {
      const netflixOriginalCategory = categories.find(
        (category) => category.name === "netflixOriginals"
      );
      const data = await getMovies(netflixOriginalCategory.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setMovie(movies[randomIndex]);
    } catch (error) {
      console.log("Banner fetchRandomMovie error", error);
    }
  };

  useEffect(() => {
    fetcRandomMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  return (
    <header
      className="banner-content"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPositions: "center-center"
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <button className="banner-button">Assistir</button>
        <button className="banner-button">Mais informações</button>
        <div className="banner-description">
            <h3>{truncate(movie?.overview, 150)}</h3>
        </div>
      </div>
    </header>
  );
}

export default Banner;
