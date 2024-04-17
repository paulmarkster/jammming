import React from 'react';
import './NavItemLogin.css';
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function NavItemLogin({currentView, setView}) {

    const viewColor = (currentView === 'Login') ? {backgroundColor: '#dbe7c8'} : {backgroundColor: '#f9faef'};

    return (
        <div id='nav-item-login' style={viewColor}>
            <p id='login-nav-item-icon'><PersonOutlineIcon /></p>
            <p id='login-nav-item-text'>No active user</p>
            <Link to='Login'><button id='login-button' type='button' onClick={() => setView('Login')}>Login</button></Link>
        </div>
    );
}