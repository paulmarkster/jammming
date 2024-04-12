import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavDrawer.css';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NavHeader from './NavHeader';
import NavItemWelcome from './NavItemWelcome';
import NavItemAddToQueue from './NavItemAddToQueue';
import NavItemMusicPlayer from './NavItemMusicPlayer';
import NavDivider from './NavDivider';
import NavItemWithButton from './NavItemWithButton';

export function NavDrawer() {

    const [activeView, setActiveView] = useState('Welcome');

    return (
        <div className='nav-drawer'>
            <div className='nav-drawer-inner'>
                <NavHeader text='Features' />
                <Link to='Welcome'><NavItemWelcome currentView={activeView} setView={setActiveView} /></Link>
                <Link to='Add to Queue'><NavItemAddToQueue currentView={activeView} setView={setActiveView} /></Link>
                <Link to='Music Player'><NavItemMusicPlayer currentView={activeView} setView={setActiveView} /></Link>  
                <NavDivider />
                <NavHeader text= 'Appearance' />
                <NavItemWithButton icon={<QueueMusicIcon />} text='Queue' buttonStyle='tonal' buttonText='Show' />
                <NavDivider />
                <NavHeader text='Settings' />
                <NavItemWithButton icon={<PersonOutlineIcon />} text='<No active user>' buttonStyle='filled' buttonText='Login' />
            </div>                      
        </div>
    );
}