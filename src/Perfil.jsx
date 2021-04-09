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
	
	function Barra(){
		return <div class="sticky-top" id="barra">
		<nav class="navbar navbar-expand-lg container align-items-center">
		  <a class="navbar-brand" href="#">
		  <img src={logo} height="60" alt="" loading="lazy">
		  </img>
		  </a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" 
				  aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> 
				  <span class="navbar-toggler-icon"></span>
		  </button>
			<div class="collapse navbar-collapse justify-content-end" id="navbar" >
			  <ul class="navbar-nav mx-3">
				  <li class="nav-item mx-2 active">
					  <a class="nav-link" href="#">LEYENDO</a>
				  </li>
				  <li class="nav-item mx-2">
					  <a class="nav-link" href="#">BIBLIOTECA</a>
				  </li>
				  <li class="nav-item mx-2">
					  <a class="nav-link" href="#">BÚSQUEDA</a>
				  </li>
				  <li class="nav-item mx-2">
					  <a class="nav-link" href="#">PERFIL</a>
				  </li>
			  </ul>
			  <button onClick={handleLogout}>Cerrar sesión</button>
			</div>
	  </nav>
  </div>
	}

    return(
		
         <form onSubmit={handleLogout}>
        <Barra/>
		<View style={styles.container}>
		<View style={styles.header}></View>
		<Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
		<View style={styles.body}>
		<View style={styles.bodyContent}>
		<Text style={styles.name}>Oscar Anadon</Text>
		<Text style={styles.info}>biglector99@gmail.com</Text>

		

		<TouchableOpacity style={styles.buttonContainer}>
			<input id="edit" type="button" value="EDITAR PERFIL" onClick={editar}></input> 
		</TouchableOpacity>              
		<TouchableOpacity style={styles.buttonContainer}>
			<input id="configuracion" type="button" value="CONFIGURACION" onClick={configuracion}></input>  
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