import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import { useState, useEffect } from "react";
import axios from 'axios'
export default function Leer2(tu) {
	
const [texto, setTexto] = useState('')
	let data = []
  data = tu
  console.log("cosas tu")
  console.log(tu)
  console.log(tu.tu == 0)
	if(tu.tu == 0){
	console.log("leer2", tu)
	var bookToRead = localStorage.getItem('pthBook')
		// console.log(bookToRead)
		var bookToReadUnquoted = bookToRead.replace(/['"]+/g, '');
		// console.log("el ISBN obtenido en leer.jsx es: ", bookToReadUnquoted)

		var formato = localStorage.getItem('formato')
		var formatoUnquoted = formato.replace(/['"]+/g, '');
    var url = 'https://lectorbrainbook.herokuapp.com/libro/offset/' + bookToReadUnquoted + '.' + formatoUnquoted 
		+  '/' + (tu.tu).toString()  + '/' + (parseInt(tu.tu,10) + 900).toString()
		var direccion = url
		console.log("la direccion en Leer2", direccion)
		const response = axios.request({
			url: direccion,
			method: 'get',
		}).then(function (response) {
			console.log("bien obtenido")
			console.log(response)
			setTexto(response.data.text)
			

		})
			.catch(function (error) {
				// handle error
				console.log("error en el primer texto")
				console.log(error);
			})
		}
		else{
			console.log("fail pa todos")
		}



  return (
    <div class="resultCard">
      <Text>
          {texto}
      </Text>
    </div>
  )};

  const useStyles = makeStyles((theme) => ({
    
    caratula: {
      height: 444,
      width: 300
    },
    titulo: {
       maxWidth: 300,
	     
    }
   
  }));