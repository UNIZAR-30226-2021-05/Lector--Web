import React from "react";
import { makeStyles } from '@material-ui/core/styles';

export default function Card(props) {
  const { movie } = props;
  const classes = useStyles();
  return (
    <div class="resultCard">
      <figure >
        <img className={classes.caratula}
          src={movie.portada}
          alt= {movie.titulo}
        />
      </figure>
      <div className={classes.titulo}><h4 class="bolder">{movie.titulo}</h4></div>     
      <span><b>Autor: </b>{movie.autor}</span>
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