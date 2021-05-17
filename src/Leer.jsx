import React from 'react';
import { useState, useEffect } from "react";
import Navigator from './Navigator'
import axios from 'axios'
import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';
import swal from 'sweetalert';
import Grid from '@material-ui/core/Grid';



const Leer = () => {
	const [texto, setTexto] = useState("");
	const [inicio, setInicio] = useState(0)
	// const [final, setFinal] = useState(900)
	const [subtexto, setSubtexto] = useState("")
	const [limite, setLimite] = useState(14400)
	// const [tipo, setTipo] = useState("textBook")

	// Estados edit
	const [size, setSize] = useState(14)
	const [tone, setTone] = useState("black")
	const [fondo, setFondo] = useState("")
	const [tipoLetra, setTipoLetra] = useState("")

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
		//SECCION DE OBTENER PERFIL
		console.log("RENDER")
		var url = 'https://lectorbrainbook.herokuapp.com/libro/offset/Don_Quijote_de_la_Mancha-Cervantes_Miguel.epub/0/15000'

		var direccion = url
		const response = axios.request({
			url: direccion,
			method: 'get',
		}).then(function (response) {
			console.log(response)
			setTexto(response.data.text.substr(0, 900))
			setSubtexto(response.data)

		})
			.catch(function (error) {
				// handle error
				console.log("error")
				console.log(error);
			})

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
								setTone(value)
								setPreferences(fondo, value, size, tipoLetra)
							});

						break;

					case "Tamaño":
						swal({
							content: "input",
							title: "Cambiar el tamaño de la letra",
							text: "Ejemplo: 11",
						})
							.then((value) => {
								var anterior = parseInt(value)
								setSize(anterior)
								setPreferences(fondo, tone, value, tipoLetra)
							});
						break;

					case "Fondo":
						swal({
							content: "input",
							title: "Modificar color de fondo",
							text: "Ejemplo: black",
						})
							.then((value) => {
								setFondo(value)
								setPreferences(value, tone, size, tipoLetra)
							});
						break;
					case "Tipo":
						swal({
							content: "input",
							title: "Modificar tipo letra",
							text: "Ejemplo: verdana",
						})
							.then((value) => {
								setTipoLetra(value)
								setPreferences(fondo, tone, size, value)
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
		// return(otro)
	};

	return (
		<View id="general">

			<Navigator />
			<View style={{ backgroundColor: fondo, color: tone, }}>
				<h1>Pagina de leer</h1>
				<View id="preferencias" onClick={changeAll} style={{ fontSize: size, color: tone, fontFamily: tipoLetra, }}>
					Preferencias
			</View>

				<View id="texto del libro" >
					<Text style={{ fontSize: size, color: tone, fontFamily: tipoLetra, marginLeft: 500, marginBottom: 40 }} >
						{texto}
					</Text>
				</View>
				<View id="botones" >
					<Grid id="texto parcial">
						<View style={stylesB.containerBotones}>
							<Text onClick={atras} style={{ fontSize: size + 5, color: tone, fontFamily: tipoLetra, }}>
								Página anterior
						</Text>
							<View style={stylesB.containerVer}>

								<Text onClick={alante} style={{ fontSize: size + 5, color: tone, fontFamily: tipoLetra }}>
									Página siguiente
								</Text>

							</View>
						</View>
					</Grid>
				</View>
			</View>
		</View>

	);

}


const stylesB = StyleSheet.create({
  
	containerBotones:{
		//flex: 1,
		flexDirection: 'row',
		//justifyContent: 'flex-end',
		//alignContent:'flex-end',
		//marginTop: 300,
		//marginBottom: 50
		marginLeft:500
	},
	containerVer:{
	  marginLeft:200
	}
  });


export default Leer;