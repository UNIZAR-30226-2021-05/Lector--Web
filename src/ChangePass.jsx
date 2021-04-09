import React, { Component, useState, useContext, useEffect} from 'react';
//import { StyleSheet, View , Text, TouchableWithoutFeedback, Keyboard, TextInput, TouchableHighlight } from 'react-native';
import axios from 'axios'
import logo from './LogoWeb.svg';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
  } from 'react-native';

export class ChangePass extends Component{
    constructor(props) {
        super(props)

        this.state = {
            passwordActual: '',
            password1: '',
            password2:''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://lectorbrainbook.herokuapp.com/rest-auth/login/', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const {passwordActual, password1, password2 } = this.state
    return (
        
      

		
             

	
            <form onSubmit={this.submitHandler}>
                <div>
                    <input 
                    type="text" 
                    name="passwordActual" 
                    value={passwordActual} 
                    onChange={this.changeHandler}/>
                </div>
                <div>
                    <input 
                    type="text" 
                    name="password1" 
                    value={password1} 
                    onChange={this.changeHandler}/>
                </div>
                <div>
                    <input 
                    type="text" 
                    name="password2" 
                    value={password2} 
                    onChange={this.changeHandler}/>
                </div>
                <button type="submit">Change Password</button>
            </form>
    

	
    )
    }
}

export default ChangePass