import React from 'react'
import './styles.css'

function Inicio() {

  const clickInicio = (e) =>{
    e.preventDefault();
    console.log('Clickado Iniciar Sesion');
    window.location='/login';
  }

  return (
    <div className="Inicio">
      
    
      <div class="cajainicio">
          <h1>.</h1>
      </div>

      <div className="tituloAPP">
      <h1 id="titulo2" align="center" > BOOKBRAIN </h1>
      </div>

      <button id="iniciar" value="entrar" onClick={clickInicio}
          > Iniciar sesión
      </button>

      <button id="registro" 
          > Registrarse
      </button>

      <div class="cajainicio2">
          <h1>.</h1>
      </div>


    </div>

  )
}

export default Inicio;
