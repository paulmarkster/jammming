import React from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({setQuery}) {

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      const artist = encodeURIComponent(event.target.value);
      const uri = encodeURI(`https://api.spotify.com/v1/search?q=${artist}&type=track`);
      setQuery(uri);
    };
  }

  return (
    <div className={styles.searchbar}>
      <div className={styles.icon}><SearchIcon /></div>
      <input className={styles.input} placeholder='Enter Spotify search...' onKeyDown={handleSubmit} />
    </div>
  );
}