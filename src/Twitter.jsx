import React from 'react';

import './styles.css'

import Navigator from './Navigator'

import { Timeline } from 'react-twitter-widgets'

import {
  View
} from 'react-native';

const Twitter = () => {
 
  return (
    <div>
      <Navigator/>  
      <div id="twi">
      <Timeline 
        dataSource={{
          sourceType: 'profile',
          screenName: 'BookLector'
        }}
        options={{
          width: '600',
          height: '400',
        }}
      />
      </div>

        <object id="perio" type="text/html"
            data="https://www.elperiodicodearagon.com"
              width="320" height="480">
        </object>
    </div>
  )
}

export default Twitter;