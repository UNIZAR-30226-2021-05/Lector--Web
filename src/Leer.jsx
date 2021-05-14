import React from 'react';
import { useState, useEffect} from "react";
import Navigator from './Navigator'
import axios from 'axios'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';



const Leer = () => {
    const [texto, setTexto] = useState("");
	const [inicio, setInicio] = useState(0)
	const [final, setFinal] = useState(900)
	const [subtexto, setSubtexto] = useState("")
	const [limite, setLimite] = useState(14400)
	const [tipo, setTipo] = useState(100)
    useEffect(() => {
		console.log("RENDER")
		var url = 'https://lectorbrainbook.herokuapp.com/libro/offset/Don_Quijote_de_la_Mancha-Cervantes_Miguel.epub/0/15000'

		var direccion = url 
		const response = axios.request({
		  url: direccion,
		  method: 'get',	
		}).then(function (response) {
			console.log(response)
			setTexto(response.data.text.substr(0,900))
			setSubtexto(response.data)

		})
		  .catch(function (error) {
			// handle error
			console.log("error")
			console.log(error);
		  })
	    }, []);

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
	    } ;
		
		
		const atras = () => {
			
			if(inicio === 0){
				console.log("Ya no puedes ir mas atras")
			}else{
				var start = inicio - 900
				var end = inicio
				setInicio(start)
				setTexto(subtexto.text.substr(start,end))
				
			}
		};

		
		var otro = ""
		// Preguntar como sucede si se ha llegado al final del libro
		const alante = () => {
			if(inicio > limite){
				console.log("toca volver a cargar")
				obtenerTexto()}
			else{

				console.log("inicio alante previo", inicio)
				// console.log("final alante previo", end)
				var previo = inicio
				var previo1 = inicio + 900
				setInicio(previo + 900)				
				console.log("primer caracter ", previo1)
				setTexto(subtexto.text.substr(previo1,900))
				console.log('texto', texto)
			}
			// return(otro)
		};
 
	
	return (
		<View>
			<Navigator />
		<h1>Pagina de leer</h1>
		<Text onClick={alante}>
			Boton para ir hacia alante
		</Text>
		<Text onClick={atras}>
			Boton para ir hacia atras
		</Text>
        <View >
            <Text style={styles.textBook}>
                {texto}
            </Text>
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
		
		
		textAlign:'justify',
	},

	textBook: {
		marginLeft: 500,
		fontSize:11,
	}


});

export default Leer;