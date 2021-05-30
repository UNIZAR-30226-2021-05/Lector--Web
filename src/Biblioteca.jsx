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

import { Link } from 'react-router-dom';
import axios from 'axios';
const Biblioteca = () => {
  const [stateB, setStateB] = useState({
    resultsB: []
  });

  const handleGo = () =>{
    window.location='/Biblioteca2';
  }

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
      localStorage.setItem('leyendoNuevo', JSON.stringify(libros))
      

			// setBook(response.data)
      // console.log("libros en preMuestra: ",libros)
      // localStorage.setItem('leyendo', libros)
			// console.log("estando en el thenB: ",cacheArriba)
      // console.log("estando en el thenB: ",JSON.parse(cacheArriba))
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
		}).then(function (responseB) {
          //   const newData = responseB.data.filter(function(item){
          //     const itemData = item.leyendo.toString().toUpperCase()
          //     const textData = 'TRUE'
          //     return itemData.indexOf(textData) > -1
          // })
          
            console.log("primera peticion")
            setStateB(prevStateB => {
              return { ...prevStateB, resultsB: responseB.data }
            })

            var libros = []
            for (var i = 0; i < responseB.data.length; i++) {
              console.log("i ", i)
           preMuestra(responseB.data[i],libros)
              // if(libros[i] == null){
              //   i = 100
              //   libros.pop()
              // }
          } 

          console.log("Libreos", libros)
          // localStorage.setItem('leyendo', libros)
          
          // console.log("cache ", localStorage.getItem('leyendo'))
          })
            .catch(function (error) {
              // handle error
              console.log("error")
              console.log(error);
            })
	    }, []);

  const irColeccion = () => {
    console.log("pulsado ir coleccion")
    window.location='/Colecciones';
  }

  return (
    <view>
      <Navigator />
        <View>
        <h1 id="titBib"> BIBLIOTECA</h1>
        <p></p>
        <div id="caja glob">
          <div id="irCole">
            <input id="irColecciones" type="button"  value="Colecciones" onClick={irColeccion}></input>
          </div>

          <div id ="obteLibros">
            <input id="irLibros" type="button"  value="Obtener tus libros" onClick={handleGo}></input>
          </div>
        </div>

        </View>
    </view>
  )

}

export default Biblioteca;