import React from 'react';
import styles from './NavHeader.module.css';

export default function NavHeader({text}) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>{text}</div>
    </div>
  );
}