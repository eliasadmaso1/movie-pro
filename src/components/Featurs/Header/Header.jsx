import './Header.css';
import logo from '../../../assets/logo.png'

export default function Header(props){
    return(
        <div className = "headerDiv">
        <img src={logo} alt="logo" width="150"/>
        <input type="text" name="search" placeholder="Search.."/>
        <ul className="header-ul">
        <li className="header-li">{props.l1}</li>
        <li className="header-li">{props.l2}</li>
        <li className="header-li">{props.l3}</li>
        <li className="header-li">{props.l4}</li>
        </ul>



        </div>
    )
}