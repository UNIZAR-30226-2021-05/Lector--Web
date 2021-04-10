import React from 'react';
import { useState } from "react";
// import logo from '../LogoWeb.svg';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';
import { Link } from 'react-router-dom'

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Share from 'react-native-share';

// import files from '../assets/filesBase64';




const EditarPerfil = () => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState()

	const handleLogout = () => {
		setUser({});
		setUsername("");
		setPassword("");
		localStorage.clear();
	};

	//   Enlaces a otras paginas
	const editarNombre = (e) => {
		e.preventDefault();
		console.log('Clickado');
		window.location = '/EditarNombre';
	}

	const editarEmail = (e) => {
		e.preventDefault();
		console.log('Clickado');
		window.location = '/EditarEmail';
	}

	const editarFoto = (e) => {
		e.preventDefault();
		console.log('Clickado');
		window.location = '/EditarFoto';
	}





	return (

		<View style={styles.container}>
			<View style={styles.header}></View>
			<Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
			<View style={styles.body}>
				<View style={styles.bodyContent}>
					<TouchableOpacity style={styles.buttonContainer}>
						<Link to="EditarNombre" className="editName">EDITAR NOMBRE</Link>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonContainer}>
						<Link to="EditarEmail" className="editEail">EDITAR EMAIL</Link>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonContainer}>
						<Link to="EditarEmail" className="editEail">EDITAR EMAIL</Link>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	header: {
		backgroundColor: "#00BFFF",
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

export default EditarPerfil;