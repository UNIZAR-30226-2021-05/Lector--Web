import React from "react";
import { makeStyles } from '@material-ui/core/styles';

export default function BM(props) {
  const { movie } = props;
  const classes = useStyles();
  return (
    <div class="resultCard">
        
      <span><b>Autor: </b>{movie.titulo}</span>
    </div>
  )};

  const useStyles = makeStyles((theme) => ({
    
    caratula: {
      height: 444,
      width: 300
    },
    titulo: {
       maxWidth: 300,
	     
    }
   
  }));