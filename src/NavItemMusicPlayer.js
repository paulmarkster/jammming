import React from 'react';
import './NavItem.css';
import RadioIcon from '@mui/icons-material/Radio';

export default function NavItemMusicPlayer({currentView, setView}) {

    const viewColor = (currentView === 'Music Player') ? {backgroundColor: '#dbe7c8'} : {backgroundColor: '#f9faef'};

    return (
        <div className='nav-item' style={viewColor} onClick={() => setView('Music Player')}>
            <div className='nav-item-icon'><RadioIcon /></div>
            <div className='nav-item-text'>Music Player</div>
        </div>
    );
}