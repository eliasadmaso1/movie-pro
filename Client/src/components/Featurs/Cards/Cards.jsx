import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from "@material-ui/core";
import useStyles from "./styles";
import { useMyContext } from "../../../context";
import {
  HeartOutlined,
  DeleteOutlined
} from "@ant-design/icons";



export default function CardComponent({img,name,genres,addOne,isFavorite,removeOne}){
 
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={img} />
      <CardContent>
        <div className={classes.CardContent}>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {genres}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
      <IconButton>{isFavorite ? <DeleteOutlined onClick={removeOne}/> : <HeartOutlined onClick={addOne}/>
}
            </IconButton>
      </CardActions>
    </Card>
  );
}
