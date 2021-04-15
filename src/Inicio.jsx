import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

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
    {/* esto de aqui se usara para hacer el boton con link que es como se tiene que hacer realmente */}
      {/* <TouchableOpacity style={styles.buttonContainer}>
							<Link to="ConfigurarCuenta" className="config">CONFIGURACION</Link>
						</TouchableOpacity> */}

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
