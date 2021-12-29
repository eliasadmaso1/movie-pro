import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMyContext } from "../../../context";
import { useState, useEffect } from "react";
import "./movie.css";
import Button from "../../Featurs/Button/Button";
import { addToList } from "../../../Service/List-Service";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows?page=1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const currectMovie = data.find((res) => {
          return (res.id = id);
        });
        setMovie(currectMovie);
      });
  }, []);

  return (
    movie && (
      <>
        <div className="manage-list">
          <button
            onClick={() => {
              addToList(
                movie.name,
                movie.summary,
                movie.image.original,
                movie.genres,
                movie.url
              );
            }}
          >
            Add
          </button>
          <button>Remove</button>
        </div>
        <div className="movie-container">
          <h1>Name : {movie.name}</h1>
          <h3>Genre : {movie.genres}</h3>
          <h3>
            <a href={movie.url}>Movie Link</a>
          </h3>
          <h3>
            <a href={movie.officialSite}>Official Site</a>
          </h3>

          <h3>Premiered : {movie.premiered}</h3>
          <img src={movie.image.original} width="350" />
          <h3>Language : {movie.language}</h3>
          <h1>Summary</h1>
          <h3>{movie.summary}</h3>
          <h3>Country :{movie.webChannel.country.name}</h3>
          <h3>Web Channel :{movie.webChannel.name}</h3>
        </div>
      </>
    )
  );
}

export default Movie;
