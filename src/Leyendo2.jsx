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

  </div>
);
}

export default Leyendo2;