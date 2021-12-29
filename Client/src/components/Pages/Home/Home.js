import React from "react";
import { useMyContext } from "../../../context";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../Featurs/Footer/Footer";

function Home() {
  // const [filtered, setFiltered] = useState([]);

  // const changeHandler = (e) => {
  //   setTimeout(() => {
  //     const results = movies.filter((res) =>
  //     res.name.toLowerCase().startsWith(e.target.value)
  //   );
  //   setFiltered(results);
  //   if (e.target.value == "") {
  //     setFiltered([]);
  //   }

  //   }, 2000);

  // };

  // const [movies, setMovies] = useState([]);
  const { movies } = useMyContext();
  console.log(movies);



 

  return (
    <>
     <div className="row">
        <div className="row-posters">
          {movies.map((movie) => {
            return (
              <img
                className="row-poster-home"
                src={movie.image.original}
                width="140"
              />
            );
          })}
        </div>
      </div>
      {/* <input type="text" onChange={changeHandler} style={{marginLeft:"90%",marginTop:"80px"}} placeholder="Search"/> */}

    </>
  );
}

export default Home;
