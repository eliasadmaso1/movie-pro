import { useMyContext } from "../../../context";
import { Grid, MuiThemeProvider } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ActionMovies() {
  const { movies, Favorites } = useMyContext();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    console.log(movies);
    const results = movies.filter((res) => {
      return res.genres.includes("Action");
    });

    setFiltered(results);
  }, []);

  const addToFavorites = (name, img) => {
    Favorites.push(...Favorites, { name, img });
    console.log(Favorites);
  };

  return (
    <div className="row">
      <h2>Action Movies</h2>
      <div className="row-posters">
        {filtered.map((movie) => {
          return (<Link to={`/Movie/${movie.id}`}>
            <div className="container">
              <img src={movie.image.original} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">
                  
                  {movie.name}<br>
                  </br><br></br>
                  {movie.genres[0]}
                  <br></br><br></br>
                  {movie.premiered}
                  <br></br><br></br>
                  {movie.language}
                </div>
              </div>
            </div></Link>
          );
        })}
      </div>
    </div>
  );
}
