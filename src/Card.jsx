import React from "react";
import { makeStyles } from '@material-ui/core/styles';

export default function Card(props) {
  const { movie } = props;
  const classes = useStyles();
  return (
    <div class="resultCard">
      <figure >
        <img className={classes.caratula}
          src={movie.Poster}
          alt= {movie.Title}
        />
      </figure>
      <div className={classes.titulo}><h4 class="bolder">{movie.Title}</h4></div>     
      <span><b>Year:</b>{movie.Year}</span>
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