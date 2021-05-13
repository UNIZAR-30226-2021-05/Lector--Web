import React from 'react';
import Navigator from './Navigator'
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { useState } from "react";
import './App';
import './styles.css';

const Biblioteca = () => {
  const [datos, setDatos] = useState({results: []})


  


 
  


  const handleLogout = () => {
    {console.log("titulo")}
        {console.log(datos.titulo)}
		{datos.map((item, key) => (
      
      <View key={key}>
        <Text>{item.titulo}</Text>
        
      </View>))
    }
	};
  return (
    <View>
      <Navigator />
      <h1>Biblioteca</h1>

      </View>
  )



}

const styles = StyleSheet.create({
  bigTitle: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  }
});

export default Biblioteca;