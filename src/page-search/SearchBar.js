import React from 'react';
import './SearchBar.css';
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
    <div id='searchbar'>
      <div id='searchbar-icon'><SearchIcon /></div>
      <input id='searchinput' placeholder='Enter Spotify search...' onKeyDown={handleSubmit} />
    </div>
  );
}