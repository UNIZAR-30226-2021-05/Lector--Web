import React from 'react'
import logo from './LogoWeb.svg';
import './styles.css'

function Login() {
  
  const clickInicio = (e) =>{
    e.preventDefault();
    console.log('Clickado Iniciar Sesion');
    window.location='/inicio';
  }

  return (  

      <div class="form">

        <h1 id="titulo" align="center" > BOOKBRAIN </h1>

        <div class="img" align="center">
            <img src={logo} className="App-logo" alt="logoApp" title="logo AppName" weight="275" height="275"/>
        </div>


        <div class="container" id="loginApp">
          <label for="uname"><b></b></label>
          <input type="text" placeholder="Enter Username" name="uname" required>
          </input>
        </div>

        <div class="container" id="passApp">
          <label for="psw"><b></b></label>
          <input type="password" placeholder="Enter Password" name="psw" required>
          </input>
        </div>

        <div class="container" id="forgot">
             <span class="psw"><a href="#">¿Ha olvidado su contraseña?</a></span>
             
             {/*FALTA IMPLEMENTAR REESTABLECER LA CONTRASEÑA*/}

        </div>

        <div class="container" id="but">
          <button type="button" class="btn btn-success">Login</button>
        </div>


      </div>

  )
}

export default Login;
