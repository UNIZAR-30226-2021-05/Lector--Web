import React, { Component, useState, useContext, useEffect} from 'react';
//import { StyleSheet, View , Text, TouchableWithoutFeedback, Keyboard, TextInput, TouchableHighlight } from 'react-native';
import axios from 'axios'

export class PostForm extends Component{
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password1: '',
            password2: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://lectorbrainbook.herokuapp.com/rest-auth/registration/', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const {username, email, password1, password2 } = this.state
    return (
        
        <div>
            <form onSubmit={this.submitHandler}>
                <div>
                    <input 
                    type="text" 
                    name="username" 
                    value={username} 
                    onChange={this.changeHandler}/>
                </div>
                <div>
                    <input 
                    type="text" 
                    name="email" 
                    value={email} 
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

                <button type="submit">Submit</button>
            </form>
    

        </div>
    )
    }
}

export default PostForm