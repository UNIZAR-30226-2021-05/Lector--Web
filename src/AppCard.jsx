import React from "react";
import { useState} from "react";
import CardList from "./CardList";
import SearchBar from "./SearchBar";


// Necesario para Grid etc
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import { useState, useEffect } from "react";
import axios from 'axios'

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



function AppCard() {
  const [state, setState] = useState({
    results: []
  });

  const [stateB, setStateB] = useState({
    resultsB: []
  });
  

  const[todos, setTodos] = useState("")
  const[mios, setMios] = useState("")

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


  const onSearch = async (text) => {
    //resultados de todos los libros
    var url = 'http://lectorbrainbook.herokuapp.com/libro/todos/'
    const results = axios({
      url: url,
      method: 'get',
    }).then(function (response) {
      const newData = response.data.filter(function(item){
        const itemData = item.titulo.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
    })
    
    if(newData.length === 0){
      setTodos("")
      // Esto cambiar a la busqueda dentro de blbioteca
      setMios("")
    }
    else{
      setTodos("Todos")
      // Esto cambiar a la busqueda dentro de blbioteca
      setMios("Guardados")
    }
      setState(prevState => {
        return { ...prevState, results: newData }
      })
      
    console.log("resultadofinal1")
    console.log(newData)
    })
      .catch(function (error) {
        // handle error
        console.log("error")
        console.log(error);
      })
      ;

      //ESTA SERA LA PARTE PARA VER LOS LIBROS DEL USUARIO
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
      
  };



 

  const classes = useStyles();
  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">
          Introduzca el nombre de un libro
        </h2>
        <div className={classes.root}>
        <Grid  container spacing={3}>
          <Grid item xs={12}>
          <SearchBar onSearch={onSearch} />
          </Grid>
          <Grid item xs={12}>
            <Grid id="texto parcial">
            <View style={stylesB.containerBotones}>
            <Text>{todos}</Text>
            <View style={stylesB.containerVer}>
                          
            </View>
            </View>
            </Grid>
          </Grid>
          <Grid >
          <CardList results={state.results} />
          </Grid>
        </Grid>
        </div>
        <div style={{ marginTop:50 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid id="texto parcial">
            <View style={stylesB.containerBotones}>
            <Text>{mios}</Text>
            <View style={stylesB.containerVer}>
              
            </View>
            </View>
            </Grid>
          </Grid>
          {/* <Grid >
          <CardList results={stateB.resultsB} />
          </Grid> */}
        </Grid>

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
    marginLeft:715
  },
  containerBig:{
    marginTop:200
  }
});

export default AppCard;