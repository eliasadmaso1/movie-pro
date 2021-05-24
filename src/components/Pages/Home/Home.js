
import './Home.css';


import Cards from '../../Featurs/Card/Card';
import logo1 from '../../../assets/HobbsShaw.jpeg';
import logo2 from '../../../assets/bad boys.jpeg';
import logo3 from '../../../assets/creed.jpg';
import logo4 from '../../../assets/black panther.jpeg';
import Header from '../../Featurs/Header/Header';
import Footer from '../../Featurs/Footer/Footer';


const cardsList = [
    {
  
    name: "Hobbs & Shaw",
    category: "Action",
    img: logo1,
    alt:"1"
  },
    {
    
    name: "Bad Boys",
    category: "Action & Comedy",
    img: logo2,
    alt:"2"
  },
    {
   
    name: "Creed",
    category: "Action",
    img: logo3,
    alt:"3"
  },
    {
   
    name: "Black Panther",
    category: "Action",
    img: logo4,
    alt:"4"
  },
  ]

export default function Home(){
    return (
    <div>
      <Header l1="Series" l2="HBO" l3="Downloads" l4="Register"/>
        {cardsList.map((card)=>{
      return <Cards  name={card.name} category={card.category} img={card.img} alt={card.alt} />
    })}
    <Footer h3="Follow Us"/>
    </div>
      

  
    
    )
}