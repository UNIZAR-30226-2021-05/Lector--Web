import Navigator from './Navigator'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import './App';
import React, { useState, useEffect } from 'react'
import './styles.css';


import CardList from "./CardList";
const Biblioteca2 = () => {
    var cacheArriba = localStorage.getItem('leyendoNuevo')
    console.log("cache leyendo2: ",cacheArriba)
    console.log("cache nuevo leyendo2: ",JSON.parse(cacheArriba))
    var cacheFin = JSON.parse(cacheArriba)
    if(cacheFin ==null){
      console.log("nulo")
      cacheFin = []
    }
  //   let data = []
  //   data = results
    
  


  const irColeccion = () => {
    console.log("pulsado ir coleccion")
    window.location='/Colecciones';
  }

  return (
    <View>
      <Navigator />
      <View>

        <h1>Esta es la pagina de biblioteca
          <div className="container" >
            <input id="irColecciones" type="button"  value="Colecciones" onClick={irColeccion}></input>
          </div>
        </h1>

      </View>
      <View>
      <CardList results={cacheFin} />
      </View>
    

  {/*    <TouchableOpacity style={styles.AnadirContainer} onClick={irColeccion}>
       Colecciones
     </TouchableOpacity> */}



    </View>
  )



}

const styles = StyleSheet.create({
  bigTitle: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
		marginTop: 10,
		height: 45,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		width: 250,
		borderRadius: 30,
		backgroundColor: "#00BFFF",
	}
});

export default Biblioteca2;