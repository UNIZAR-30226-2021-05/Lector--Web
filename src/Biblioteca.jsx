import React from 'react';
import Navigator from './Navigator'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useState } from "react";
import './App';
import Colecciones from './Colecciones'
import './styles.css';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Biblioteca = () => {


  const getBookmarks = () => {
    // e.preventDefault();
    var prev = ' Token '
    var combo = prev + localStorage.getItem('userKey').substring('8', '48')
    console.log("NOMBRE")
    // console.log(localStorage.getItem('userName'))

    var url = 'http://lectorbrainbook.herokuapp.com/'
    var usuario = localStorage.getItem('userName')
    var usuarioUnquoted = usuario.replace(/['"]+/g, '');
    var direccion = url + usuarioUnquoted

    var isbn = localStorage.getItem('isbnCheck')
    var isbnUnquoted = isbn.replace(/['"]+/g, '');

    var direccion = url + usuarioUnquoted + "/" + isbnUnquoted

    console.log("DIRECCION")
    console.log(direccion)

    const response = axios.request({
      url: direccion,
      method: 'get',

    }).then(function (response) {
      console.log("respuesta", response.data)
    })
      .catch(function (error) {
        // handle error
        console.log("error")
        console.log(error);
      })
      ;
  };

  const setBookmarks = () => {
    // e.preventDefault();
    var prev = ' Token '
    var combo = prev + localStorage.getItem('userKey').substring('8', '48')
    console.log("NOMBRE")
    // console.log(localStorage.getItem('userName'))

    var url = 'http://lectorbrainbook.herokuapp.com/'
    var usuario = localStorage.getItem('userName')
    var usuarioUnquoted = usuario.replace(/['"]+/g, '');
    var direccion = url + usuarioUnquoted

    var isbn = localStorage.getItem('isbnCheck')
    var isbnUnquoted = isbn.replace(/['"]+/g, '');

    var direccion = url + usuarioUnquoted + "/" + isbnUnquoted

    console.log("DIRECCION")
    console.log(direccion)

    const response = axios.request({
      url: direccion,
      method: 'post',
      data: {
      'Libro': isbn,
      'Usuario': 2,
      'cuerpo': "Bastante guapo",
      'esAnotacion': false,
      'id': 2,
      'offset': 100,
      'titulo': "Oooh, que pena"
      }

    }).then(function (response) {
      console.log("respuesta", response.data)
    })
      .catch(function (error) {
        // handle error
        console.log("error")
        console.log(error);
      })
      ;
  };



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
      <TouchableOpacity style={styles.buttonContainer} onClick={getBookmarks}>
        Boton para obtener los bookmarks
     </TouchableOpacity>
     <TouchableOpacity style={styles.buttonContainer} onClick={getBookmarks}>
        Boton para poner los bookmarks
     </TouchableOpacity>

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

export default Biblioteca;