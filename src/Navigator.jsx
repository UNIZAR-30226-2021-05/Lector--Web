import React, { Component } from 'react';
import { useState, useEffect } from "react";
import logo from './LogoWeb.svg';
import { Link } from 'react-router-dom'
import EditarPerfil from './componentesPerfil/EditarPerfil'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';



const Navigator = () => {





    return (

        <div class="sticky-top" id="barra">
            <nav class="navbar navbar-expand-lg container align-items-center">
                <a class="navbar-brand" href="#">
                    <img src={logo} height="60" alt="" loading="lazy">
                    </img>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbar" >
                    <ul class="navbar-nav mx-3">
                        <li class="nav-item mx-2 active">
                            <Link to="Leyendo" className="nav-link">LEYENDO</Link>
                        </li>
                        <li class="nav-item mx-2">
                            <Link to="Biblioteca" className="nav-link">BIBLIOTECA</Link>
                        </li>
                        <li class="nav-item mx-2">
                            <Link to="Busqueda" className="nav-link">BUSQUEDA</Link>
                        </li>
                        <li class="nav-item mx-2">
                            <Link to="Perfil" className="nav-link">PERFIL</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>





    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#FFFF",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
});

export default Navigator;