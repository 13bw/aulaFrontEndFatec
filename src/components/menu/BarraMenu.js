import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
function BarraMenu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Página Inicial</Link>
                    <Link to="/login">login</Link>
                    <Link to="/profile">Perfil</Link>
                    <Link to="/register">Cadastro</Link>
                    <Link to="/shop">Carrinho</Link>
                </li>
            </ul>
        </nav>
    );
}

export default BarraMenu;
