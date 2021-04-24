import React, {useState, useEffect, useContext, useCallback} from 'react'
import axios from 'axios'
import Perfil from './Perfil'
import Admin from './Admin'
import logo from './LogoWeb.svg';
import Context from './Context'
import './styles.css'

const Login = () => {
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [user, setUser] = useState()
  

  

  const handleSubmit = async e => {
    e.preventDefault();
    var x = JSON.parse(localStorage.getItem('userKey'));
    var prev = 'Token '
    var combo = prev + x
    // document.getElementById("root").innerHTML = x;
    var url = 'https://lectorbrainbook.herokuapp.com/rest-auth/password/change/';
    console.log("ITEMS:")
    console.log("-----------")
    console.log(combo)
    console.log(x)
    console.log(password)
    console.log(password2)
    const userB = {password, password2 };
    const options = {
      headers: {'Authorization':combo }
    };
    // console.log(options)
    // // send the username and password to the server
    // //No funciona, error 401, se hace mal la peticion y no se por qué
    // const response = await axios.post(
    //   "http://lectorbrainbook.herokuapp.com/rest-auth/password/change/", userB ,options)
    // ;
    // //set the state of the user
    // setUser(response.data)
    // //store the user in localStorage
    // localStorage.setItem('userKey', response.data)
    // console.log("LA KEY ES:")
    // console.log(response.data)


    const response = fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Token + ${x}`
      },
      body: JSON.stringify({
        new_password1: password,
        new_password2: password2,
      })
    })
    console.log(response.data);
  };
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      //Posible fallo de codigo
     // const foundUser = JSON.parse(loggedInUser);
      setUser(loggedInUser);
    }
  }, []);

    return(

    <div class="form">

    <h1 id="titulo" align="center" > CAMBIO PASS </h1>

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
    )

}

export default Login;
