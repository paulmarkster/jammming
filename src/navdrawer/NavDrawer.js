import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavDrawer.css';
import NavHeader from './NavHeader';
import NavItemWelcome from './NavItemWelcome';
import NavItemAddToQueue from './NavItemAddToQueue';
import NavItemMusicPlayer from './NavItemMusicPlayer';
import NavDivider from './NavDivider';
import NavItemLogin from './NavItemLogin';
import NavItemShowQueue from './NavItemShowQueue';

export default function NavDrawer({user}) {   

    // This state determines background color for the linked page items in the nav drawer.
    const [page, setPage] = useState('Welcome');

    return (
        <div className='nav-drawer'>
            <div className='nav-drawer-inner'>
                <NavHeader text='Pages' />
                <Link to='/'><NavItemWelcome page={page} setPage={setPage} /></Link>
                <Link to='AddtoQueue'><NavItemAddToQueue page={page} setPage={setPage} /></Link>
                <Link to='MusicPlayer'><NavItemMusicPlayer page={page} setPage={setPage} /></Link>  
                <NavDivider />
                <NavHeader text= 'Appearance' />
                <NavItemShowQueue />
                <NavDivider />
                <NavHeader text='Spotify User' />
                <NavItemLogin user={user} />
            </div>                      
        </div>
    );
}