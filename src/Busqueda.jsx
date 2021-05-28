import React from 'react';
import Navigator from './Navigator'



import './App';
import './styles.css';

import AppCard from './AppCard'

function Busqueda() {

  

  return (
    <view>
    <Navigator />
    <h1 id="titBib">BUSQUEDA</h1>
    <AppCard />
    </view>
  )

}

export default Busqueda;