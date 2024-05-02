import React from 'react';
import styles from './NavItem.module.css';

export default function NavItem({icon, text, page}) {

    const viewColor = (text === page) ? {backgroundColor: '#dbe7c8'} : {backgroundColor: '#f9faef'};

    return (
        <div className={styles.navitem} style={viewColor}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.text}>{text}</div>
        </div>
    );
}