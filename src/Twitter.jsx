import React from 'react';
import Link from '@material-ui/core/Link';

import {useState, useEffect} from 'react'
import axios from 'axios';
import './styles.css'

import swal from 'sweetalert';

import Navigator from './Navigator'

import { Timeline } from 'react-twitter-widgets'

const Twitter = () => {

  
  
  return (
    <div>
        <Navigator/>
        

<Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'BookLector'
  }}
  options={{
    width: '200',
    height: '400'
  }}
/>

    </div>
  )
}

export default Twitter;