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



const Leer = () => {
	const [texto, setTexto] = useState("");
	const [inicio, setInicio] = useState(0)
	const [final, setFinal] = useState(900)
	const [subtexto, setSubtexto] = useState("")
	const [limite, setLimite] = useState(14400)
	const [tipo, setTipo] = useState("textBook")

	// Estados edit
	const [size, setSize] = useState(14)
	const [tone, setTone] = useState("black")
	const [fondo, setFondo] = useState("")
	const [tipoLetra, setTipoLetra] = useState("")

	// Primera lectura de libros
	useEffect(() => {
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
		<View>
			<Navigator />
			<View style={{ backgroundColor: fondo, color: tone, }}>
				<h1>Pagina de leer</h1>
				<View id="preferencias" onClick={changeAll} style={{ fontSize: size, color: tone, fontFamily: tipoLetra,  }}>
					Preferencias
			</View>
				<View id="botones" >
					<Text onClick={alante} style={{ fontSize: size, color: tone, fontFamily: tipoLetra,  }}>
						Boton para ir hacia alante
			</Text>
					<Text onClick={atras} style={{ fontSize: size, color: tone, fontFamily: tipoLetra}}  >
						Boton para ir hacia atras
			</Text>
				</View>
				<View id="texto del libro" >
					<Text style={{ fontSize: size, color: tone, fontFamily: tipoLetra, marginLeft: 500, }} >
						{texto}
					</Text>
				</View>
			</View>
		</View>

	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#FFFF",
		height: 200,
	},
	textContainer: {


		textAlign: 'justify',
	},

	textBook: {
		marginLeft: 500,
		fontSize: 11,
	}


});

export default Leer;