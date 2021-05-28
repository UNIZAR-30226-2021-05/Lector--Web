import React from 'react';
import { useState, useEffect } from "react";
import Navigator from './Navigator'
import axios from 'axios'
import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';
import swal from 'sweetalert';
import Grid from '@material-ui/core/Grid';
import emailjs from 'emailjs';
import { send } from 'emailjs-com';



    const FormEmail = () => {

    var nombreUsuario = localStorage.getItem('userName')

    const initialState = {
    from_name: '',
    from_user: '',
    to_name: '',
    subject: '',
    message_html: ''
    };

    const [toSend, setToSend] = useState({
    from_name: 'lectorbrainboook@gmail.com',
    from_user: nombreUsuario,
    to_name: '',
    subject: '',
    message_html: ''
    });

    const onSubmit = (e) => {
    e.preventDefault();
    send(
        'service_m2mb8c2', 'template_ein3bfs', toSend, 'user_v4d3A2WdP86aLXFK9Xeur'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
        setToSend({ ...initialState });
        
    };

    const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });

    };

    return (

        <View id="seleccionarTexto">
                <div className="container pt-2 text-center">
                
                {/* { showMessage ? <div className="alert alert-success col-md-5 mx-auto" role="alert">Email Send Success!!</div> : ``} */}
            
                <form onSubmit={onSubmit}>
                    <div className="pt-3"><h3 className="font-weight-bold"> Introduzca un fragmento de texto a enviar</h3></div>
                    <div className="pt-3 col-md-5 mx-auto">
                            <div className="form-group text-left"> <b>Introduzca email</b> <br/>
                                <input required type="text" name="to_name" className="form-control" placeholder="Introduzca email"  value={toSend.to_name} onChange={handleChange}/>
                            </div>
                    </div>
            
                    <div className="pt-3 col-md-5 mx-auto">
                            <div className="form-group text-left"> <b>Asunto</b> <br/>
                                <input required type="text" name="subject" className="form-control" placeholder="Introducir asunto"  value={toSend.subject} onChange={handleChange}/>
                            </div>
                    </div>
                    <div className="pt-3 col-md-5 mx-auto">
                            <div className="form-group text-left"> <b>Texto a enviar</b> <br/>
                                <textarea required name="message_html" className="form-control" placeholder="Introduzca texto a enviar"  value={toSend.message_html} onChange={handleChange}></textarea>
                            </div>
                    </div>
                    <div className="pt-3 col-md-5 mx-auto text-left">
                            <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </form>	
            </div>
        </View>

    );
}

export default FormEmail;