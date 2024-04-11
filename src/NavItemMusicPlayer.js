import React from 'react';
import './NavItem.css';

export default function NavItemMusicPlayer({icon, text, currentView, setView}) {

    const viewColor = (text === currentView) ? {backgroundColor: '#dbe7c8'} : {backgroundColor: '#f9faef'};

    return (
        <div className='nav-item' style={viewColor} onClick={() => setView('Music Player')}>
            <div className='nav-item-icon'>{icon}</div>
            <div className='nav-item-text'>{text}</div>
        </div>
    );
}