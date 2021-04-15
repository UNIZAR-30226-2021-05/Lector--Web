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

import AppCard from './AppCard'

function Busqueda() {

  

  return (
    <view>
    <Navigator />
    <AppCard />
    </view>
  )

}

export default Busqueda;