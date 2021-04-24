import logo from './LogoWeb.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
}  from 'react-router-dom'
import React, {useContext} from 'react';
import Login from './Login'
import Registro from './Registro'
import Inicio from './Inicio'
import Raiz from './Raiz'
import Admin from './Admin'
import ChangePass from './ChangePass'
import Context from './Context'
import './styles.css'
import Navigator from './Navigator'


// Componentes de Perfil
import EditarPerfil from './componentesPerfil/EditarPerfil'
import EditarEmail from './componentesPerfil/EditarEmail'
import EditarFoto from './componentesPerfil/EditarFoto'
import EditarNombre from './componentesPerfil/EditarNombre'
import ConfigurarCuenta from './componentesPerfil/configurarCuenta'

// Componentes barra de navegacion
import Leyendo from './Leyendo'
import Biblioteca from './Biblioteca'
import Busqueda from './Busqueda'
import Perfil from './Perfil'
// import PerfilBeta from './PerfilBeta'

// Componentes barrade busqueda
import BookCard from './BookCard'



function App() {

  return (
      <Router>
         <Switch>

          {/* Componentes Perfil */}
 
          <Route path="/EditarPerfil/" exact component={EditarPerfil} />
          <Route path="/EditarEmail/" exact component={EditarEmail} />
          <Route path="/EditarFoto/" exact component={EditarFoto} />
          <Route path="/EditarNombre/" exact component={EditarNombre} />
          <Route path="/ConfigurarCuenta/" exact component={ConfigurarCuenta} />
          <Route path="/ChangePass/" exact component={ChangePass} />

          {/* Componentes barra de navegacion */}
          <Route path="/Perfil/" exact component={Perfil} />
          <Route path="/Leyendo/" exact component={Leyendo} />
          <Route path="/Biblioteca/" exact component={Biblioteca} />
          <Route path="/Busqueda/" exact component={Busqueda} />

          {/* Componentes busqueda de libros y demas */}
          <Route path="/BookCard/" exact component={BookCard} />
          {/* <Route path="/PerfilBeta/" exact component={PerfilBeta} /> */}




       
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
