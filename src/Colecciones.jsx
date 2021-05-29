import React from 'react';
import Navigator from './Navigator'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useState, useEffect } from "react";
import './App';
import './styles.css';
import swal from 'sweetalert';
import axios from 'axios'
import TableBody from 'material-ui/Table/TableBody';
import { render } from '@testing-library/react';
const Colecciones = () => {

    const [coleccion, setColeccion] = useState("");
    const [ISBNe, setISBNs] = useState("");
    const [colCrear, setColCrear] = useState("");
    const [oldTit, setTitOld] = useState("");
    const [newTit, setTitNew] = useState("");
    const [titDel, setTitDel] = useState("");

    var prev = ' Token '
    var combo = prev + localStorage.getItem('userKey').substring('8', '48')
    var url = 'http://lectorbrainbook.herokuapp.com/usuario/coleccion'
    var usuario = localStorage.getItem('userName')
    var usuarioUnquoted = usuario.replace(/['"]+/g, '');
    var salida
    var salidacrear
    var direccion
    var listaCol=''
    var salCol=''

        const DevolverColecciones = () => {
    
            direccion = url +  '/' + usuarioUnquoted
 
            const response = axios.request({
                url: direccion,
                method: 'get',
                headers: { 'Authorization': combo },
             }).then(function (response) {
               console.log(response.data)
      
               for(var i=0; i < response.data.length; i++){
                   listaCol= listaCol + '\n' + response.data[i].titulo
               }
               console.log(listaCol)
               swal({
                title: "Exito",
                text: "Las colecciones almacenadas para el usuario son: "+listaCol,
                icon: "success",
            });
            listaCol=''
             }).catch(function (error) {
                 // handle error
                 console.log("error")
                 console.log(error);
               })

            var count = Object.keys(response).length;

            if(count===0){
                salida="No existen colecciones para el usuario"
            }
        }

        const DevolverColeccion = () => {
            direccion = url +  '/' + usuarioUnquoted + "/" + coleccion
 
            const response = axios.request({
                url: direccion,
                method: 'get',
             }).then(function (response) {
                console.log(response.data.libros)
                console.log(response.data.titulo)
                /* for(var i=0; i < response.data.length; i++){
                    listaColTit= listaCol + '\n' + response.data[i].titulo
                } */
                console.log(response.data.libros)
                if(response.data.libros !=null && response.data.titulo!=null){
                    for(var i=0; i < response.data.libros.length; i++){
                        salCol= salCol + '\n' + "Libro: " + response.data.libros[i].titulo + '\n' +
                         '\t' + " ISBN: " + response.data.libros[i].ISBN + '\n' + '\t' + " Formato: " + response.data.libros[i].formato 
                        + '\n' + '\t' + " Autor: " + response.data.libros[i].autor + '\n'
                    }
                    console.log(salCol)
                    swal({
                        title: "Exito",
                        text: "La colección " + response.data.titulo + " está formada por:" + '\n' + salCol,
                        icon: "success",
                    });
                    salCol=''
                }
                else{
                    swal({
                        title: "Error",
                        text: "No existe la coleccion: " + coleccion,
                        icon: "error"
                      });
                }
                /* console.log(response.data.ISBN)
                console.log(response.data.formato)
                console.log(response.data.pathLibro)
                console.log(response.data.portada)
                console.log(response.data.sinopsis)
                console.log(response.data.titulo)  */
             }).catch(function (error) {
                 console.log(error);
                 swal({
                    title: "Error",
                    text: "Ha ocurrido un error durante el proceso.",
                    icon: "error"
                  });
               })

        }

        const crearColeccion = () => {
            console.log(ISBNe)
            console.log(colCrear)
            direccion = url +  '/' + usuarioUnquoted + "/" + colCrear
 
            const response = axios.request({
                url: direccion,
                method: 'put',
                headers: { 'Authorization': combo },
                data: {
                    'libros': ISBNe,
                }
             }).then(function (response) {
                console.log(response.data);
                if(colCrear.length!=0 && ISBNe.length!=0 ){
                    swal({
                        title: "Exito",
                        text: "La creación de la colección ha sido realizada correctamente con los campos:"
                        + '\n' + "Nombre: "+ colCrear + '\n' + "ISBN libro/s: "+ ISBNe ,
                        icon: "success",
                    });
                }else{
                    swal({
                        title: "Error",
                        text: "Ha ocurrido un error durante el proceso.",
                        icon: "error"
                      });
                }
             }).catch(function (error) {
                 console.log(error);
                 swal({
                    title: "Error",
                    text: "Ha ocurrido un error durante el proceso.",
                    icon: "error"
                  });
               })

        }

        const renombrarColeccion = () => {
            console.log(oldTit)
            console.log(newTit)
            direccion = url + '/' + 'rename' + '/' + usuarioUnquoted 
 
            const response = axios.request({
                url: direccion,
                method: 'put',
                headers: { 'Authorization': combo }, 
                data: {
                    'oldTitulo': oldTit,
                    'newTitulo': newTit,
                }
             }).then(function (response) {
                console.log(response.data)
                if(oldTit.length!=0 && newTit.length!=0 ){
                    swal({
                        title: "Exito",
                        text: "La colección " + oldTit + " ha sido renombrada correctamente con el nombre: " + newTit,
                        icon: "success",
                    });
                }else{
                    swal({
                        title: "Error",
                        text: "Ha ocurrido un error durante el proceso.",
                        icon: "error"
                      });
                }
             }).catch(function (error) {
                 console.log(error);
                 swal({
                    title: "Error",
                    text: "Ha ocurrido un error durante el proceso.",
                    icon: "error"
                  });
               })

        }

        const eliminarColeccion = () => {
            console.log(titDel)
            direccion = url + '/' + 'delete' + '/' + usuarioUnquoted 
 
            const response = axios.request({
                url: direccion,
                method: 'put',
                headers: { 'Authorization': combo },
                data: {
                    'titulo': titDel,
                }
             }).then(function (response) {
                console.log(response.data)
                if(oldTit.length!=0 && newTit.length!=0){
                    swal({
                        title: "Exito",
                        text: "La colección eliminada correctamente ha sido: " + titDel,
                        icon: "success",
                    });
                }else{
                    swal({
                        title: "Error",
                        text: "Ha ocurrido un error durante el proceso.",
                        icon: "error"
                      });
                }
             }).catch(function (error) {
                 console.log(error);
                 swal({
                    title: "Error",
                    text: "Ha ocurrido un error durante el proceso.",
                    icon: "error"
                  });
               })

        }

        return (
            <View>
            <Navigator/>
            <View>
                <h1>Colecciones</h1>
                <p></p>
                <h2 id="subtit">Mostrar todas las colecciones del usuario</h2>
                <div className="container" >
                    <input id="TodasColecciones" type="button"  value="Mostrar colecciones" onClick={DevolverColecciones}></input>
                </div>

                <p></p>
                <h2 id="subtit">Mostrar una colección</h2>
                <div className="container" >
                    <input id="UnaColeccion" type="text"  placeholder="Introduzca colección" onChange={({ target }) => setColeccion(target.value)}></input>
                </div>

                <div className="container" >
                    <input id="Coleccion" type="button"  value="Mostrar coleccion" onClick={DevolverColeccion}></input>
                </div>

                <p></p>
                <h2 id="subtit">Crear una colección</h2>
                <h5 id="subtit">(Introduzca ISBN separado por comas)</h5>
                <h6 id="subtit">(Ejemplo: 9783552051911,78546542185,1312312312312)</h6>
                <div className="container" >
                    <input id="IntroduzcaISBN" type="text"  placeholder="Introduzca ISBNs colección " onChange={({ target }) => setISBNs(target.value)}></input>
                </div>

                <div className="container" >
                    <input id="IntroduzcaColCrear" type="text"  placeholder="Introduzca nombre colección " onChange={({ target }) => setColCrear(target.value)}></input>
                </div>

                <div className="container" >
                    <input id="CrearColeccion" type="button"  value="Crear colección" onClick={crearColeccion}></input>
                </div>

                <p></p>
                <h2 id="subtit">Renombrar una colección</h2>
                <div className="container" >
                    <input id="TitViejo" type="text"  placeholder="Introduzca título actual" onChange={({ target }) => setTitOld(target.value)}></input>
                </div>

                <div className="container" >
                    <input id="TitNuevo" type="text"  placeholder="Introduzca título nuevo" onChange={({ target }) => setTitNew(target.value)}></input>
                </div>

                <div className="container" >
                    <input id="RenColeccion" type="button"  value="Renombrar colección" onClick={renombrarColeccion}></input>
                </div>

                <p></p>
                <h2 id="subtit">Eliminar una colección</h2>
                <div className="container" >
                    <input id="TitEliminar" type="text"  placeholder="Introduzca título colección" onChange={({ target }) => setTitDel(target.value)}></input>
                </div>

                <div className="container" >
                    <input id="ColeccionEliminar" type="button"  value="Elimniar colección" onClick={eliminarColeccion}></input>
                </div>
                </View>

                <View>
                 {console.log(salidacrear)}
                </View>

            </View>

           
        );
}
export default Colecciones;