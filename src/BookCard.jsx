import React from 'react';
import Navigator from './Navigator'
import swal from 'sweetalert';
import axios from 'axios'
import { useState, useEffect } from "react";


import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';



function BookCard({ results }) {
	const [book, setBook] = useState("");

	// Proceso para obtener libro
	useEffect(() => {
		// e.preventDefault();
		var prev = ' Token '
		var combo = prev + localStorage.getItem('userKey').substring('8', '48')
		console.log("NOMBRE")
		// console.log(localStorage.getItem('userName'))

		var url = 'http://lectorbrainbook.herokuapp.com/libro/'
		var isbn = localStorage.getItem('isbnCheck')
		var isbnUnquoted = isbn.replace(/['"]+/g, '');
		var direccion = url + isbnUnquoted

		console.log("DIRECCION")
		console.log(direccion)
		
		const response = axios.request({
		  url: direccion,
		  method: 'get',
		  headers: { 'Authorization': combo },	
		}).then(function (response) {
			setBook(response.data)
			console.log(book)
		})
		  .catch(function (error) {
			// handle error
			console.log("error")
			console.log(error);
		  })
	    }, []);

	const leer =()=>{
		window.location='/Leer';
	}
	

	const mostrarAlerta=()=>{
        swal({
			title: "Libro añadido con exito",
			text: "Disfrute de su lectura.",
			icon: "success",
			button: "Aceptar"
		});
    }

	var imagen = (
		<img
		  src={book.portada}
		  //src={'/src/images/logo.png'}
		  alt="Canvas Logo"
		/>
	)

	var tituloLibro = (
		<Text>{book.titulo}</Text>
	)

	var autor = (
		<Text>{book.autor}</Text>
	)

	var descripcion = (
		<Text>{book.sinopsis}</Text>
	)

	// Se necesitara funcion para que descargue los parametrosdel libro o similar
	// Esto es un ejemplo de funcionamiento

	return (
		<view>
			<Navigator />
			<View style={styles.container}>
				<View style={styles.caratula}>
					{imagen}
				</View>
				<View style={styles.titleContainer}>
					{/* {tituloLibro} */}
					<Text style={styles.titulo}>{tituloLibro}</Text>
				</View>
				<View style={styles.autorContainer}>
					{/* {tituloLibro} */}
					<Text style={styles.titulo}>{autor}</Text>
				</View>
				<View style={styles.sinopsis}>
					{descripcion}
				</View>
				<View>
				<TouchableOpacity style={styles.buttonContainer}>
					<input id="transparente"  type="button"  value="Añadir a tu biblioteca" onClick={mostrarAlerta}></input>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonContainer}>
					<input id="transparente"  type="button"  value="Leer libro" onClick={leer}></input>
				</TouchableOpacity>
				</View>
			</View>
		</view>





	);
}

const styles = StyleSheet.create({
	caratula:{
		
		marginBottom: 50,
		alignSelf: 'left',
		marginLeft: 50,
		position: 'absolute',
		marginTop: 70
	},

	titleContainer:{
		
		alignSelf: 'right',
		marginLeft: 500,
		marginRight: '200px',
		marginTop: 70,
		textAlign: 'left'
	},

	autorContainer:{
		
		alignSelf: 'right',
		marginLeft: 500,
		marginRight: '200px',
		marginTop: 20,
		textAlign: 'left'
	},

	titulo:{
		fontSize: 28,
		color: "#696969",
		fontWeight: "600"
		

	},

	sinopsis:{
		fontSize: 14,
		alignSelf: 'right',
		marginLeft: 500,
		marginRight: '200px',
		color: "#696969",
		marginTop: 30,
		textAlign: 'left'

	},
	description: {
		fontSize: 16,
		color: "#696969",
		marginTop: 10,
		textAlign: 'center'
	},
	buttonContainer: {
		marginTop: 100,
		marginLeft: 680,
		marginBottom: 20,
		height: 45,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: 250,
		borderRadius: 30,
		backgroundColor: "#00BFFF",
	},
	
});

export default BookCard;