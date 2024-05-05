import React from 'react';
import styles from './SearchCard.module.css';
import { getRefreshTokens } from '../../Spotify/spotifyOAuth';
import { addToPlaybackQueue } from '../../Spotify/spotifyAPI';

export default function SearchCard({query, setQuery, track, setUpdateQueue}) {

  const handleOnClick = () => {

    // Add the track to the queue list.
    getRefreshTokens().then(() => {
      addToPlaybackQueue(track.id).then(() => {
        setUpdateQueue(true);
      })
    })

    // Remove from search query list so that it no longer renders.
    const filteredList = query.filter(item => item.id !== track.id);
    setQuery(filteredList);

  };

  return (
    <div className={styles.card} onClick={handleOnClick}>
        <img className={styles.icon} src={track.album.images[2].url} alt='Album cover' />
        <div className={styles.text}>
          <p>{track.name}</p>
          <p className={styles.artistalbum}>{track.artists[0].name} | {track.album.name}</p>
        </div>
    </div>
  );
}