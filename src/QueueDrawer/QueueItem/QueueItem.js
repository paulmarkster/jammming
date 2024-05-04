import React from 'react';
import styles from './QueueItem.module.css';

export default function QueueItem({icon, name, artist}) {

  return (
    <div className={styles.navitem}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>{name} | {artist}</div>
    </div>
  );
}