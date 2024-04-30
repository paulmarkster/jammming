import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavDrawer.module.css';
import NavHeader from './NavHeader/NavHeader';
import NavItemWelcome from './NavItemWelcome/NavItemWelcome';
import NavItemAddToQueue from './NavItemAddToQueue/NavItemAddToQueue';
import NavItemMusicPlayer from './NavItemMusicPlayer/NavItemMusicPlayer';
import NavDivider from './NavDivider/NavDivider';
import NavItemLogin from './NavItemLogin/NavItemLogin';
import NavItemShowQueue from './NavItemShowQueue/NavItemShowQueue';

export default function NavDrawer({user}) {   

    // This state determines background color for the linked page items in the nav drawer.
    const [page, setPage] = useState('Welcome');

    return (
        <div className={styles.navdrawer}>
            <div className={styles.innernavdrawer}>
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