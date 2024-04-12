import React from 'react';
import './NavItem.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function NavItemWelcome({currentView, setView}) {

    const viewColor = (currentView === 'Welcome') ? {backgroundColor: '#dbe7c8'} : {backgroundColor: '#f9faef'};

    return (
        <div className='nav-item' style={viewColor} onClick={() => {setView('Welcome')}}>
            <div className='nav-item-icon'><HomeOutlinedIcon /></div>
            <div className='nav-item-text'>Welcome</div>
        </div>
    );
}