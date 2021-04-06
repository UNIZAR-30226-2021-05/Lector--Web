import React, {Component} from 'react';
import  { useState,useEffect } from "react";

//import PostForm from './components/PostForm';



const Perfil = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState()

    const handleLogout = () => {
        setUser({});
        setUsername("");
        setPassword("");
        localStorage.clear();
      };

    return(
        
         <form onSubmit={handleLogout}>
             <h1>Estas dentro</h1>
        <button onClick={handleLogout}>logout</button>
       </form>



      ); 
}

export default Perfil;