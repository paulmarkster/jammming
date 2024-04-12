import React from 'react';
import './NavHeader.css';

export default function NavHeader({text}) {
    return (
        <div className='nav-header'>
            <div className='nav-title'>{text}</div>
        </div>
    );
}