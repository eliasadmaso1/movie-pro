import './Footer.css';

export default function Footer(props){
    return(
    <div className="footerDiv">
                    
                            <h3>{props.h3}</h3>
                            <ul>
                                <li>
                                
                                        <i class="fa fa-facebook"></i>
                                
                                </li>
                                <li>
                                    
                                        <i class="fa fa-twitter"></i>
                                    
                                </li>
                                <li>
                                    
                                        <i class="fa fa-google-plus"></i>
                                    
                                </li>
                                <li>
                                    
                                        <i class="fa fa-linkedin"></i>
                                
                                </li>
                                <li>
                                    
                                        <i class="fa fa-instagram"></i>
                                    
                                </li>
                            </ul>
                        

    </div>)
}