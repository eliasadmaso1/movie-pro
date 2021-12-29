import React from "react";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

function Private() {
  const [privateMovie, setPrivateMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch( "https://api.tvmaze.com/shows?page=1")
    .then((response) => {
      return response.json();})
    .then((data) => {
        const currentMovie = data.find((movie)=>{
            return movie.id === id
        });
        console.log(currentMovie);
        setPrivateMovie(currentMovie)
    });
  }, []);

  return (
    
    privateMovie && (
        <div>
        <h3>{privateMovie.id}</h3>
      </div> 
    )
   
  );
}

export default Private;
