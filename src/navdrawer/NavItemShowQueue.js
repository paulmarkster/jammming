import React from 'react';
import styles from './NavItemShowQueue.module.css';
import NavItem from './NavItem';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

export default function NavItemShowQueue() {

  return (
    <div className={styles.navitem}>
      <NavItem icon={<QueueMusicIcon />} text={'Queue'} />
      <button className={styles.button} type='button'>Show</button>
    </div>
  );
}