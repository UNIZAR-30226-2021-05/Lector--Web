import React from "react";
import Card from "./Card";
import BookCard from "./BookCard";
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useState, useEffect } from "react";

// Necesario para Grid etc
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

//stylesheet
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
}  from 'react-router-dom'


function CardList({ results }) {
  let data = []
  data = results
  // if (results.data) {
  //   data = results.data.Search || [];
  // }
  // console.log(data);

  // // Esta funcion ha de ser cambiada por link
  // const handleSubmit = async e => {
  //   console.log("Se ha clicado encima")
  //   window.location = '/BookCard';

  //   ;
  // }


  

  const goBook = (item) => (event) => {
    // you can access the item object and the event object

    localStorage.setItem('isbnCheck', item)
    console.log("obtenido", localStorage.getItem('isbnCheck'));
    window.location='/BookCard';
  }


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper2:{
      padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

  const [spacing, setSpacing] = React.useState(2);
  const [numero, setNumero] = useState("3")
  const classes = useStyles();

  // const handlePlus = () => {
  //   // you can access the item object and the event object
  //   var actual = numero + 1
  //   setNumero(actual)
    
  // }

return (
  <div className="result">


    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <Grid container justify="left" spacing={spacing}>
          {data.map((item) => (
            <Grid key={item.ISBN} item onClick={goBook(item.ISBN) }>
              {/* <Link to="BookCard" className="BookCard"> */}
              <Card key={item.ISBN} movie={item} />
              {/* </Link> */}
            </Grid>
          )).slice(0,numero)}
          
        </Grid>
        
      </Grid>
      {/* <Button onClick={handlePlus}> Continuar mirando... </Button> */}
    </Grid>


  </div>
);
}

const styles = StyleSheet.create({
  libro: {
    height: 30,
    width: 300,
    marginLeft: 50
  },
  bloque: {

    marginBottom: 500,
    height: 45,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 250,

  },
  categoria: {
    marginTop: 20
  },
  vermas: {

    marginTop: -30,
    marginBottom: 0,
    // alignItems: 'left',
    alignItems: 'center',
    //alinear derecha
    marginLeft: 1000
  }
});

export default CardList;