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
      <div style={{ marginLeft: 240 }}>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'BookLector'
        }}
        options={{
          width: '800',
          height: '600',
        }}
      />
      </div>
    </div>
  )
}

export default Twitter;