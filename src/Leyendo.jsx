import React from 'react';
import Navigator from './Navigator'
import './App';
import './styles.css';
import axios from 'axios'
import {useState, useEffect, useLayoutEffect} from 'react'
import CardList from "./CardList";
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom'

import Prueba from './Prueba'


// Necesario para Grid etc
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Leyendo = () => {
 const [state, setState] = useState({
    results: []
  });
  // const [libros, setLibros] = useState({
  //   cadena: []
  // });

  
  
  const preMuestra = (dato, libros) => {
    // console.log("en premuestra: ",dato)
    var prev = ' Token '
		var combo = prev + localStorage.getItem('userKey').substring('8', '48')
    var url = 'http://lectorbrainbook.herokuapp.com/libro/'
		var isbn = String(dato.ISBN)

    
		var isbnUnquoted = isbn.replace(/['"]+/g, '');
		var direccion = url + isbnUnquoted
    
    const response = axios.request({
		  url: direccion,
		  method: 'get',
		  headers: { 'Authorization': combo },	
      
		}).then(function (response) {
      console.log(dato)
      // libros.cadena.push(response.data)
      libros.push(response.data)
      localStorage.setItem('leyendo', JSON.stringify(libros))
      var cacheArriba = localStorage.getItem('leyendo')

			// setBook(response.data)
      // console.log("libros en preMuestra: ",libros)
      // localStorage.setItem('leyendo', libros)
			console.log("estando en el thenB: ",cacheArriba)
      console.log("estando en el thenB: ",JSON.parse(cacheArriba))
		})
		  .catch(function (error) {
			// handle error
      dato = 100
			console.log("error")
			console.log(error);
		  })
  }

  useEffect(() => {
    console.log("-----------------")
    console.log("estamos en leyendo")
		var url = 'http://lectorbrainbook.herokuapp.com/usuario/guardar/'
		var name = localStorage.getItem('userName')
		var nameUnquoted = name.replace(/['"]+/g, '');
		var direccion = url + nameUnquoted

		const response = axios.request({
		  url: direccion,
		  method: 'get',
		}).then(function (response) {
            const newData = response.data.filter(function(item){
              const itemData = item.leyendo.toString().toUpperCase()
              const textData = 'TRUE'
              return itemData.indexOf(textData) > -1
          })
          
            console.log("primera peticion")
            setState(prevState => {
              return { ...prevState, results: newData }
            })

            var libros = []
            for (var i = 0; i < 200; i++) {
              console.log("i ", i)
           preMuestra(newData[i],libros)
              // if(libros[i] == null){
              //   i = 100
              //   libros.pop()
              // }
          } 

          // console.log("Libreos", libros)
          // localStorage.setItem('leyendo', libros)
          
          // console.log("cache ", localStorage.getItem('leyendo'))
          })
            .catch(function (error) {
              // handle error
              console.log("error")
              console.log(error);
            })
            
          }, []);
        // };

        const irLeyendo2 = () =>{
          console.log("ir leyendo 2")
          window.location='/Leyendo2';
        }
       

    return (
        <view>
            <Navigator />
            
            <h1 id="titBib">LEYENDO</h1>
            {/* <Text onClick = {<Prueba bookGet={state.results[0]}/>}> */}
            {/* <Text onClick = {<CardList results={busca}/>}>
                boton buscar
            </Text> */}
          
          <View>
          <input id="irLeyendo2" type="button"  value="Pulse para consultar sus lecturas" onClick={irLeyendo2}></input>
          </View> 

        </view>
    )

}


const styles = StyleSheet.create({
	caratula:{
		
		fontSize:50,
    marginLeft: 250
	},

	
});

export default Leyendo;

