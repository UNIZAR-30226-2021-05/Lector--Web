import React, {Component} from 'react';
import  { useState,useEffect } from "react";
import logo from './LogoWeb.svg';
import EditarPerfil from './componentesPerfil/EditarPerfil'
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
    const [user, setUser] = useState()

    const handleLogout = () => {
        setUser({});
        setUsername("");
        setPassword("");
        localStorage.clear();
    };

	const editar = (e) =>{
		e.preventDefault();
		console.log('Clickado');
		window.location='/EditarPerfil';
	};

	const configuracion = (e) =>{
		e.preventDefault();
		console.log('Clickado');
		window.location='/ConfigurarCuenta';
	}
	
	  

    return(
        
         <form onSubmit={handleLogout}>
            
		<View style={styles.container}>
		<View style={styles.header}></View>
		<Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
		<View style={styles.body}>
		<View style={styles.bodyContent}>
		<Text style={styles.name}>Oscar Anadon</Text>
		<Text style={styles.info}>biglector99@gmail.com</Text>

		

		<TouchableOpacity style={styles.buttonContainer}>
			<input id="edit" type="button" value="CONFIRMAR CAMBIOS" onClick={editar}></input> 
		</TouchableOpacity>              
		<TouchableOpacity style={styles.buttonContainer}>
		</TouchableOpacity>
		</View>
	  	</View>
		</View>
       </form>

	   



      ); 
}

const styles = StyleSheet.create({
	header:{
	  backgroundColor: "#FFFF",
	  height:200,
	},
	avatar: {
	  width: 130,
	  height: 130,
	  borderRadius: 63,
	  borderWidth: 4,
	  borderColor: "white",
	  marginBottom:10,
	  alignSelf:'center',
	  position: 'absolute',
	  marginTop:130
	},
	name:{
	  fontSize:22,
	  color:"#FFFFFF",
	  fontWeight:'600',
	},
	body:{
	  marginTop:40,
	},
	bodyContent: {
	  flex: 1,
	  alignItems: 'center',
	  padding:30,
	},
	name:{
	  fontSize:28,
	  color: "#696969",
	  fontWeight: "600"
	},
	info:{
	  fontSize:16,
	  color: "#00BFFF",
	  marginTop:10
	},
	description:{
	  fontSize:16,
	  color: "#696969",
	  marginTop:10,
	  textAlign: 'center'
	},
	buttonContainer: {
	  marginTop:10,
	  height:45,
	  flexDirection: 'row',
	  justifyContent: 'center',
	  alignItems: 'center',
	  marginBottom:20,
	  width:250,
	  borderRadius:30,
	  backgroundColor: "#00BFFF",
	},
  });

export default Perfil;