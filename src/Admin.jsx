import React from 'react'
import logo from './LogoWeb.svg';
import './styles.css'

function Admin() {
  
  const clickInicio = (e) =>{
    e.preventDefault();
    console.log('Clickado Iniciar Sesion');
    window.location='/inicio';
  }

  return (  

      <div className="form">

        <h1 id="titulo" align="center" > BOOKBRAIN </h1>

        <div className="container" id="tituloLib">
          <label for="title"><b>Inserte título: </b></label>
          <input type="text" placeholder="Enter title" name="title" maxlength="180" required>
          </input>
        </div>

        <div className="container" id="autorLib">
          <label for="autor"><b>Autor: </b></label>
          <input type="text" placeholder="Enter author" name="autor" maxlength="180" required>
          </input>
        </div>

        <div className="container" id="genderLib">
          <label for="genero"><b>Género: </b></label>
          <input type="text" placeholder="Enter gender" name="gender" maxlength="80" required>
          </input>
        </div>

        <div className="container" id="autorLib">
          <label for="AñoPubli"><b>Año de publicación: </b></label>
          <input type="text" placeholder="Enter year" name="AñoPubli" maxlength="4" >
          </input>
        </div>

        <div className="container" id="ISBN">
          <label for="ISBN"><b>ISBN: </b></label>
          <input type="text" placeholder="Enter ISBN" name="ISBN" maxlength="10" required>
          </input>
        </div>

        <div className="container" id="sinopsis">
          <label for="Synopsis"><b>Sinopsis: </b></label>
          <textarea name="sinopsis" id="sino" placeholder="Enter Synopsis" name="ISBN" >
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

        


      </div>

  )
}

export default Admin;
