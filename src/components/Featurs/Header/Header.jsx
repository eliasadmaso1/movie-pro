import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="topnav1">
      <ul>
        <li className="active1">
          <Link to="Treilers">Treilers</Link>
        </li>
        <li className="active1">
          <Link to="/Series">Series</Link>
        </li>
        <li className="active1">
          <Link to="/Reality">Reality</Link>
        </li>
        <li className="active1">
          <Link to="/Sport">Sport</Link>
        </li>
      </ul>
    </div>
  );
}
