import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Reiginster from "../Pages/Reiginster/Reginster";
import Treilers from "../Pages/Treilers/Treilers";

export default function RouteComponent() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Reiginster" component={Reiginster}></Route>
        <Route path="/Treilers" component={Treilers} />
      </Switch>
    </>
  );
}
