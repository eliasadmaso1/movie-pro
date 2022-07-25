import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../assets/cinemax.png'

function Home() {
  const [toggle,setToggle] = useState(true);

  const clicked = ()=>{
      setToggle(prev => !prev);
  }

return (
  <>
      <section className={toggle ? "showcase" : "showcase active"}>
      <header>
          <img src={logo} className="logo"/>
          {toggle ?  <MenuIcon onClick={clicked} style={{fontSize:"35px"}}/> :   <CloseIcon onClick={clicked} style={{fontSize:"35px"}}/>}
        
      </header>
      <img src="https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="background" className="background"/>

      <div className="overlayDiv"></div>

      <div className="text">
          <h2>Best Movies</h2>
          <h3>Action</h3>
          <h3>Comedy</h3>
          <h3>Drama</h3>
          <h3>Family</h3>

      

      </div>
  </section>
  <div className="menu">
      <ul>
      <li> <Link to="/" className="link">Home</Link></li>
      <li> <Link to="/Comedy" className="link">Comedy Movies</Link></li>
      <li> <Link to="/Action" className="link">Action Movies</Link></li>
      <li> <Link to="/Drama" className="link">Drama Movies</Link></li>
      <li> <Link to="/Family" className="link">Family Movies</Link></li>


        

      </ul>
  </div>
  </>
  
)
}

export default Home;
