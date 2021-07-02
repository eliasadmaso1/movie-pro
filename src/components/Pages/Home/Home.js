import "./Home.css";
import Cards from "../../Featurs/Card/Card";
import Header from "../../Featurs/Header/Header";
import { useMoviesContext } from "../../../context";

export default function Home() {
  const movies = useMoviesContext();

  function goToLink(link) {
    <a href={link}></a>;
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => {
          return (
            <Cards
              name={movie.name}
              img={movie.image.original}
              alt="movie"
              click={movie.url}
            />
          );
        })}
      </div>
    </div>
  );
}
