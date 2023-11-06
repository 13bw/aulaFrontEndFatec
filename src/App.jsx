import React from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import Register from './components/register/Register'
import Shop from './components/shop/Shop'
import BarraMenu from './components/menu/BarraMenu';
import './'

function App() {
    return (
        <BrowserRouter>
            <BarraMenu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
