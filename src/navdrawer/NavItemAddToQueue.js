import React from 'react';
import './NavItem.css';
import AddToQueueIcon from '@mui/icons-material/AddToQueue'

export default function NavItemAddToQueue({currentView, setView}) {

    const viewColor = (currentView === 'Add to Queue') ? {backgroundColor: '#dbe7c8'} : {backgroundColor: '#f9faef'};

    return (
        <div className='nav-item' style={viewColor} onClick={() => setView('Add to Queue')}>
            <div className='nav-item-icon'><AddToQueueIcon /></div>
            <div className='nav-item-text'>Add to Queue</div>
        </div>
    );
}