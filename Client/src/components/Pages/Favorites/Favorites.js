import React from 'react';
import {getList} from '../../../Service/List-Service';
import {useState,useEffect} from 'react';
import './Favorites.css';
import {Link} from 'react-router-dom';

function Favorites() {

  const [list,SetList] = useState([]);

  useEffect(()=>{
    getList().then((res)=>{
      SetList(res);

    })

  },[])

    
    return (
        <main style={{ marginTop: "85px" }}>
        {list.map((movie)=>{
          return(
            <Link to={`/Movie/${movie.movieId}`}>
            <div className="listItem-div"><h2>{movie.name}</h2>
            <h3>{movie.genres}</h3>
            <img src={movie.image} width="150"/></div></Link>
          )
        
        })}
      </main>
    )
}

export default Favorites
