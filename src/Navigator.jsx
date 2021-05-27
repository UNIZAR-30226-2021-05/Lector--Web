import React from 'react';

import logo from './LogoWeb.svg';
import { Link } from 'react-router-dom'

import {
    StyleSheet
} from 'react-native';



const Navigator = () => {





    return (

        <div id="barra" className="sticky-top" >
            <nav className="navbar navbar-expand-lg container align-items-center">
                <a className="navbar-brand" href="/perfil">
                    <img src={logo} height="60" alt="" loading="lazy">
                    </img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="barra" >
                    <ul className="navbar-nav mx-3">
                        <li className="nav-item mx-2 active">
                            <Link to="Leyendo" className="nav-link">LEYENDO</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="Biblioteca" className="nav-link">BIBLIOTECA</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="Busqueda" className="nav-link">BUSQUEDA</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="Perfil" className="nav-link">PERFIL</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="Twitter" className="nav-link">TWITTER</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>





    );
}

export default Navigator;