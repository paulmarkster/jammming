import React from 'react';
import styles from './PlaceholderManager.module.css';

export default function PlaceholderManager() {
    return (
        <div className={styles.content}>
            <img className={styles.image} src={require('./Manager.jpg')} alt='Ego driven manager'/>
            <p className={styles.text}>Don't harass my staff!  We're working on it!!!</p>
        </div>
    );
}