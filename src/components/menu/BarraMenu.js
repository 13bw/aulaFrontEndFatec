import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// Importe os arquivos SVG
import logoSvg from './logo.svg';
import searchIconSvg from './search-icon.svg';
import userIconSvg from './user-icon.svg';
import shopIconSvg from './shop-icon.svg';

function BarraMenu() {
    return (
        <nav className="navbar">
            <div className="left">
                <div className="logo">
                    <Link to="/">
                        <img className="icon" src={logoSvg} />
                    </Link>
                </div>
            </div>
            <div className="center">
                <input type="text" className="search" placeholder="Busque aqui" />
                    <img src={searchIconSvg} className="search-icon" />
            </div>
            <div className="right">

                <Link to="/profile">
                    <img src={userIconSvg} className="icon" />
                </Link>
                <Link to="/shop">
                    <img src={shopIconSvg} className="icon" />
                </Link>
            </div>
        </nav>
    );
}

export default BarraMenu;
