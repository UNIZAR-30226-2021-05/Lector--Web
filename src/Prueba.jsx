import React from 'react';
import { useState, useEffect } from "react";        
import axios from 'axios'
import CardList from "./CardList";


function Prueba({ bookGet }) {
    console.log("En prueba ", bookGet)
    let dataB = [];
    dataB = bookGet;

    const [state, setState] = useState({
        results: []
    });
    const [book, setBook] = useState("");
	const [textBotton, setTextBotton] = useState("Añadir a tu biblioteca")
	const [colorBotton, setColorBotton] = useState("Añadir a tu biblioteca")

const ey = () => {
//    useEffect((e) => {
        console.log()
		// e.preventDefault();
        console.log("ENTRAMOS EN USEEFFECT")
		var prev = ' Token '
		var combo = prev + localStorage.getItem('userKey').substring('8', '48')
		console.log("NOMBRE")
		// console.log(localStorage.getItem('userName'))

		var url = 'http://lectorbrainbook.herokuapp.com/libro/'
		var isbn = String(bookGet)
		var isbnUnquoted = isbn.replace(/['"]+/g, '');
		var direccion = url + isbnUnquoted

		console.log("DIRECCION")
		console.log(direccion)
		
		const response = axios.request({
		  url: direccion,
		  method: 'get',
		  headers: { 'Authorization': combo },	
		}).then(function (response) {

			setBook(response.data)
			console.log("estando en el then: ",book)
		})
		  .catch(function (error) {
			// handle error
			console.log("error")
			console.log(error);
		  })
	    // }, [])
		};

    
    return (
        <CardList results={book} />
        );
}

export default Prueba;