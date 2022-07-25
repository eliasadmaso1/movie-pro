import { useMyContext } from "../../../context";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import logo from '../../../assets/cinemax.png';
import '../movies.css';


export default function DramaMovies() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows?page=1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const comedyMovies = data.filter((item) => {
          return item.genres.includes("Drama");
        });
        setMovies(comedyMovies);
      });
  }, []);

  return (
    <>
    <header className="header">
        <img src={logo} className="header-logo"/>
        <Link to="/movie-pro" style={{marginRight:"2%"}}><span className="back">Back Home</span></Link>
      
    </header>
 

  <header>
  <h2>Drama Movies</h2>


  </header>
    <div className="row-posters">
      {movies.map((movie) => {
        return (
          <Link to={`/Movie/${movie.id}`}>
            <div className="container">
              <img
                src={movie.image.original}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">
                <div className="text">
                  <span>{movie.name.slice(0,13)}</span>
                  <span>{movie.genres[0]}</span>
                  <span>    {movie.language}</span>

            
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  </>
  );
}