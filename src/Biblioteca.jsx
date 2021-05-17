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
import swal from 'sweetalert';
const Biblioteca = () => {
  const [datos, setDatos] = useState({results: []})
  const [texto, setTexto] = useState("Hola bro")
  const [size, setSize] = useState(14)
  const [tone, setTone] = useState("black")
  const [fondo, setFondo] = useState("")
  const [tipoLetra, setTipoLetra] = useState("")
  
  //cosas para 
const changeTone = () =>{
  swal( {
    content: "input",
    title: "Error",
          text: "Alguno de los campos es incorrecto.",
  })
  .then((value) => {
    swal(`You typed: ${value}`);
    setTone(value)
  });
}

const changeAll = () =>{
  swal("Ajustes de visualizacion", {
    buttons: {
      Fondo: "Fondo",
      Tamaño: true,
      Tonalidad: true,
      Tipo: true,
    },
  })
  .then((value) => {
    switch (value) {
   
      case "Tonalidad":
        swal( {
          content: "input",
          title: "Cambiar el color de la letra",
          text: "Ejemplo: green",
        })
        .then((value) => {
          swal({
            icon:"success",
            title: "Los cambios se han realizado correctamente",
          });
          setTone(value)
        });
        break;
   
      case "Tamaño":
        swal( {
          content: "input",
          title: "Cambiar el tamaño de la letra",
          text: "Ejemplo: 11",
        })
        .then((value) => {
          swal({
            icon:"success",
            title: "Los cambios se han realizado correctamente",
          });
          var anterior = parseInt(value)
          setSize(anterior)
        });
        break;
   
      case "Fondo":
        swal( {
          content: "input",
          title: "Modificar color de fondo",
          text: "Ejemplo: black",
        })
        .then((value) => {
          swal({
            icon:"success",
            title: "Los cambios se han realizado correctamente",
          });
          setFondo(value)
        });
        break;
        case "Tipo":
          swal( {
            content: "input",
            title: "Modificar tipo letra",
            text: "Ejemplo: verdana",
          })
          .then((value) => {
            swal({
              icon:"success",
              title: "Los cambios se han realizado correctamente",
            });
            setTipoLetra(value)
          });
          break;
          default:
          break;
    }
  });
}

  return (
    <View>
      <Navigator />
      <View>
        <Text>Esta es la pagina de biblioteca</Text>
        
      </View>
     
        <Text style={{ fontSize: size, color: tone, backgroundColor: fondo, fontFamily: tipoLetra}}>
        {texto}
        </Text>
        <Text onClick={changeAll}>
        Preferencias
        </Text>
   

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