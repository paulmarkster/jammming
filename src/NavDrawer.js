import React from 'react';
import './NavDrawer.css';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import Radio from '@mui/icons-material/Radio';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

export function NavDrawer() {
    return (
        <div className='nav-drawer'>
            <div className='headline'>
                <div className='title'>
                    Jammming
                </div>
            </div>
            <div className='section-header headline'>
                <div className='label title'>
                    Pages
                </div>
            </div>
            <div className='nav-item headline'>
                <div className='icon'>
                    <HomeOutlined />
                </div>
                <div className='nav-item-text'>
                    Welcome
                </div>
            </div>
            <div className='nav-item headline'>
                <div className='icon'>
                    <QueueMusicIcon />
                </div>
                <div className='nav-item-text'>
                    Create Playlist
                </div>
            </div>
            <div className='nav-item headline'>
                <div className='icon'>
                    <Radio />
                </div>
                <div className='nav-item-text'>
                    Player
                </div>
            </div>                        
        </div>
    );
}