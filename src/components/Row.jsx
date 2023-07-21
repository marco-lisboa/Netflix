import React, { useEffect } from "react";
import { getMovies } from "../api";
import "./Row.css";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

const imageHost = "https://image.tmdb.org/t/p/original/";
function Row({ title, path }) {
  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");
  const [scrollX, setScrollX] = React.useState(0);
  const handleOnClick = (movie) => {
    // pegar url do trailer
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          setTrailerUrl(url);
        })
        .catch((error) => {
          console.log("Error fatchingMovieTrailer: ", error);
        });
    }
  };

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      console.log("data ", data);
      setMovies(data?.results);
    } catch (error) {
      console.log("fetchMovies error: ", error);
    }
  };

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = 28 * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  return (
    <div className="row-container">
      <h2 className="row-header">{title}</h2>
      <div
        className="row-cards"
        style={{
          marginLeft: scrollX,
        }}
      >
        <div className="movieRow--left" onClick={handleLeftArrow}>
          <NavigateBefore style={{ fontSize: 50 }} />
        </div>
        <div className="movieRow--right" onClick={handleRightArrow}>
          <NavigateNext style={{ fontSize: 50 }} />
        </div>
        {movies?.map((movie) => {
          return (
            <img
              className={"movie-card"}
              onClick={() => handleOnClick(movie)}
              key={movie.id}
              src={`${imageHost}${movie.poster_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <ReactPlayer url={trailerUrl} playing={true} />}
    </div>
  );
}

export default Row;
