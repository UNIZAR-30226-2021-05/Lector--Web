import React from 'react';
import logo from './LogoWeb.svg';
import Navigator from './Navigator'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
}  from 'react-router-dom'
import './App';
import './styles.css';

function Busqueda() {

  

  return (
    <view>
    <Navigator />
    <h1>Busqueda</h1>
    </view>
  )

}

export default Busqueda;