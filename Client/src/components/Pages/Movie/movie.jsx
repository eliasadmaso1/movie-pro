import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./movie.css";
import logo from '../../../assets/cinemax.png';
import {Link} from 'react-router-dom';


function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows?page=1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(id);
        const currectMovie = data.find((res) => {
          return res.id == id;
        });

        setMovie(currectMovie);
      });
  }, []);

  let length;
  if(movie){
    if(movie.summary){
      length = movie.summary.length

    }
 
  }
  

 

  return (
    movie && (
      <>
      <header className="movie-header">
      <img src={logo} className="header-logo"/>
      <span className="movie-header-title">Movie Page</span>
          <Link to="/movie-pro" style={{marginRight:"2%"}}><span className="back">Back Home</span></Link>
        
      </header>

        <div className="movie-container">

          <div className="movie-img-container">
          <img src={movie.image.original} className="movie-img" />

          </div>

          <div className="movie-details">
          <h2>{movie.name}</h2>
          <h3>{movie.genres}</h3>
          <h3>
            <a href={movie.url}>Movie Link</a>
          </h3>
          <h3>
            <a href={movie.officialSite}>Official Site</a>
          </h3>

          <h3>Premiered : {movie.premiered}</h3>
          <h3>Language : {movie.language}</h3>
          <h3>{movie.summary ? movie.summary.slice(3,length-4) : "sd"}</h3>
          </div>

       
        </div>
      </>
    )
  );
}

export default Movie;
