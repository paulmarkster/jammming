import React from 'react';
import styles from './QueueHeader.module.css';

export default function QueueHeader({text}) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>{text}</div>
    </div>
  );
}