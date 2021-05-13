import React from 'react';
import {useState} from "react";
import Navigator from '../Navigator'



import {
	StyleSheet,
	Text,
	Font,
	View,
	Image,
	TouchableOpacity
} from 'react-native';
import { Link } from 'react-router-dom'

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Share from 'react-native-share';

// import files from '../assets/filesBase64';




const ConfigurarCuenta = () => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState()

	const handleLogout = () => {
		setUser({});
		setUsername("");
		setPassword("");
		localStorage.clear();
		window.location='/inicio';

	};

	return (
		<view><Navigator />
		<View style={styles.container}>
			<View style={styles.header}></View>
			<View style={styles.body}>
				<View style={styles.bodyContent}>
					<TouchableOpacity style={styles.buttonContainer}>
						<Link to="ChangePass" className="security">Seguridad</Link>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonContainer}>
						<Text>Informacion</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonContainer}>
						<Text>Ayuda</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonContainer2}>
					<input id="transparente" type="button"  value="Cerrar sesión" onClick={handleLogout}></input>
					</TouchableOpacity>
				</View>
			</View>
		</View>
		</view>








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
	buttonContainer2: {
		marginTop: 40,
		height: 45,
		color: "#FFFF",
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		width: 250,
		borderRadius: 30,
		backgroundColor: "#E61515",

	},
});

export default ConfigurarCuenta;