import React, { useState, useEffect } from 'react';
import './Search.css';
import SearchBar from './SearchBar';
import SearchDivider from './SearchDivider';
import { getRefreshToken } from '../spotify/spotifyOAuth';
import { spotifySearch } from '../spotify/spotifyAPI';

export default function Search() {

  // Create a state for search query returned by the SearchBar child component.
  const [query, setQuery] = useState(null);

  useEffect(() => {

    // Check to see if a query is available.
    if (query !== null) {

      // Check to ensure there is a user logged into Spotify.
      if (sessionStorage.getItem('client_id')) {

        // Refresh tokens (if required) and send search query to Spotify.
        getRefreshToken().then(() => {
          spotifySearch(query).then((queryResponse) => {
            console.log(queryResponse);
          });
        });
      } else {
        alert('You must login prior to initiating searches.');
      }
    }
    return () => {

      // Reset the state so we don't generate multiple search requests.
      setQuery(null);
    }
  })
   
  return (
    <div id='main-content'>
      <SearchBar setQuery={setQuery} />
      <SearchDivider />
    </div>
  );
}