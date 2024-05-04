import React from 'react';
import styles from './NavItemShowQueue.module.css';
import NavItem from '../NavItem/NavItem';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

export default function NavItemShowQueue({showQueue, setShowQueue}) {

  const handleOnClick = () => {
    // Check to ensure there is a user logged into Spotify.
    if (sessionStorage.getItem('client_id')) {
      setShowQueue(!showQueue);
    } else {
      alert('Login prior to showing user queue.');
    };
  }

  return (
    <div className={styles.navitem}>
      <NavItem icon={<QueueMusicIcon />} text={'Queue'} />
      <button className={styles.button} type='button' onClick={handleOnClick}>{showQueue ? 'Hide' : 'Show'}</button>
    </div>
  );
}