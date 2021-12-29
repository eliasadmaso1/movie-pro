import { useMyContext } from "../../../context";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

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
    <>
    <div className="row">
    <h2>Comedy Movies</h2>
    <div className="row-posters">
    
    {filtered.map((movie)=>{
        return (<><img className="row-poster" src={movie.image.original} width="140"/>
        <Link to={`/Movie/${movie.id}`}><button>click</button></Link></>)

      })}
    </div>
    </div>
    
    </>
  );
}