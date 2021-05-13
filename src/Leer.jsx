import React, { Component } from 'react';
import { useState, useEffect, useLayoutEffect } from "react";
import logo from './LogoWeb.svg';
import EditarPerfil from './componentesPerfil/EditarPerfil'
import { Link } from 'react-router-dom'
import Navigator from './Navigator'

import axios from 'axios'

import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';



const Leer = () => {
    const [texto, setTexto] = useState("");
	const [inicio, setInicio] = useState(0)
	const [final, setFinal] = useState(900)
	const [subtexto, setSubtexto] = useState("")
    useEffect(() => {
		// e.preventDefault();
		console.log("RENDER")
		var url = 'https://lectorbrainbook.herokuapp.com/libro/offset/Don_Quijote_de_la_Mancha-Cervantes_Miguel.epub/0/15000'
		// var isbn = localStorage.getItem('isbnCheck')
		// var isbnUnquoted = isbn.replace(/['"]+/g, '');
		var direccion = url 
        // + isbnUnquoted

	
		
		const response = axios.request({
		  url: direccion,
		  method: 'get',	
		}).then(function (response) {
			setTexto(response.data.text.substr(inicio,final))
			setSubtexto(response.data)
		})
		  .catch(function (error) {
			// handle error
			console.log("error")
			console.log(error);
		  })
	    }, []);
		
		const atras = () => {
			if(inicio == '0'){
				console.log("Ya no puedes ir mas atras")
			}else{
				console.log("inicio previo atras", inicio)
				console.log("final previo atras", final)
				var previoA = inicio
				var previoB = final
				setInicio(previoA - 900)
				setFinal(previoB - 900)
				console.log("inicio atras  modificado", inicio)
				console.log("final  atras modificado", final)
				setTexto(subtexto.text.substr(inicio,final))
				
			}
		};

		
		var otro = ""
		// Preguntar como sucede si se ha llegado al final del libro
		const alante = () => {
			if(final > 14100){
				console.log("final es ", final)
				console.log("toca volver a cargar")
			}else{
				console.log("inicio alante previo", inicio)
				console.log("final alante previo", final)
				var previo = inicio
				var previo1 = final
				setInicio(previo + 900)
				setFinal(previo1 + 900)
				console.log("inicio alante modificado", inicio)
				console.log("final alante modificado", final)
				setTexto(subtexto.text.substr(inicio,final))
				
				console.log("el texto ", texto)
			}
		};
 
			
		
	return (
		<View>
			<Navigator />
		<h1>Pagina de leer</h1>
        <View style={styles.textoLibro}>
            <Text style={styles.textBook}>
                {texto}
            </Text>
        </View>
		<Text onClick={alante}>
			Boton para ir hacia alante
		</Text>
		<Text onClick={atras}>
			Boton para ir hacia atras
		</Text>
		</View>

	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#FFFF",
		height: 200,
	},
	textContainer: {
		
		
		textAlign:'justify',
	},

	textBook: {
		marginLeft: 500,
		fontSize:11,
	}


});

export default Leer;