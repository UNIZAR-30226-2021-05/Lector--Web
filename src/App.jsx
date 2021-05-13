import {
  BrowserRouter as Router,
  Switch,
  Route,
}  from 'react-router-dom'
import React from 'react';
import Login from './Login'
import Registro from './Registro'
import Inicio from './Inicio'
import Raiz from './Raiz'
import Admin from './Admin'
import ChangePass from './ChangePass'
import './styles.css'


// Componentes de Perfil
import EditarPerfil from './componentesPerfil/EditarPerfil'
import EditarEmail from './componentesPerfil/EditarEmail'
import ConfigurarCuenta from './componentesPerfil/ConfigurarCuenta'

// Componentes barra de navegacion
import Leyendo from './Leyendo'
import Biblioteca from './Biblioteca'
import Busqueda from './Busqueda'
import Perfil from './Perfil'
// import PerfilBeta from './PerfilBeta'

// Componentes barrade busqueda
import BookCard from './BookCard'
import Leer from './Leer'

import TodosLibros from './TodosLibros'



function App() {

  return (
      <Router>
         <Switch>

          {/* Componentes Perfil */}
 
          <Route path="/EditarPerfil/" exact component={EditarPerfil} />
          <Route path="/EditarEmail/" exact component={EditarEmail} />
          <Route path="/ConfigurarCuenta/" exact component={ConfigurarCuenta} />
          <Route path="/ChangePass/" exact component={ChangePass} />

          {/* Componentes barra de navegacion */}
          <Route path="/Perfil/" exact component={Perfil} />
          <Route path="/Leyendo/" exact component={Leyendo} />
          <Route path="/Biblioteca/" exact component={Biblioteca} />
          <Route path="/Busqueda/" exact component={Busqueda} />

          {/* Componentes busqueda de libros y demas */}
          <Route path="/BookCard/" exact component={BookCard} />
          
          <Route path="/Leer/" exact component={Leer} />
          <Route path="/TodosLibros/" exact component={TodosLibros} />




       
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
