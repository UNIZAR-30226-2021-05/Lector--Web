import React from 'react';
import  { useState} from "react";
import Navigator from '../Navigator'

import axios from 'axios';
import swal from 'sweetalert';


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import BuildIcon from '@material-ui/icons/Build';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Dropbox} from 'dropbox'
import DropboxChooser from 'react-dropbox-chooser'




import {
	StyleSheet,
	View,
	TouchableOpacity
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
	const [fileName, setFileName] = useState("")	
	const [fileType, setFileType] = useState("")


	const handleDropbox = () =>{
		console.log("dbx", dbx)
		var okey = dbx.filesUpload({
			path: '/nombreFotoY.jpg', 
			contents: './agua.jpg'})
		console.log("okey", okey)
	}

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
	const useStyles = makeStyles((theme) => ({
		paper: {
		  marginTop: theme.spacing(8),
		  display: 'flex',
		  flexDirection: 'column',
		  alignItems: 'center',
		},
		avatar: {
		  margin: theme.spacing(1),
		  backgroundColor: theme.palette.secondary.main,
		},
		form: {
		  width: '100%', // Fix IE 11 issue.
		  marginTop: theme.spacing(1),
		},
		submit: {
		  margin: theme.spacing(3, 0, 2),
		}
	  }));
	const classes = useStyles();

	var dbx = new Dropbox(
		{ 
			accessToken: 'Me56EUxeX0MAAAAAAAAAAXkCEw6O5oYINF1YCi5PoGZm9xjFhQxFswcp2o_Kla8L'
			
		}
	);
const fileSelectedHandler = (event) => {
	
	setFileName(event.taget.files[0].name)
	setFileType(event.taget.files[0].name)	
}

    return(
    <view><Navigator /> 
	<View style={styles.container}>
		
		
		<View style={styles.body}>
		<View style={styles.bodyContent}>
		
		
		
<div class="form">
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <BuildIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edicion de datos
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nuevo nombre de usuario"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={({ target }) => setUser(target.value)} required
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Nuevo email"
            type="email"
            id="email"
            autoComplete="current-email"
            onChange={({ target }) => setEmail(target.value)} required
          />

		<div class="uploader">
		<TouchableOpacity
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            id="transparente"
          >
            {/* Confirmar cambois */}

		<div className="pickImages" >
			<input type="file" onChange={fileSelectedHandler} />
		</div>
		</TouchableOpacity>
		</div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Confirmar cambios
          </Button>
		  {/* <Button
            
            onClick={handleDropbox}
          >
            Subida previa
          </Button>

		  <div>
			  <DropboxChooser 
			  appKey = 'o38fth43nrdfm8z'
			  success = {() => console.log("exito")}
			  cancel = {() => console.log("closed")}
			  /> 
		  </div> */}
    
          

        </form>
      </div>
    </Container>
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
	uploader: {
		marginTop:200,
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
