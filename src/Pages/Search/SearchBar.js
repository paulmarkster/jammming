import React from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { getRefreshTokens } from '../../Spotify/spotifyOAuth';
import { spotifySearch } from '../../Spotify/spotifyAPI';

export default function SearchBar({setQuery}) {

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {

      const artist = encodeURIComponent(e.target.value);
      const uri = encodeURI(`https://api.spotify.com/v1/search?q=${artist}&type=track`);

      // Check to ensure there is a user logged into Spotify.
      if (sessionStorage.getItem('client_id')) {

        // Refresh tokens (only if required) and fetch search results from Spotify.
        getRefreshTokens().then(() => {
          spotifySearch(uri).then((queryResponse) => {
            setQuery(queryResponse.tracks.items);
          });
        });
      } else {
        alert('Login prior to initiating searches.');
      }
    };
  }

  return (
    <div className={styles.searchbar}>
      <div className={styles.icon}><SearchIcon /></div>
      <input className={styles.input} placeholder='Enter Spotify search...' onKeyDown={handleSubmit} />
    </div>
  );
}