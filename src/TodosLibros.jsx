import React, { Component } from 'react';
import { useState, useEffect } from "react";
import logo from './LogoWeb.svg';
import EditarPerfil from './componentesPerfil/EditarPerfil'
import { Link } from 'react-router-dom'
import Navigator from './Navigator'

import axios from 'axios'

import {
	StyleSheet,
	Button,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';




const TodosLibros = () => {
	const mostrar = () => {
		// you can access the item object and the event object
	
		console.log("En mostrar")
		console.log("Todos los libros", localStorage.getItem('todosLibros'));
		
	  }
	

	return (
		<View>
			<Navigator />
		<h1>Pagina donde aparecerán todos los libros</h1>
        <View>
            <Text onClick={mostrar}>
				Press here
			</Text>
        </View>
		</View>

	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#FFFF",
		height: 200,
	}
});

export default TodosLibros;