import "./App.css";
import RouteComponent from "../src/components/Routing/Router";
import NavBarComponent from "../src/components/Featurs/NavBar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "../src/context";
import { useEffect, useState } from "react";

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const LinkApi = "https://api.tvmaze.com/shows?page=1";
    fetch(LinkApi)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setCard(data);
      });
  }, []);
  return (
    <UserProvider value={card}>
      <Router>
        <NavBarComponent />
        <RouteComponent />
      </Router>
    </UserProvider>
  );
}

export default App;
