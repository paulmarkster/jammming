import React from 'react';
import './NavItemLogin.css';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


export default function NavItemLogin({user}) {

    return (
        <div id='nav-item-login'>
            <p id='login-nav-item-icon'><PersonOutlineIcon /></p>
            <p id='login-nav-item-text'>{user}</p>
        </div>
    );
}