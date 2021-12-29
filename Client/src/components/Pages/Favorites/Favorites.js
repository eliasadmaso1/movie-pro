import React from 'react';
import { Grid } from "@material-ui/core";
import CardComponent from "../../Featurs/Cards/Cards";
import {getList} from '../../../Service/List-Service';
import {useState,useEffect} from 'react';

function Favorites() {

  const [list,SetList] = useState([]);

  // useEffect(()=>{
  //   getList().then((res)=>{
  //     SetList(res);

  //   })

  // },[])

    
    return (
        <main style={{ marginTop: "85px" }}>
        <Grid container spacing={15}>
          {list.map((favor) => (
            <Grid item md={3}>
              <CardComponent name={favor.name} />
            </Grid>
          ))}
        </Grid>
      </main>
    )
}

export default Favorites
