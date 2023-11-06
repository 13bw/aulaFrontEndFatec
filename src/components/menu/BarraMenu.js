import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

// Importe os arquivos SVG
import logoSvg from './logo.svg';
import searchIconSvg from './search-icon.svg';
import optionsIconSvg from './options-icon.svg';
import userIconSvg from './user-icon.svg';
import shopIconSvg from './shop-icon.svg';

function BarraMenu() {
    return (
        <nav className="navbar">
            <div className="left">
                <div className="logo">
                    <img src={logoSvg} alt="" />
                </div>
            </div>
            <div className="center">
                <input type="text" className="search" placeholder="Busque aqui" />
                <img src={searchIconSvg} className="search-icon" alt="" />
            </div>
            <div className="right">
                <img src={optionsIconSvg} className="icon" alt="" />
                <img src={userIconSvg} className="icon" alt="" />
                <img src={shopIconSvg} className="icon" alt="" />
            </div>
        </nav>
    );
}

export default BarraMenu;
