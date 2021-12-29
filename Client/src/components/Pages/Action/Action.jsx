import { useMyContext } from "../../../context";
import { Grid } from "@material-ui/core";
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import "./Action.css";
import CardComponent from "../../Featurs/Cards/Cards";

export default function ActionMovies() {
  const { movies ,Favorites} = useMyContext();
  const [filtered, setFiltered] = useState([]);

  

  useEffect(() => {
    console.log(movies);
    const results = movies.filter((res) => {
      return res.genres.includes("Action");
    });

    setFiltered(results);
  }, []);

  const addToFavorites = (name,img)=>{
    Favorites.push(...Favorites,{name,img})
    console.log(Favorites);
  }

  return (
    <>
    <div className="row">
    <h2>Action Movies</h2>
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
