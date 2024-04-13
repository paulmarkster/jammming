import React from 'react';
import './NavItemShowQueue.css';
import NavItem from './NavItem';

export default function NavItemShowQueue({icon, text}) {


    return (
        <div className='nav-item-with-button'>
            <NavItem icon={icon} text={text} />
            <button className='nav-item-button' type='button'>Show</button>
        </div>
    );
}