import React from 'react';
import logo from './LogoWeb.svg';
import './App';
import './styles.css';

function Raiz() {

  const clicar = (e) =>{
    e.preventDefault();
    console.log('Clickado');
    window.location='/inicio';
  }

  return (
    <div className="App" >
      <h1 id="titulo" align="center" > BIENVENIDO A BRAINBOOK! </h1>

      <div id="AppLogo" align="center">
        <img src={logo} className="App-logo" alt="logoApp" title="logo AppName" weight="325" height="325"/>
      </div>
      
      <div id="descripcion">
          <h2 id="quest">¿Qué es BRAINBOOK?</h2>
           <p id="presen"> 
             BrainBook es una aplicación para la gestión de libros electrónicos diseñada para satisfacer las necesidades de los usuarios lectores hoy en día. <br></br>
             Ha sido desarrollada por seis proto-ingenieros de la Universidad de Zaragoza. <br></br>
             Si quieres saber más... EMPECEMOS!!!
          </p>
          <input id="entrar" type="button" value="ENTRAR" onClick={clicar}> 
          </input>

      </div>
    </div>
  )

}

export default Raiz;