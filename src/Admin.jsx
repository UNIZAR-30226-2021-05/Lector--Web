import React from 'react'
import {useState} from 'react';
import axios from 'axios'
import './styles.css'

function Admin() {

  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState()
  const [ISBeNe, setISBeNe] = useState("");
  const [formato, setFormato] = useState("");
  const [autor, setAutor] = useState("");
  const [pathLi, setPathLi] = useState("");
  const [fichPort, setFichPort] = useState("");
  const [sinop, setSinop] = useState("");
  const [tit, setTit] = useState("");

  const handleLogout = () => {
		setUser({});
		setUsername("");
		setPassword("");
		localStorage.clear();
		window.location='/inicio';
	};

  const subirLibro = () => {
    console.log(ISBeNe)
    console.log(formato)
    console.log(autor)
    console.log(pathLi)
    console.log(fichPort)
    console.log(sinop)
    console.log(tit)

    var prev = ' Token '
    var combo = prev + localStorage.getItem('userKey').substring('8', '48')
    var url = 'https://lectorbrainbook.herokuapp.com/libro'
    var usuario = localStorage.getItem('userName')
    var usuarioUnquoted = usuario.replace(/['"]+/g, '');
    var direccion = url + '/' + ISBeNe

    const response = axios.request({
        url: direccion,
        method: 'post',
        headers: { 'Authorization': combo }, 
        data: {
            'ISBN': ISBeNe,
            'formato': formato,
            'autor': autor,
            'pathLibro': pathLi,
            'portada': fichPort,
            'sinopsis': sinop,
            'titulo': tit,      
        }
     }).then(function (response) {
        console.log(response.data)
     }).catch(function (error) {
         // handle error
         console.log("error")
         console.log(error);
       })

}


  return (  

      <div className="form">

        <h1 id="titulo" align="center" > BOOKBRAIN </h1>

        <div className="container" id="ISBN">
          <label htmlFor="ISBN"><b>ISBN: </b></label>
          <input type="text" placeholder="Enter ISBN" name="ISBN" maxLength="13" onChange={({ target }) => setISBeNe(target.value)} required>
          </input>
        </div>

        <div className="container" id="formato">
          <label htmlFor="formato"><b>Formato: </b></label>
          <input type="text" placeholder="Enter extension" name="Formato" maxLength="5" onChange={({ target }) => setFormato(target.value)} required>
          </input>
        </div>

        <div className="container" id="autorLib">
          <label htmlFor="autor"><b>Autor: </b></label>
          <input type="text" placeholder="Enter author" name="autor" onChange={({ target }) => setAutor(target.value)} required>
          </input>
        </div>

        <div className="container" id="genderLib">
          <label htmlFor="pahtlibro"><b>Path libro: </b></label>
          <input type="text" placeholder="Enter path book" name="path" maxLength="200" onChange={({ target }) => setPathLi(target.value)} required>
          </input>
        </div>

        <div className="container" id="genderLib">
          <label htmlFor="portada"><b>Fichero portada: </b></label>
          <input type="text" placeholder="Enter image name" name="portada" maxLength="200" onChange={({ target }) => setFichPort(target.value)}>
          </input>
        </div>

        <div className="container" id="sinopsis">
          <label htmlFor="Synopsis"><b>Sinopsis: </b></label>
          <textarea name="sinopsis" id="sino" placeholder="Enter Synopsis" maxLength="1000" onChange={({ target }) => setSinop(target.value)}>
          </textarea>
        </div>

        <div className="container" id="tituloLib">
          <label htmlFor="title"><b>Inserte título: </b></label>
          <input type="text" placeholder="Enter title" name="title" maxLength="30" onChange={({ target }) => setTit(target.value)} required>
          </input>
        </div>
        

        <div className="container" id="subirportada">Seleccione la portada a añadir<p></p>
        <input type="file" name="subirportada" >
          
        </input>
        </div>

        <div className="container" id="subirarchivos">Seleccione los archivos que desea subir<p></p>
        <input type="file" name="subirarchivos" >
          
        </input>
        </div>

        <div className="container" id="but">
          <button type="button" className="btn btn-success" onClick={subirLibro}>Subir</button>
        </div>

        <div className="container" >
          <input id="closeSesion" type="button"  value="Cerrar sesión" onClick={handleLogout}></input>
        </div>


      </div>

  )
}

export default Admin;
