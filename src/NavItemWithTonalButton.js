import React from 'react';
import './NavItemWithTonalButton.css';
import NavItem from './NavItem';
import TonalButton from './TonalButton';

export default function NavItemWithTonalButton({icon, text, buttonText}) {
    return (
        <div className='nav-item-with-tonal-button'>
            <NavItem icon={icon} text={text} />
            <div className='nav-item-tonal-button'>
                <TonalButton text={buttonText} />
            </div>
        </div>
    );
}