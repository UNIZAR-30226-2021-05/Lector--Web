import React, { useState } from "react";

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

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


function AppCard() {
  const [state, setState] = useState({
    results: []
  });

  const onSearch = async (text) => {
    const results = await MovieSource.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "821d565d" },
    });

    setState(prevState => {
      return { ...prevState, results: results }
    })
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
            <h3>En su biblioteca</h3>
            <View style={stylesB.containerVer}>
              {/* Linkar esto a la biblioteca con la busqueda filtrada */}
            <h3>Ver mas</h3>
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
    marginLeft:615
  }
});

export default AppCard;