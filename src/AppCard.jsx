import React from "react";
import { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBar from "./SearchBar";

import MovieSource from "./api/MovieSource";

// Necesario para Grid etc
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
// import { useState, useEffect } from "react";
import axios from 'axios'

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Filter } from "@material-ui/icons";



function AppCard() {
  const [state, setState] = useState({
    results: []
  });
  const[todos, setTodos] = useState("")
  const[ver, setVer] = useState("")
  const[mios, setMios] = useState("")

  const onSearch = async (text) => {
    console.log("TEXTO ---")
    console.log(text)
    var url = 'http://lectorbrainbook.herokuapp.com/libro/todos/'
    const results = axios({
      url: url,
      method: 'get',
    }).then(function (response) {
      const newData = response.data.filter(function(item){
        const itemData = item.titulo.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
    })
    
    if(newData.length == 0){
      setTodos("")
      setVer("")
    }
    else{
      setTodos("Todos")
      setVer("Ver mas")
    }
      setState(prevState => {
        return { ...prevState, results: newData }
      })
      
    // console.log("resultadofinal")
    // console.log(newData)
    })
      .catch(function (error) {
        // handle error
        console.log("error")
        console.log(error);
      })
      ;
  };


 

  const classes = useStyles();
  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">
          Encuentre su libro favorito
        </h2>
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <SearchBar onSearch={onSearch} />
          </Grid>
          <Grid item xs={12}>
            <Grid >
            <View style={stylesB.containerBotones}>
            <Text>{todos}</Text>
            <View style={stylesB.containerVer}>
              {/* Linkar esto a la biblioteca con la busqueda filtrada */}
            <Text>{ver}</Text>
            </View>
            </View>
            </Grid>
          </Grid>
          <Grid >
          <CardList results={state.results} />
          </Grid>
        </Grid>
        {/* <SearchBar onSearch={onSearch} /> */}
        {/* <CardList results={state.results} /> */}
        </div>
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    flexDirection: 'row',
  }
}));

const stylesB = StyleSheet.create({
  
  containerBotones:{
      //flex: 1,
      flexDirection: 'row',
      //justifyContent: 'flex-end',
      //alignContent:'flex-end',
      //marginTop: 300,
      //marginBottom: 50
  },
  containerVer:{
    marginLeft:715
  }
});

export default AppCard;