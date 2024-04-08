import React from 'react';
import './NavItemWithTonalButton.css';
import NavItem from './NavItem';
import Button from './Button';

export default function NavItemWithTonalButton({icon, text, buttonStyle, buttonText}) {
    return (
        <div className='nav-item-with-button'>
            <NavItem icon={icon} text={text} />
            <div className='nav-item-button'>
                <Button buttonStyle={buttonStyle} buttonText={buttonText} />
            </div>
        </div>
    );
}