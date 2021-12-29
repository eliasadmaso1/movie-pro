import { Switch, Route } from "react-router-dom";
import Home from '../Pages/Home/Home'
import ActionMovies from "../Pages/Action/Action";
import ComedyMovies from "../Pages/Comedy/Comedy";
import DramaMovies from "../Pages/Drama/Drama";
import FamilyMovies from "../Pages/Family/Family";
import Favorites from "../Pages/Favorites/Favorites";
import Movie from '../Pages/Movie/movie';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export default function RouteComponent() {
  return (
    <div style={{ height: "1500px", background: "white" }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Comedy" component={ComedyMovies} />
        <Route path="/Action" component={ActionMovies} />
        <Route path="/Drama" component={DramaMovies} />
        <Route path="/Family" component={FamilyMovies} />
        <Route path="/Favorites" component={Favorites} />
        <Route path="/Movie/:id" component={Movie} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />






      </Switch>
    </div>
  );
}
