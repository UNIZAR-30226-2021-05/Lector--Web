import logo from './LogoWeb.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
}  from 'react-router-dom'
import React from 'react';
import Login from './Login'
import Registro from './Registro'
import Inicio from './Inicio'
import Raiz from './Raiz'
import Admin from './Admin'
import Perfil from './Perfil'
import ChangePass from './ChangePass'
import './styles.css'

function App() {

  return (

      <Router>
        <Switch>

        <Route path="/changepas/">
            <ChangePass></ChangePass>
          </Route>

        <Route path="/perfil/">
            <Perfil></Perfil>
          </Route>

        <Route path="/admin/">
            <Admin></Admin>
          </Route>

        <Route path="/registro/">
          <Registro></Registro>
        </Route>

        <Route path="/login/">
            <Login></Login>
          </Route>

          <Route path="/inicio/">
            <Inicio></Inicio>
          </Route>

          <Route path="/">
            <Raiz></Raiz>
          </Route>

        </Switch>
      </Router>
  )
}

export default App;
