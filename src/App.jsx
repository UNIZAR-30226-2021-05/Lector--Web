import logo from './LogoWeb.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
}  from 'react-router-dom'
import Login from './Login'
import Inicio from './Inicio'
import Raiz from './Raiz'
import './styles.css'

function App() {

  return (

      <Router>
        <Switch>
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
