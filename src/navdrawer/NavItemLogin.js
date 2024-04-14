import React from 'react';
import './NavItemLogin.css';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';

export default function NavItemLogin({icon, text, currentView, setView}) {

    const viewColor = (currentView === 'Login') ? {backgroundColor: '#dbe7c8'} : {backgroundColor: '#f9faef'};

    return (
        <div id='nav-item-login' style={viewColor}>
            <div id='login-nav-item-icon'>{icon}</div>
            <div id='login-nav-item-text'>{text}</div>
            <Link to='Login'><button id='login-button' type='button' onClick={() => {setView('Login')}}>Login</button></Link>
        </div>
    );
}