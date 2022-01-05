import React from "react";
import { useMyContext } from "../../../context";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../Featurs/Footer/Footer";

function Home() {
  
  const { movies } = useMyContext();



 

  return (
    <>
    <div className="home">
      <img src="https://storage.googleapis.com/afs-prod/media/ed5f8b8cba114c7b84e25e9420cafb6d/3000.jpeg" />
      </div>
     <div className="slide">
        <div className="slide-track">
        
              <div className="slide">
              <img className="img-slide"
                src="https://static.tvmaze.com/uploads/images/original_untouched/75/188991.jpg"
              />
              </div>
              <div className="slide">
              <img className="img-slide"
                src="https://static.tvmaze.com/uploads/images/original_untouched/1/4601.jpg"
              />
              </div>
              <div className="slide">
              <img className="img-slide"
                src="https://static.tvmaze.com/uploads/images/original_untouched/387/969525.jpg"
              />
              </div>
              <div className="slide">
              <img className="img-slide"
                src="https://static.tvmaze.com/uploads/images/original_untouched/170/427163.jpg"
              />
              </div>
              <div className="slide">
              <img className="img-slide"
                src="https://static.tvmaze.com/uploads/images/original_untouched/2/5349.jpg"
              />
              </div>
              <div className="slide">
              <img className="img-slide"
                src="https://static.tvmaze.com/uploads/images/original_untouched/2/5334.jpg"
              />
              </div>
          
        </div>
      </div>
      </>

   
  );
}

export default Home;
