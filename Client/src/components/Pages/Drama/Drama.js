import { useMyContext } from "../../../context";
import CardComponent from '../../Featurs/Cards/Cards';
import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";


export default function DramaMovies() {
  const { movies } = useMyContext();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    console.log(movies);
    const results = movies.filter((res) => {
      return res.genres.includes("Drama");
    });

    setFiltered(results);
  }, []);

  return (
    <>
    <div className="row">
    <h2>Drama Movies</h2>
        <div className="row-posters">
        
        {filtered.map((movie)=>{
            return (<img className="row-poster" src={movie.image.original} width="140"/>)

          })}
        </div>
    </div>
     </>
  );
}