import "./App.css";
import RouteComponent from "./components/Routing/Router";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context";
import { useEffect, useState } from "react";
import Footer from "./components/Featurs/Footer/Footer";
import NavbarComponent from "./components/Featurs/Navbar/Navbar";
import jwt from "jsonwebtoken";


function App() {
  const [user, setUser] = useState();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const _user = jwt.verify(token, "eliasadmaso");
      setUser(_user);
    }
    fetch( "https://api.tvmaze.com/shows?page=1")
      .then((response) => {
        return response.json();})
      .then((data) => {
        return setMovies(data);});
  }, []);

 

  console.log(movies)

  return (
    <UserProvider value={{movies,user}}>
      <Router>
        
        <RouteComponent />
        <NavbarComponent/>
      </Router>

    </UserProvider>
  );
}

export default App;
