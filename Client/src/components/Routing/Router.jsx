import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ActionMovies from "../Pages/Action/Action";
import ComedyMovies from "../Pages/Comedy/Comedy";
import DramaMovies from "../Pages/Drama/Drama";
import FamilyMovies from "../Pages/Family/Family";
import Movie from "../Pages/Movie/movie";

export default function RouteComponent() {
  return (
    <Switch>
      <Route exact path="/movie-pro" component={Home} />
      <Route path="/Comedy" component={ComedyMovies} />
      <Route path="/Action" component={ActionMovies} />
      <Route path="/Drama" component={DramaMovies} />
      <Route path="/Family" component={FamilyMovies} />
      <Route path="/Movie/:id" component={Movie} />
    </Switch>
  );
}
