import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavDrawer.css';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import NavHeader from './NavHeader';
import NavItemWelcome from './NavItemWelcome';
import NavItemAddToQueue from './NavItemAddToQueue';
import NavItemMusicPlayer from './NavItemMusicPlayer';
import NavDivider from './NavDivider';
import NavItemLogin from './NavItemLogin';
import NavItemShowQueue from './NavItemShowQueue';

export default function NavDrawer({user}) {   

    const [activeView, setActiveView] = useState('Welcome');

    return (
        <div className='nav-drawer'>
            <div className='nav-drawer-inner'>
                <NavHeader text='Pages' />
                <Link to='/'><NavItemWelcome currentView={activeView} setView={setActiveView} /></Link>
                <Link to='AddtoQueue'><NavItemAddToQueue currentView={activeView} setView={setActiveView} /></Link>
                <Link to='MusicPlayer'><NavItemMusicPlayer currentView={activeView} setView={setActiveView} /></Link>  
                <NavDivider />
                <NavHeader text= 'Appearance' />
                <NavItemShowQueue icon={<QueueMusicIcon />} text='Queue' />
                <NavDivider />
                <NavHeader text='Spotify User' />
                <NavItemLogin user={user} />
            </div>                      
        </div>
    );
}