import React from 'react';
import { Link } from 'react-router-dom';


import './style.css'

import porsche from './porsche.webp';
import ferrari from './ferrari.webp';
import imp from './porsche.webp';

function Carro(props) {
    return (
        <div className="carro">
            <img src={props.imagemSrc} alt={props.nome} />
            <h3>{props.nome}</h3>
        </div>
    );
}

function Home() {
    return (
        <div className="grid-3x3">
            <Link to="/product">
            <Carro imagemSrc={porsche} nome="Porsche 911 Carrera S" />
            </Link>
            <Link to="/product">
            <Carro imagemSrc={ferrari} nome="Ferrari F8 Tributo" />
            </Link>
            <Link to="/product">
            <Carro imagemSrc={imp} nome="Nome do Carro" />
            </Link>
            <Link to="/product">
            <Carro imagemSrc={imp} nome="Nome do Carro" />
            </Link>
            <Link to="/product">
            <Carro imagemSrc={imp} nome="Nome do Carro" />
            </Link>
            <Link to="/product">
            <Carro imagemSrc={imp} nome="Nome do Carro" />
            </Link>
            <Link to="/product">
            <Carro imagemSrc={imp} nome="Nome do Carro" />
            </Link>
            <Link to="/product">
            <Carro imagemSrc={imp} nome="Nome do Carro" />
            </Link>
            <Link to="/product">
            <Carro imagemSrc={imp} nome="Nome do Carro" />
            </Link>
        </div>
    );
}

export default Home;
