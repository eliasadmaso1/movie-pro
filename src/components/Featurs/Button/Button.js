import Button from '@material-ui/core/Button';


export default function Button1(props){
    
       const {link} = props;

     


 
        return(
            <a href={link}><Button variant="outlined" color="primary">click</Button></a>
        )
    }

    
