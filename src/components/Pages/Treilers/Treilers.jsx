import { useMoviesContext } from "../../../context";
import "./Treilers.css";

export default function Treiler() {
  const movies = useMoviesContext();

  return (
    <div className="treilerDiv">
      <input type="number" />
      <h1>{movies.id}</h1>
    </div>
  );
}
