import React from 'react';
import styles from './NavItemShowQueue.module.css';
import NavItem from '../NavItem/NavItem';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

export default function NavItemShowQueue({showQueue, setShowQueue}) {

  return (
    <div className={styles.navitem}>
      <NavItem icon={<QueueMusicIcon />} text={'Queue'} />
      <button className={styles.button} type='button' onClick={() => setShowQueue(!showQueue)}>{showQueue ? 'Hide' : 'Show'}</button>
    </div>
  );
}