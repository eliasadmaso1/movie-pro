import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../../assets/logo.png";

export default function NavBarComponent() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={Logo} style={{ width: "150px" }} />
      </div>
      <div className="topnav">
        <ul>
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <Link to="/Reiginster">Reiginster</Link>
          </li>
          <li className="active">
            <Link to="/Something">Treilers</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
