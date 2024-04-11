import React from 'react';
import './NavDrawer.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RadioIcon from '@mui/icons-material/Radio';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import AddToQueueIcon from '@mui/icons-material/AddToQueue'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import NavHeader from './NavHeader';
import NavItemWelcome from './NavItemWelcome';
import NavItemAddToQueue from './NavItemAddToQueue';
import NavItemMusicPlayer from './NavItemMusicPlayer';
import NavDivider from './NavDivider';
import NavItemWithButton from './NavItemWithButton';

export function NavDrawer({ currentView, setView }) {
    return (
        <div className='nav-drawer'>
            <div className='nav-drawer-inner'>
                <NavHeader text='Views' />
                <NavItemWelcome icon={<HomeOutlinedIcon />} text='Welcome' currentView={currentView} setView={setView} />
                <NavItemAddToQueue icon={<AddToQueueIcon />} text='Add to Queue' currentView={currentView} setView={setView} />
                <NavItemMusicPlayer icon={<RadioIcon />} text='Music Player' currentView={currentView} setView={setView} />  
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