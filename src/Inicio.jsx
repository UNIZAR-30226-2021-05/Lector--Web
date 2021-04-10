import React from 'react'
import './styles.css'

function Inicio() {

  const clickInicio = (e) =>{
    e.preventDefault();
    console.log('Clickado Iniciar Sesion');
    window.location='/login';
  }

  const clickRegistro = (e) =>{
    e.preventDefault();
    console.log('Clickado Registrarse');
    window.location='/registro';
  }

  return (
    <div className="Inicio">
      
      <div className="cajainicio">
          <h1>.</h1>
      </div>

      <div className="tituloAPP">
      <h1 id="titulo2" align="center" > BOOKBRAIN </h1>
      </div>

      <button id="iniciar" value="entrar" onClick={clickInicio}
          > Iniciar sesión
      </button>

      <button id="registro" value="registrar" onClick={clickRegistro}
          > Registrarse
      </button>

      <div className="cajainicio2">
          <h1>.</h1>
      </div>


    </div>

  )
}

export default Inicio;
