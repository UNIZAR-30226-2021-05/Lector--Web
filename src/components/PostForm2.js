import React, { useState,useEffect } from "react";
import axios from "axios";
import Perfil from '../Perfil'



const PostForm2 = () => {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, email, password1, password2};
    // send the username and password to the server
    const response = await axios.post(
      "http://lectorbrainbook.herokuapp.com/rest-auth/registration/",
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
    return <div><Perfil /></div>;
  }

  // if there's no user, show the login form
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        placeholder="enter a username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
        <label htmlFor="password1">password1: </label>
        <input
          type="password"
          value={password1}
          placeholder="enter a password"
          onChange={({ target }) => setPassword1(target.value)}
        />
      </div>
      <div>
        <label htmlFor="password2">password2: </label>
        <input
          type="password"
          value={password2}
          placeholder="repeat a password"
          onChange={({ target }) => setPassword2(target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">email: </label>
        <input
          type="email"
          value={email}
          placeholder="enter a email"
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default PostForm2;