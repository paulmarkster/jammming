import React from 'react';
import './NavItemLogin.css';
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


export default function NavItemLogin({setView, loginStatus}) {

    const user = sessionStorage.getItem('user_name') || 'No active user';
    const buttonDisplay = (loginStatus === 'Logged In') ? {display: 'none'} : {display: 'block'};

    return (
        <div id='nav-item-login'>
            <p id='login-nav-item-icon'><PersonOutlineIcon /></p>
            <p id='login-nav-item-text'>{user}</p>
            <Link to='Login'><button id='login-button' type='button' style={buttonDisplay} onClick={() => setView('Login')}>Login</button></Link>
        </div>
    );
}