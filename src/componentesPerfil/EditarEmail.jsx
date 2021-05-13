import React from 'react';
import  { useState} from "react";
import Navigator from '../Navigator'

import axios from 'axios';
import swal from 'sweetalert';

import {
	StyleSheet,
	Text,
	View,
	Image
  } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Share from 'react-native-share';

// import files from '../assets/filesBase64';




const Perfil = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
    const [user, setUser] = useState()
	const [photo, setPhoto] = useState("")

    const handleLogout = () => {
        setUser({});
        setUsername("");
        setPassword("");
        localStorage.clear();
      };

	const handleSubmit = async e => {
    e.preventDefault();
    var prev = ' Token '
    var combo = prev + localStorage.getItem('userKey').substring('8', '48')

	var url = 'http://lectorbrainbook.herokuapp.com/usuario/'
		var usuario = localStorage.getItem('userName')

		var usuarioUnquoted = usuario.replace(/['"]+/g, '');

		var direccion = url + usuarioUnquoted
		console.log(direccion)

		console.log(localStorage.getItem('userKey'))
		console.log(combo)
    
    const response = axios.request({
      url: direccion,
      method: 'put',
      headers: { 'Authorization': combo },
      data: {
        'email': email,
        'pathFoto':'https://www.molinaripixel.com.ar/wp-content/uploads/2010/12/0055.jpg',
		"username": username
      },

    }).then(function (response) {
      console.log(response.data);

	  	localStorage.setItem('userName', JSON.stringify(username))
		localStorage.setItem('userEmail', JSON.stringify(username))
	  	setUsername(response.data.username)
		setEmail(response.data.email)
		setPhoto('https://www.molinaripixel.com.ar/wp-content/uploads/2010/12/0055.jpg')
      swal({
        title: "Exito",
        text: "El cambio de datos ha sido realizado correctamente.",
        icon: "success",
      });

    })
      .catch(function (error) {
        // handle error
        console.log(error);
        swal({
          title: "Error",
          text: "Ha habido un fallo en el proceso.",
          icon: "error"
        });
      })
      ;
  }



    ;
	
	const nombreUsuario = localStorage.getItem('userName').replace(/['"]+/g, '');
	// const nombreEmail = localStorage.getItem('userEmail').replace(/['"]+/g, '');
	
    return(
    <view><Navigator /> 
	<View style={styles.container}>
		<View style={styles.header}></View>
		<Image style={styles.avatar} source={{uri: {photo}}}/>
		<View style={styles.body}>
		<View style={styles.bodyContent}>
		<Text style={styles.name}>{nombreUsuario}</Text>
		{/* <Text style={styles.info}>{nombreEmail}</Text> */}
		
		{/* Obviamente no funciona, conectar con BACk */}
		<div class="container" id="loginApp">
      		<label for="uname"><b></b></label>
      		<input type="text" placeholder="Enter NOMBRE" name="uname" onChange={({ target }) => setUsername(target.value)} required>
      		</input>
    	</div>   
		<div class="container" id="loginApp">
      		<label for="uname"><b></b></label>
      		<input type="text" placeholder="Enter EMAIL" name="uname" onChange={({ target }) => setEmail(target.value)} required>
      		</input>
    	</div>   
		<div class="container" id="loginApp">
      		<Text>Cambio de foto por hacer</Text>
    	</div>             
		<div class="container" id="but">
        <button type="submit" class="btn btn-success" onClick={handleSubmit} >CONFIRMAR CAMBIOS</button>
      </div>
		</View>
	  	</View>
</View>
</view>
           

	   





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