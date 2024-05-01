import React from 'react';
import styles from './NavItemShowQueue.module.css';
import NavItem from '../NavItem/NavItem';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

export default function NavItemShowQueue({queue, setQueue}) {

  return (
    <div className={styles.navitem}>
      <NavItem icon={<QueueMusicIcon />} text={'Queue'} />
      <button className={styles.button} type='button' onClick={() => setQueue(!queue)}>{queue ? 'Hide' : 'Show'}</button>
    </div>
  );
}