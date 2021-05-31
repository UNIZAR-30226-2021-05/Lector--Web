import React from "react";
import Card from "./Card";
import {
  StyleSheet
} from 'react-native';
import { useState} from "react";
import CardList from "./CardList";
// Necesario para Grid etc
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import Navigator from './Navigator'
import Typography from '@material-ui/core/Typography';

function Leyendo2({ results }) {
  
  var cacheArriba = localStorage.getItem('leyendo')
  // console.log("cache leyendo2: ",cacheArriba)
  // console.log("cache nuevo leyendo2: ",JSON.parse(cacheArriba))
  var cacheFin = JSON.parse(cacheArriba)
  if(cacheFin ==null){
    console.log("nulo")
    cacheFin = []
  }
//   let data = []
//   data = results
  


return (
  <div className="result">
      <Navigator />
      <h1 id="titBib">LEYENDO</h1>
      <CardList results={cacheFin} />

      <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://brainbookweb.herokuapp.com/">
              BrainBook
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
  </div>
);
}

export default Leyendo2;