import React from 'react';
import './NavDrawer.css';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import Radio from '@mui/icons-material/Radio';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import NavHeader from './NavHeader';
import NavItem from './NavItem';

export function NavDrawer() {
    return (
        <div className='nav-drawer'>
            <NavHeader text='Jammming' />
            <NavHeader text='Pages' />
            <NavItem icon={<HomeOutlined />} text='Welcome' />
            <NavItem icon={<QueueMusicIcon />} text='Add to Queue' />
            <NavItem icon={<Radio />} text='Player' />                        
        </div>
    );
}