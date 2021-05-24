import Button from '../Button/Button';
import './Card.css';


export default function Cards(props){
    return(<div className="card">
        <Button name="to movie"/>
  
        <h3>Movie Name:{props.name}</h3>
        <h4>Categoryyyyyy :{props.category}</h4>
        <img src={props.img} alt={props.alt} width="450"/>
    </div>)
}