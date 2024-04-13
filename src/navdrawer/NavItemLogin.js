import React from 'react';
import './NavItemLogin.css';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';

export default function NavItemLogin({icon, text}) {

    return (
        <div id='nav-item-login'>
            <NavItem icon={icon} text={text} />
            <Link to='Login'><button id='login-button' type='button'>Login</button></Link>
        </div>
    );
}