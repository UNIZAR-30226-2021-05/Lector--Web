import React from 'react';
import { useState, useEffect } from "react";
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



const Perfil = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [photo, setPhoto] = useState("");
	const [email, setEmail] = useState("");
	const [user, setUser] = useState();
	

	const handleLogout = () => {
		setUser({});
		setUsername("");
		setPassword("");
		localStorage.clear();
	};

	// Seccionar response.data y obtener parametros (Creo)
	useEffect(() => {
		// e.preventDefault();
		var prev = ' Token '
		var combo = prev + localStorage.getItem('userKey').substring('8', '48')
		console.log("NOMBRE")
		// console.log(localStorage.getItem('userName'))

		var url = 'https://lectorbrainbook.herokuapp.com/usuario/'
		var usuario = localStorage.getItem('userName')
		var usuarioUnquoted = usuario.replace(/['"]+/g, '');
		var direccion = url + usuarioUnquoted

		console.log("DIRECCION")
		console.log(direccion)
		
		const response = axios.request({
		  url: direccion,
		  method: 'get',
		  headers: { 'Authorization': combo },	
		}).then(function (response) {
		  setUsername(response.data.username)
		  setEmail(response.data.email)
		  setPhoto(response.data.pathFoto)
		})
		  .catch(function (error) {
			// handle error
			console.log("error")
			console.log(error);
		  })
		  ;
	  }, []);
	

	 
	


	return (
		<View>
			<Navigator />
		<form onSubmit={handleLogout}>
			
			<View style={styles.container}>
				<View style={styles.header}></View>
				<Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
				<View style={styles.body}>
					<View style={styles.bodyContent}>
						<Text style={styles.name}>{username}</Text>
						<Text style={styles.info}>{email}</Text>



						<TouchableOpacity style={styles.buttonContainer}>
							<Link to="EditarPerfil" className="editarPerf">EDITAR PERFIL</Link>
						</TouchableOpacity>
						<TouchableOpacity style={styles.buttonContainer}>
							<Link to="ConfigurarCuenta" className="config">CONFIGURACION</Link>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</form>
		</View>





	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#FFFF",
		height: 200,
	},
	avatar: {
		width: 130,
		height: 130,
		borderRadius: 63,
		borderWidth: 4,
		borderColor: "white",
		marginBottom: 10,
		alignSelf: 'center',
		position: 'absolute',
		marginTop: 130
	},
	name: {
		fontSize: 22,
		color: "#FFFFFF",
		fontWeight: '600',
	},
	body: {
		marginTop: 40,
	},
	bodyContent: {
		flex: 1,
		alignItems: 'center',
		padding: 30,
	},
	name: {
		fontSize: 28,
		color: "#696969",
		fontWeight: "600"
	},
	info: {
		fontSize: 16,
		color: "#00BFFF",
		marginTop: 10
	},
	description: {
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
	},
});

export default Perfil;