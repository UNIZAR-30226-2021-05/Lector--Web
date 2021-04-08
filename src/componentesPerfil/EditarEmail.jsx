import React, {Component} from 'react';
import  { useState,useEffect } from "react";
import logo from '../LogoWeb.svg';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
  } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Share from 'react-native-share';

// import files from '../assets/filesBase64';




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

    return(
        
	<View style={styles.container}>
		<View style={styles.header}></View>
		<Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
		<View style={styles.body}>
		<View style={styles.bodyContent}>
		<Text style={styles.name}>Oscar Anadon</Text>
		<Text style={styles.info}>biglector99@gmail.com</Text>
		
		{/* Obviamente no funciona, conectar con BACk */}
		<div class="container" id="loginApp">
      		<label for="uname"><b></b></label>
      		<input type="text" placeholder="Enter EMAIL" name="uname" onChange={({ target }) => setUsername(target.value)} required>
      		</input>
    	</div>              
		<TouchableOpacity style={styles.buttonContainer}>
			<Text>Confirmar cambios</Text> 
		</TouchableOpacity>
		</View>
	  	</View>
</View>
           

	   





      ); 
}
const styles = StyleSheet.create({
	header:{
	  backgroundColor: "#00BFFF",
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