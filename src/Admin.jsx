import React from 'react'
import {useState} from 'react';
import './styles.css'

function Admin() {

  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState()

  const handleLogout = () => {
		setUser({});
		setUsername("");
		setPassword("");
		localStorage.clear();
		window.location='/inicio';

	};


  return (  

      <div className="form">

        <h1 id="titulo" align="center" > BOOKBRAIN </h1>

        <div className="container" id="tituloLib">
          <label htmlFor="title"><b>Inserte título: </b></label>
          <input type="text" placeholder="Enter title" name="title" maxLength="180" required>
          </input>
        </div>

        <div className="container" id="autorLib">
          <label htmlFor="autor"><b>Autor: </b></label>
          <input type="text" placeholder="Enter author" name="autor" maxLength="180" required>
          </input>
        </div>

        <div className="container" id="genderLib">
          <label htmlFor="genero"><b>Género: </b></label>
          <input type="text" placeholder="Enter gender" name="gender" maxLength="80" required>
          </input>
        </div>

        <div className="container" id="autorLib">
          <label htmlFor="AñoPubli"><b>Año de publicación: </b></label>
          <input type="text" placeholder="Enter year" name="AñoPubli" maxLength="4" >
          </input>
        </div>

        <div className="container" id="ISBN">
          <label htmlFor="ISBN"><b>ISBN: </b></label>
          <input type="text" placeholder="Enter ISBN" name="ISBN" maxLength="10" required>
          </input>
        </div>

        <div className="container" id="sinopsis">
          <label htmlFor="Synopsis"><b>Sinopsis: </b></label>
          <textarea name="sinopsis" id="sino" placeholder="Enter Synopsis"  >
          </textarea>
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
          <button type="button" className="btn btn-success">Subir</button>
        </div>

        <div className="container" >
          <input id="closeSesion" type="button"  value="Cerrar sesión" onClick={handleLogout}></input>
        </div>


      </div>

  )
}

export default Admin;
