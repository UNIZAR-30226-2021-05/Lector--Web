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

      <div class="form">

        <h1 id="titulo" align="center" > BOOKBRAIN </h1>

        <div class="container" id="tituloLib">
          <label for="title"><b>Inserte título: </b></label>
          <input type="text" placeholder="Enter title" name="title" maxlength="180" required>
          </input>
        </div>

        <div class="container" id="autorLib">
          <label for="autor"><b>Autor: </b></label>
          <input type="text" placeholder="Enter author" name="autor" maxlength="180" required>
          </input>
        </div>

        <div class="container" id="autorLib">
          <label for="AñoPubli"><b>Año de publicación: </b></label>
          <input type="text" placeholder="Enter year" name="AñoPubli" maxlength="4" required>
          </input>
        </div>


        <input type="file" name="subirarchivos" id="subirAdmin">
           
        </input>


        <div class="container" id="but">
          <button type="button" class="btn btn-success">Subir</button>
        </div>

        


      </div>

  )
}

export default Admin;
