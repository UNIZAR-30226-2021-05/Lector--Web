import React from 'react';
import { useState, useEffect } from "react";
import Navigator from './Navigator'
import FormEmail from './FormEmail'
import axios from 'axios'
import {
	StyleSheet,
	Text,
	View,
	Button,
} from 'react-native';
import swal from 'sweetalert';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import emailjs from 'emailjs';
import { send } from 'emailjs-com';

class EnviarCorreo extends React.Component {
	constructor() {
	  super();
	  this.state = { checked: false };
	  this.handleChange = this.handleChange.bind(this);
	}
  
	handleChange(checked) {
	  this.setState({ checked });
	}
	render() {
	  return (
		<div>
		  <div className="col-md-6  mb-2">
			<div
			  className="btn-group btn-group-sm"
			  role="group"
			  aria-label="Basic example"
			>
			  {/* Este es el boton 1 */}
			  <button 
				type="button"
				id="btn-nquote"
				className="btn btn-success btn-sm"
				onClick={() => this.handleChange(false)}
			  >
				Continuar leyendo
			  </button>
  
			  {/* Este es el boton 2 */}
			  <button
				type="button"
				id="btn-flex"
				className="btn btn-unique btn-sm"
				onClick={() => this.handleChange(true)}
			  >
				Enviar por correo
			  </button>
			</div>
		  </div>
		  <span>
			{this.state.checked ? ( <FormEmail/>) : (<br></br>) }
		  </span>
  
  
		</div>
	  );
	}
  }

const Leer = () => {
	const [texto, setTexto] = useState("");
	const [inicio, setInicio] = useState(0)
	const [subtexto, setSubtexto] = useState("")
	const [limite, setLimite] = useState(14400)
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		console.log("se clico")
		setAnchorEl(event.currentTarget);
	};

	// const handleStart = (desplazamientoActual, desplazamientoFinal) => {
	// 	console.log("HANDLE STARTT")
	// 	var urlS = 'http://lectorbrainbook.herokuapp.com/usuario/guardar/obtener/'
	// 	var usuarioS = localStorage.getItem('userName')
	// 	var usuarioUnquotedS = usuario.replace(/['"]+/g, '');
	// 	var direccionS = url + usuarioUnquoted

	// 	var isbnS = localStorage.getItem('isbnCheck')
	// 	var isbnUnquotedS = isbn.replace(/['"]+/g, '');

	// 	var direccionS = url + usuarioUnquoted + "/" + isbnUnquoted
	// 	const responseC = axios.request({
	// 		url: direccionS,
	// 		method: 'get',
	// 	}).then(function (responseC) {
	// 		console.log("OFFFSEEET")
	// 		console.log("primer offset obtenido", response.data)
	// 		localStorage.setItem('principal', response.data.currentOffset)
	// 	}).catch(function (error) {
	// 		// handle error
	// 		console.log(error);
	// 		});
		
	// }	

	const handleSave = () => {

		var url = 'http://lectorbrainbook.herokuapp.com/usuario/guardar/'
		var usuario = localStorage.getItem('userName')
		var usuarioUnquoted = usuario.replace(/['"]+/g, '');
		var direccion = url + usuarioUnquoted

		var isbn = localStorage.getItem('isbnCheck')
		var isbnUnquoted = isbn.replace(/['"]+/g, '');

		var direccion = url + usuarioUnquoted + "/" + isbnUnquoted

		// var elOffset = inicio
		// if(inicio >920){
		// 	elOffset = elOffset + 900
		// }
			const response = axios.request({
			url: direccion,
			method: 'POST',
			data: {
				'currentOffset': inicio+900,
				'leyendo': true,
				'libro': isbnUnquoted

			},

		}).then(function (response) {
			console.log("guardado offset", response.data)
		}).catch(function (error) {
			// handle error
			console.log(error);
			swal({
				title: "Error de conexion",
				text: "Los cambios realizados no se guardarán para la siguiente sesión.",
				icon: "error"
			});
		})
	};

	const handleClose = () => {
		setBookmarks(cuerpoBM, anotacionBM, tituloBM)
		setAnchorEl(null);
		setCuerpoBM('')
		setAnotacionBM('')
		setTituloBM('')
	};

	const handleOut = () => {

		setAnchorEl(null);
	}

	// Estados edit
	const [size, setSize] = useState(14)
	const [tone, setTone] = useState("black")
	const [fondo, setFondo] = useState("")
	const [tipoLetra, setTipoLetra] = useState("")
	const [textEnviar, setTextEnviar] = useState("");

	//Estados Bookmark
	const [cuerpoBM, setCuerpoBM] = useState('')
	const [anotacionBM, setAnotacionBM] = useState('')
	const [tituloBM, setTituloBM] = useState('')

	//Estados Bookmark para lectura




	// Obtener preferencias usuario

	const setPreferences = (bg, letraColor, tam, tipo) => {
		// e.preventDefault();
		console.log("modificacion de las preferencias")
		var prev = ' Token '
		var combo = prev + localStorage.getItem('userKey').substring('8', '48')



		var url = 'http://lectorbrainbook.herokuapp.com/usuario/preferencias/'
		var nombreUsuario = localStorage.getItem('userName')
		var nombreUnquoted = nombreUsuario.replace(/['"]+/g, '');
		var direccion = url + nombreUnquoted


		const response = axios.request({
			url: direccion,
			method: 'put',
			headers: { 'Authorization': combo },
			data: {
				'colorBg': bg,
				'colorLetra': letraColor,
				'tamanoLetra': tam,
				'tipoLetra': tipo

			},

		}).then(function (response) {
			console.log("Preferencias modificadas correctamente √")
		}).catch(function (error) {
			// handle error
			console.log(error);
			swal({
				title: "Error de conexion",
				text: "Los cambios realizados no se guardarán para la siguiente sesión.",
				icon: "error"
			});
		})
	};



	// Primera lectura de libros + obtencion de preferencias iniciales
	useEffect(() => {
		//SECCION DE OBTENER OFFSET INICIAL
		var guay =''
		console.log("HANDLE STARTT")
		var urlS = 'http://lectorbrainbook.herokuapp.com/usuario/guardar/obtener/'
		var usuarioS = localStorage.getItem('userName')
		var usuarioUnquotedS = usuarioS.replace(/['"]+/g, '');
		var direccionS = urlS + usuarioUnquotedS

		var isbnS = localStorage.getItem('isbnCheck')
		var isbnUnquotedS = isbnS.replace(/['"]+/g, '');

		var direccionS = urlS + usuarioUnquotedS + "/" + isbnUnquotedS
		const responseC = axios.request({
			url: direccionS,
			method: 'get',
		}).then(function (responseC) {
			console.log("OFFFSEEET")
			console.log("primer offset obtenido", responseC.data)
			guay = responseC.data.currentOffset
			setInicio(guay)

			// localStorage.setItem('principal', response.data.currentOffset)
			//SECCION DE OBTENER DOWNLOAD
		console.log("RENDER")
		var bookToRead = localStorage.getItem('pthBook')
		console.log(bookToRead)
		var bookToReadUnquoted = bookToRead.replace(/['"]+/g, '');
		console.log("el ISBN obtenido en leer.jsx es: ", bookToReadUnquoted)

		var formato = localStorage.getItem('formato')
		var formatoUnquoted = formato.replace(/['"]+/g, '');


		var urlDownload = 'https://lectorbrainbook.herokuapp.com/libro/download/'
		var direccionDownload = urlDownload + bookToReadUnquoted + '.' + formato


		const responseB = axios.request({
			url: direccionDownload,
			method: 'get',
		}).then(function (responseB) {
			console.log("download ", responseB)


		})
			.catch(function (error) {
				// handle error
				console.log("error")
				console.log(error);
			})

			//SECCION DE OBTENER EL TEXTO

		// var principalLocal = localStorage.getItem('principal')
		console.log("GUAYY", guay)

		var url = 'https://lectorbrainbook.herokuapp.com/libro/offset/' + bookToReadUnquoted + '.' + formatoUnquoted 
		+  '/' + (guay).toString()  + '/' + (parseInt(guay,10) + 15000).toString()
		var direccion = url
		console.log("la direccion esSSSSS", direccion)
		const response = axios.request({
			url: direccion,
			method: 'get',
		}).then(function (response) {
			console.log("bien obtenido")
			console.log(response)
			setTexto(response.data.text.substr(0, 900))
			setSubtexto(response.data)

		})
			.catch(function (error) {
				// handle error
				console.log("error en el primer texto")
				console.log(error);
			})
		}).catch(function (error) {
			// handle error
			console.log(error);
			});

		

		// e.preventDefault();
		console.log("ESTAMOS EN LAS PREFERENCIAS")
		var prev = ' Token '
		var combo = prev + localStorage.getItem('userKey').substring('8', '48')



		var url = 'http://lectorbrainbook.herokuapp.com/usuario/preferencias/'
		var nombreUsuario = localStorage.getItem('userName')
		var nombreUnquoted = nombreUsuario.replace(/['"]+/g, '');
		var direccion = url + nombreUnquoted

		// SECCION DE PREFERENCIAS

		const respuesta = axios.request({
			url: direccion,
			method: 'get',
			headers: { 'Authorization': combo },
		}).then(function (respuesta) {
			setSize(respuesta.data.tamanoLetra)
			setTone(respuesta.data.colorLetra)
			setFondo(respuesta.data.colorBg)
			setTipoLetra(respuesta.data.tipoLetra)
			console.log("todo correcto")
			console.log(respuesta.data)
		})
			.catch(function (error) {
				// handle error
				console.log("error en la obtencion de preferencias")
			})
	}, []);

	// Componente para mover el texto cuando se pasa de 15000
	const obtenerTexto = () => {
		console.log("holaaaa")
		var comienzo = inicio
		var acabo = inicio + 15000


		var url = 'https://lectorbrainbook.herokuapp.com/libro/offset/Don_Quijote_de_la_Mancha-Cervantes_Miguel.epub/'
		var direccion = url + comienzo + "/" + acabo
		console.log("direccion en obtener ", direccion)

		const response = axios.request({
			url: direccion,
			method: 'get',
		}).then(function (response) {
			setLimite(comienzo + 15000)
			setInicio(comienzo)
			setTexto(response.data.text.substr(comienzo, 900))
			setSubtexto(response.data)

		})
			.catch(function (error) {
				// handle error
				console.log("error")
				console.log(error);
			})
	};


	// Componente para modificar las preferencias
	const changeAll = () => {
		swal("Ajustes de visualizacion", {
			buttons: {
				Fondo: "Fondo",
				Tamaño: true,
				Tonalidad: true,
				Tipo: true,
			},
		})
			.then((value) => {
				switch (value) {

					case "Tonalidad":
						swal({
							content: "input",
							title: "Cambiar el color de la letra",
							text: "Ejemplo: green",
						})
							.then((value) => {
								if (value != null) {
									setTone(value)
									setPreferences(fondo, value, size, tipoLetra)
								}

							});

						break;

					case "Tamaño":
						swal({
							content: "input",
							title: "Cambiar el tamaño de la letra",
							text: "Ejemplo: 11",
						})
							.then((value) => {
								if (value != null) {
									var anterior = parseInt(value)
									setSize(anterior)
									setPreferences(fondo, tone, value, tipoLetra)
								}

							});
						break;

					case "Fondo":
						swal({
							content: "input",
							title: "Modificar color de fondo",
							text: "Ejemplo: black",
						})
							.then((value) => {
								if (value != null) {
									setFondo(value)
									setPreferences(value, tone, size, tipoLetra)
								}
							});
						break;
					case "Tipo":
						swal({
							content: "input",
							title: "Modificar tipo letra",
							text: "Ejemplo: verdana",
						})
							.then((value) => {
								if (value != null) {
									setTipoLetra(value)
									setPreferences(fondo, tone, size, value)
								}

							});
						break;
					default:
						break;
				}
			});
	}

	// Funciones para mover texto

	const atras = () => {

		if (inicio === 0) {
			console.log("Ya no puedes ir mas atras")
		} else {
			var start = inicio - 900
			var end = inicio
			setInicio(start)
			setTexto(subtexto.text.substr(start, end))

		}
	};


	const alante = () => {
		if (inicio > limite) {
			console.log("toca volver a cargar")
			obtenerTexto()
		}
		else {

			console.log("inicio alante previo", inicio)
			// console.log("final alante previo", end)
			var previo = inicio
			var previo1 = inicio + 900
			setInicio(previo + 900)
			console.log("primer caracter ", previo1)
			setTexto(subtexto.text.substr(previo1, 900))
			console.log('texto', texto)
		}
		handleSave()
		// return(otro)
	};

	const getBookmarks = () => {
		// e.preventDefault();
		var prev = ' Token '
		var combo = prev + localStorage.getItem('userKey').substring('8', '48')
		console.log("NOMBRE")
		// console.log(localStorage.getItem('userName'))

		var url = 'http://lectorbrainbook.herokuapp.com/bookmark/'
		var usuario = localStorage.getItem('userName')
		var usuarioUnquoted = usuario.replace(/['"]+/g, '');
		var direccion = url + usuarioUnquoted

		var isbn = localStorage.getItem('isbnCheck')
		var isbnUnquoted = isbn.replace(/['"]+/g, '');

		var direccion = url + usuarioUnquoted + "/" + isbnUnquoted

		console.log("DIRECCION")
		console.log(direccion)

		const response = axios.request({
			url: direccion,
			method: 'get',

		}).then(function (response) {
			var bms = ""
            for (var i = 0; i < 2; i++) {
              bms = bms + response.data[i].titulo.toString() + ' ' + response.data[i].offset.toString() + '\n'
           
          }
			swal({
				title: "Bookmarks disponibles",
				text: bms
			});
			
		})
			.catch(function (error) {
				// handle error
				console.log("error")
				console.log(error);
			})
			;
	};

	const setBookmarks = (cuerpo, esAnotacion, titulo) => {
		// e.preventDefault();
		console.log("Dentro de bookmarks")
		var prev = ' Token '
		var combo = prev + localStorage.getItem('userKey').substring('8', '48')
		// console.log(localStorage.getItem('userName'))

		var url = 'http://lectorbrainbook.herokuapp.com/bookmark/crear/'
		var usuario = localStorage.getItem('userName')
		var usuarioUnquoted = usuario.replace(/['"]+/g, '');
		var direccion = url + usuarioUnquoted

		var isbn = localStorage.getItem('isbnCheck')
		var isbnUnquoted = isbn.replace(/['"]+/g, '');

		var direccion = url + usuarioUnquoted + "/" + isbnUnquoted
		const response = axios.request({
			url: direccion,
			method: 'post',
			data: {
				'Libro': isbn,
				// 'Usuario': usuarioP,
				'cuerpo': cuerpo,
				'esAnotacion': esAnotacion,
				// 'id': idP,
				'offset': 900,
				'titulo': titulo
			}

		}).then(function (response) {
			console.log("LOS bookmarks hechos correctamente")
			console.log("respuesta", response.data)
		})
			.catch(function (error) {
				// handle error
				console.log("error")
				console.log(error);
			})
			;
	};


	var estadoEmail = false

	const handleEstado = () => {
		console.log(estadoEmail)
		if(estadoEmail){
			estadoEmail=false
		}
		else{
			estadoEmail=true

		}
		console.log("DESPUES")
		console.log(estadoEmail)
	  }

	
	return (
		<View id="general">
			<Navigator />
			<View style={{ backgroundColor: fondo, color: tone, }}>
				<h1>Pagina de leer</h1>
				<View id="preferencias" style={stylesB.containerBotonesB}>
					<Text onClick={changeAll} style={{ fontSize: size + 5, color: tone, fontFamily: tipoLetra, }}>
						PREFERENCIAS
						</Text>
				</View>
				<View id="bookmarks" style={stylesB.containerBotonesB}>
					<Text onClick={getBookmarks} style={{ fontSize: size + 5, color: tone, fontFamily: tipoLetra, }}>
						OBTENER BOOKMARKS
						</Text>
				</View >
				<View id="bookmarksMas" style={stylesB.containerBotonesB}>
					<div>
						<Text aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ fontSize: size + 5, color: tone, fontFamily: tipoLetra, }}>
							AÑADIR BOOKMARK
     				 </Text>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleOut}
						>
							<form no validate>
								<MenuItem>
									<TextField
										variant="outlined"
										margin="normal"
										fullWidth
										label="Cuerpo"
										autoFocus
										onChange={({ target }) => setCuerpoBM(target.value)}
									/>
								</MenuItem>
								<MenuItem>
									<TextField
										variant="outlined"
										margin="normal"
										fullWidth
										label="Es anotacion"
										autoFocus
										onChange={({ target }) => setAnotacionBM(target.value)}
									/>
								</MenuItem>
								<MenuItem>
									<TextField
										variant="outlined"
										margin="normal"
										fullWidth
										label="Título"
										autoFocus
										onChange={({ target }) => setTituloBM(target.value)}
									/>
								</MenuItem>

								<MenuItem onClick={handleClose} >
									<Text style={{ color: 'green' }}> Confrimar</Text>
								</MenuItem>
							</form>
						</Menu>
					</div>
				</View>
				<View id="bookmarks" style={stylesB.containerBotonesB}>
					<Text onClick={handleSave} style={{ fontSize: size + 5, color: tone, fontFamily: tipoLetra, }}>
						TERMINAR LECTURA
						</Text>
				</View >

				<View id="texto del libro" >
					<Text style={{ fontSize: size, color: tone, fontFamily: tipoLetra, marginLeft: 500, marginBottom: 40 }} >
						{texto}
					</Text>
				</View>
				<View id="botones" >
					<Grid id="texto parcial">
						<View style={stylesB.containerBotones}>
							<Text onClick={atras} style={{ fontSize: size + 5, color: tone, fontFamily: tipoLetra, }}>
								PÁGINA ANTERIOR
						</Text>
							<View style={stylesB.containerVer}>

								<Text onClick={alante} style={{ fontSize: size + 5, color: tone, fontFamily: tipoLetra }}>
									PÁGINA SIGUIENTE
								</Text>

							</View>
						</View>
					</Grid>
				</View>
			</View>
			<View id="esconderBoton">
			<EnviarCorreo/>
			</View>
		</View>

	);

}


const stylesB = StyleSheet.create({

	menuContainer: {

	},

	containerBotones: {
		//flex: 1,
		flexDirection: 'row',
		//justifyContent: 'flex-end',
		//alignContent:'flex-end',
		//marginTop: 300,
		//marginBottom: 50
		marginLeft: 500
	},
	containerBotonesB: {
		//flex: 1,
		flexDirection: 'row',
		//justifyContent: 'flex-end',
		//alignContent:'flex-end',
		//marginTop: 300,
		//marginBottom: 50
		marginLeft: 1000
	},
	containerVer: {
		marginLeft: 200
	}
});


export default Leer;