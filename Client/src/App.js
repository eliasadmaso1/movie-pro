import "./App.css";
import RouteComponent from "./components/Routing/Router";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <RouteComponent />
      </Router>
    </>
  );
}

export default App;
