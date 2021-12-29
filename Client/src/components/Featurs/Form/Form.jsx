import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      
    },
  },
}));

export default function ColorTextFields(props) {
  const {label1,label2,label3} = props;
  const classes = useStyles();

  return (
    
    <form className={classes.root} noValidate autoComplete="off">
      
      <TextField
        id="UserName"
        variant="outlined"
        color="primary"
        label="UserName"
        style={{border:"solid 2px white",background:"white"}}
      />

       <TextField
        id="Email"
        variant="outlined"
        color="primary"
        label="Email"
        style={{border:"solid 2px white",background:"white",display:"flex",}}
      />

       <TextField
        id="Password"
        variant="outlined"
        color="primary"
        label="Password"
        style={{border:"solid 2px white",background:"white"}}
      />
     <Button style={{border:"solid 0.5px white",color:"white"}}>Login</Button>

    </form>
     
  );
}