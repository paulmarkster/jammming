import React from 'react';
import './NavDrawer.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RadioIcon from '@mui/icons-material/Radio';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import AddToQueueIcon from '@mui/icons-material/AddToQueue'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import NavHeader from './NavHeader';
import NavItem from './NavItem';
import NavDivider from './NavDivider';

export function NavDrawer() {
    return (
        <div className='nav-drawer'>
            <div className='nav-drawer-inner'>
                <NavHeader text='Pages' />
                <NavItem icon={<HomeOutlinedIcon />} text='Welcome' />
                <NavItem icon={<AddToQueueIcon />} text='Add to Queue' />
                <NavItem icon={<RadioIcon />} text='Music Player' />  
                <NavDivider />
                <NavHeader text= 'Appearance' />
                <NavItem icon={<QueueMusicIcon />} text='Queue' />
                <NavDivider />
                <NavHeader text='Settings' />
                <NavItem icon={<PersonOutlineIcon />} text='<User>' />
            </div>                      
        </div>
    );
}