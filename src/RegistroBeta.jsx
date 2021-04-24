import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Perfil from './Perfil'
import Admin from './Admin'
import logo from './LogoWeb.svg';
import './styles.css'

const Registro = () => {
    const [username, setUsername] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState();
  
    const handleSubmit = async e => {
      e.preventDefault();
      const user = { username, email, password1, password2 };
      // send the username and password to the server
      const response = await axios.post(
        "https://lectorbrainbook.herokuapp.com/rest-auth/registration/",
        user
      );
      // set the state of the user
      setUser(response.data)
      // store the user in localStorage
      localStorage.setItem('userKey', response.data)
      console.log(response.data)
      window.location='/Perfil';
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

  if (user && user==='felipe') {
    return <div><Admin /></div>;
  }
 // if (user) {
 //   return <div><Perfil /></div>;
  //}

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
      <input type="password" placeholder="Enter Password" name="psw" onChange={({ target }) => setPassword1(target.value)} required>
      </input>
    </div>

    <div class="container" id="passApp">
      <label for="psw"><b></b></label>
      <input type="password" placeholder="Repeat Password" name="psw" onChange={({ target }) => setPassword2(target.value)} required>
      </input>
    </div>

    <div class="container" id="userMail">
      <label for="email"><b></b></label>
      <input type="email" placeholder="Enter email" name="email" onChange={({ target }) => setEmail(target.value)} required>
      </input>
    </div>

    <div class="container" id="but">
      <button type="submit" class="btn btn-success" onClick={handleSubmit} >Registrar</button>
    </div>


  </div>
    )

}

export default Registro;