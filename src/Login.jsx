import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Perfil from './Perfil'
import Admin from './Admin'
import logo from './LogoWeb.svg';
import './styles.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()

  const clickChange = (e) =>{
    e.preventDefault();
    console.log('Clickado cambiar contraseña');
    window.location='/changepas';
  }


  const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, password };
    // send the username and password to the server
    const response = await axios.post(
      "http://lectorbrainbook.herokuapp.com/rest-auth/login/",
      user
    );
    // set the state of the user
    setUser(response.data)
    // store the user in localStorage
    localStorage.setItem('user', response.data)
    console.log(response.data)
    
  };

 
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      //Posible fallo de codigo
     // const foundUser = JSON.parse(loggedInUser);
      setUser(loggedInUser);
    }
  }, []);

// if there's a user show the message below
  if (user) {
    if(username==='felipe'){
      return <div><Admin /></div>;
    }
    return <div><Perfil /></div>;
  }

    return(
    <div class="form">

    <h1 id="titulo" align="center" > BOOKBRAIN </h1>

    <div class="img" align="center">
        <img src={logo} className="App-logo" alt="logoApp" title="logo AppName" weight="275" height="275"/>
    </div>


    <div class="container" id="loginApp">
      <label for="uname"><b></b></label>
      <input type="text" placeholder="Enter Username" name="uname" onChange={({ target }) => setUsername(target.value)} required>
      </input>
    </div>

    <div class="container" id="passApp">
      <label for="psw"><b></b></label>
      <input type="password" placeholder="Enter Password" name="psw" onChange={({ target }) => setPassword(target.value)} required>
      </input>
    </div>

    <div class="container" id="forgot">
         <span class="psw"><a href="#" onClick={clickChange}>¿Ha olvidado su contraseña?</a></span>
         
         {/*FALTA IMPLEMENTAR REESTABLECER LA CONTRASEÑA*/}

    </div>

    <div class="container" id="but">
      <button type="submit" class="btn btn-success" onClick={handleSubmit} >Login</button>
    </div>


  </div>
    )

}

export default Login;
