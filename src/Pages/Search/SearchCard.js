import React from 'react';
import styles from './SearchCard.module.css';

export default function SearchCard({track}) {

  return (
    <div className={styles.card}>
        <img className={styles.icon} src={track.album.images[2].url} alt='Album cover' />
        <div className={styles.text}>
          <p>{track.name}</p>
          <p className={styles.artistalbum}>{track.artists[0].name} | {track.album.name}</p>
        </div>
    </div>
  );
}