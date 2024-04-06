import React from 'react';
import './NavItem.css';

export default function NavItem({icon, text}) {
    return (
        <div className='nav-item'>
            <div className='nav-item-icon'>{icon}</div>
            <div className='nav-item-text'>{text}</div>
        </div>
    );
}