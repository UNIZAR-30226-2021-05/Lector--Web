import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as AxiosLogger from 'axios-logger';
import Navigator from './Navigator'
import './styles.css'
//Alertas
import swal from 'sweetalert';

const ChangePass = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [user, setUser] = useState()

  





  const handleSubmit = async e => {
    e.preventDefault();
    var prev = ' Token '
    var combo = prev + localStorage.getItem('userKey').substring('8', '48')
    
    const response = axios.request({
      url: 'http://lectorbrainbook.herokuapp.com/rest-auth/password/change/',
      method: 'post',
      headers: { 'Authorization': combo },
      data: {
        'new_password1': password,
        'new_password2': password2
      },

    }).then(function (response) {
      console.log(response.data);
      swal({
        title: "Exito",
        text: "El cambio de contraseña ha sido realizado correctamente.",
        icon: "success",
      });

    })
      .catch(function (error) {
        // handle error
        console.log(error);
        swal({
          title: "Error",
          text: "Ha habido un fallo en el proceso.",
          icon: "error"
        });
      })
      ;
  }



    ;
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      //Posible fallo de codigo
      // const foundUser = JSON.parse(loggedInUser);
      setUser(loggedInUser);
    }
  }, []);

  return (
    
    <view>
      <Navigator />
    <div class="form">
      <h1 id="titulo" align="center" > Cambio de contraseña </h1>

      <div class="container" id="loginApp">
        <label htmlFor="uname"><b></b></label>
        <input type="password" placeholder="Nueva Contraseña" name="uname" onChange={({ target }) => setPassword(target.value)} required>
        </input>
      </div>

      <div class="container" id="passApp">
        <label htmlFor="psw"><b></b></label>
        <input type="password" placeholder="Repetir nueva contraseña" name="psw" onChange={({ target }) => setPassword2(target.value)} required>
        </input>
      </div>

      <div class="container" id="but">
        <button type="submit" class="btn btn-success" onClick={handleSubmit} >Cambiar Contraseña</button>
      </div>
      


    </div>
    </view>
  )

}

export default ChangePass;
