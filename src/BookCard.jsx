import React, { Component } from 'react';
import { useState, useEffect } from "react";
import logo from './LogoWeb.svg';
import EditarPerfil from './componentesPerfil/EditarPerfil'
import { Link } from 'react-router-dom'
import Navigator from './Navigator'
import swal from 'sweetalert';


import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';



const BookCard = () => {
	var imagen = (
		<img
		  src="https://pictures.abebooks.com/isbn/9780747542155-es.jpg"
		  //src={'/src/images/logo.png'}
		  alt="Canvas Logo"
		/>
	)

	const mostrarAlerta=()=>{
        swal({
			title: "Libro añadido con exito",
			text: "Disfrute de su lectura.",
			icon: "success",
			button: "Aceptar"
		});
    }

	var tituloLibro = (
		<Text>Harry potter and the Prisioner of Azkaban</Text>
	)

	var descripcion = (
		<Text>En su tercer año en Hogwarts, Harry, Ron y Hermione conocen a Sirius Black, 
			el prisionero que ha escapado de Azkaban y aprenden a acercarse a un Hippogriffo 
			mitad caballo/ mitad águila, a como transformar a los cambiantes Boggarts y el arte de la Adivinación. 
			Harry deberá enfrentárse a los Dementores que son ladrones de almas, defenderse del peligroso hombre lobo 
			y lidiar con la verdad acerca de la relación entre Sirius Black y sus padres.
		</Text>
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
				<View style={styles.sinopsis}>
					{descripcion}
				</View>
				<View>
				<TouchableOpacity style={styles.buttonContainer}>
					<input id="transparente"  type="button"  value="Añadir a tu biblioteca" onClick={mostrarAlerta}></input>
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