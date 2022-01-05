import { useMyContext } from "../../../context";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import './Comedy.css';


export default function ComedyMovies() {
  const { movies } = useMyContext();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    console.log(movies);
    const results = movies.filter((res) => {
      return res.genres.includes("Comedy");
    });

    setFiltered(results);
  }, []);

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