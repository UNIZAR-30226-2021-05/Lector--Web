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
	const [acceso, setAcceso] = useState("hidden")
	const [accesoEliminar, setaccesoEliminar] = useState("hidden")
	const [accesoBiblioteca, setaccesoBiblioteca] = useState('')

	// Proceso para obtener libro
	useEffect(() => {
		// e.preventDefault();
		var prev = ' Token '
		var combo = prev + localStorage.getItem('userKey').substring('8', '48')
		console.log("NOMBRE")
		// console.log(localStorage.getItem('userName'))

		var url = 'https://lectorbrainbook.herokuapp.com/libro/'
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
			console.log(response)
		})
		  .catch(function (error) {
			// handle error
			console.log("error")
			console.log(error);
		  })

		//Peticion para comprobar si un libro pertenece o no al usuario
		// https://lectorbrainbook.herokuapp.com/usuario/guardar/<str:username>/<str:ISBN>
		var urlPertenece = 'https://lectorbrainbook.herokuapp.com/usuario/guardar/'
		var direccion = urlPertenece + localStorage.getItem('userName') + '/' + isbnUnquoted
		const responseB = axios.request({
			url: direccion,
			method: 'get',
		  }).then(function (responseB) {
			  console.log("ha sido comprobado correctamente")
			  console.log(responseB.data)
			  if(responseB.data.error){
				  console.log("no esta")
				  setAcceso(false)
				 
			  }
			  else{
				  console.log("esta")
				  setAcceso(true)
			  }
		  })
			.catch(function (error) {
			  // handle error
			  console.log("error pertenece")
			  console.log(error);
			})
	    }, []);

	const leer =()=>{
		var url = 'https://lectorbrainbook.herokuapp.com/usuario/guardar/'
		var name = localStorage.getItem('userName')
		var nameUnquoted = name.replace(/['"]+/g, '');
		console.log(nameUnquoted)

		var isbn = book.ISBN
		console.log("ISBN en bookcard", isbn)
		var isbnUnquoted = isbn.replace(/['"]+/g, '');



		var direccion = url + nameUnquoted + '/' + isbnUnquoted

		console.log("DIRECCION")
		console.log(direccion)
		
		const response = axios.request({
		  url: direccion,
		  method: 'post',
		  data: {
			'ISBN': isbnUnquoted,
			'leyendo': true,
			'currentOffset': 0,
			}
		}).then(function (response) {
			console.log(response.data)
			
			
		})
		  .catch(function (error) {
			// handle error
			
		  })
		
		localStorage.setItem('formato',book.formato)
		localStorage.setItem('btr', book.titulo)
		console.log(book.pathLibro)
		localStorage.setItem('pthBook', book.pathLibro)
		window.location='/Leer';
	}
	

	
	

	const handleSubmit=()=>{
		if(acceso == false){
		var url = 'https://lectorbrainbook.herokuapp.com/usuario/guardar/'
		var name = localStorage.getItem('userName')
		var nameUnquoted = name.replace(/['"]+/g, '');
		console.log(nameUnquoted)

		var isbn = book.ISBN
		var isbnUnquoted = isbn.replace(/['"]+/g, '');



		var direccion = url + nameUnquoted + '/' + isbnUnquoted

		console.log("DIRECCION")
		console.log(direccion)
		
		const response = axios.request({
		  url: direccion,
		  method: 'post',
		  data: {
			'ISBN': isbnUnquoted,
			'leyendo': false,
			'currentOffset': 0,
			}
		}).then(function (response) {
			console.log(response.data)
			swal({
				title: "Libro añadido con exito",
				text: "Actualice para cargar los cambios.",
				icon: "success",
				button: "Aceptar"
			});
			setAcceso(true)
			
		})
		  .catch(function (error) {
			// handle error
			swal({
				title: "El libro no ha podido ser añadido",
				text: "Por favor intentelo mas tarde",
				icon: "error",
				button: "Aceptar"
			});
		  })
		}
		else{
			swal({
				title: "El libro ya pertenece a su biblioteca",
				text: "No se añadirá de nuevo",
				icon: "warning",
				button: "Aceptar"
			});
		}
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

	const valorar = () => {
		swal({
			content: "input",
			title: "Deje una valoración por favor",
			text: "Valores comprendidos entre 1 (mínimo) y 5 (máximo)",
		})
			.then((value) => {
				if (value != null) {
					var url = 'https://lectorbrainbook.herokuapp.com/twitter/'
					var isbn = localStorage.getItem('isbnCheck')
					var isbnUnquoted = isbn.replace(/['"]+/g, '');
					var valoracionUnquoted = value.replace(/['"]+/g, '');

					var direccion = url + isbnUnquoted + '/' + valoracionUnquoted

					const response = axios.request({
						url: direccion,
						method: 'put',
					}).then(function (response) {
						swal({
							title: "Libro valorado correctamente",
							text: "Gracias por ayudarnos.",
							icon: "success",
							button: "Aceptar"
						});
						
					})
						.catch(function (error) {
							// handle error
							console.log("error")
							console.log(error);
						})
				}

			})}

	return (
		<view>
			<Navigator />
			<View style={styles.caratula}>
					{imagen}
				</View>
			<View style={styles.container}>
				
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
				<view hidden={accesoBiblioteca}>
				<TouchableOpacity style={{ marginTop: 50,
					marginLeft: 680,
					marginBottom: 5,
					height: 45,
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					width: 250,
					borderRadius: 30,
					backgroundColor: '#00BFFF',
					}}>
					<input id="transparente" value="Añadir a tu biblioteca" type="button"  onClick={handleSubmit}></input>
					
				</TouchableOpacity>
				</view>
				
				<view >
				<TouchableOpacity style={styles.buttonContainer} >
					<input id="transparente"  type="button"  value="Leer libro" onClick={leer} ></input>
				</TouchableOpacity>
				</view>
				<TouchableOpacity style={styles.buttonContainer}>
					<input id="valorar"  type="button"  value="Valorar" onClick={valorar}></input>
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
		marginTop: 70,
		height: 100,
    	width: 400,
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
		marginTop: 10,
		marginLeft: 680,
		marginBottom: 5,
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