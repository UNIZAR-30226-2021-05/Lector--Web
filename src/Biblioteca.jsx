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

  const irColeccion = () => {
    console.log("pulsado ir coleccion")
    window.location='/Colecciones';
  }

  return (
    <View>
      <Navigator />
        <h1 id="titBib"> BIBLIOTECA
          <div className="container" >
            <input id="irColecciones" type="button"  value="Colecciones" onClick={irColeccion}></input>
          </div>
        </h1>
    </View>
  )

}

export default Biblioteca;