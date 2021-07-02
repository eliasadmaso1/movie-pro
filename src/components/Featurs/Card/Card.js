import Button from "../Button/Button";
import "./Card.css";

export default function Cards(props) {
  const { click, img, name } = props;

  return (
    <div className="card">
      <Button name="to movie" link={click} />

      <h3>Movie Name:{name}</h3>

      <img src={img} width="350" />
    </div>
  );
}
