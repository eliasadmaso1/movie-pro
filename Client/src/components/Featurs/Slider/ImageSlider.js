import React from "react";
import {useEffect,useState} from 'react';
import { Carousel } from "antd";
import { useMyContext } from "../../../context";
import "antd/dist/antd.css";
import "./slider.css";

const ImageSlider = () => {
    const { movies } = useMyContext();
    const [filterd, setFiltered] = useState([]);


    useEffect(() => {
        console.log(movies);
        const results = movies.filter((res) => {
          return res.genres.includes("Action");
        });
    
        setFiltered(results);
      }, []);

    return (
      <div className="slider-img-section">
        <div className="slider-container">
          <div className="container-frame-cube ">
          <div className="frame-cube"></div>
          </div>
          <Carousel autoplay>
            {filterd.map((slide) => (
              <div>
                <img src={slide.image.original} id="img-slide" alt="carousel-img" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  };
  export default ImageSlider;