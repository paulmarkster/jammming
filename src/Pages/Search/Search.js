import React, { useState, useEffect } from 'react';
import styles from './Search.module.css';
import SearchBar from './SearchBar';
import SearchDivider from './SearchDivider';
import SearchCard from './SearchCard';
import { getRefreshTokens } from '../../Spotify/spotifyOAuth';
import { spotifySearch } from '../../Spotify/spotifyAPI';

export default function Search() {

  // Create a state for search query returned by the SearchBar child component.
  const [query, setQuery] = useState(null);
  // Create a state for search query results to initiate the render of the returned search list.
  const [queryResult, setQueryResult] = useState([]);

  useEffect(() => {

    // Check to see if a query is available. 
    // This protects against initiating an empty search request to the Spotify server on initial component mount.
    if (query) {

      // Check to ensure there is a user logged into Spotify.
      if (sessionStorage.getItem('client_id')) {

        // Refresh tokens (only if required) and fetch search results from Spotify.
        getRefreshTokens().then(() => {
          spotifySearch(query).then((queryResponse) => {
            setQueryResult(queryResponse.tracks.items);
          });
        });
      } else {
        alert('Login prior to initiating searches.');
      }
    }
    return () => {
      // Nullify the query state to avoid infinite search requests on a given query.
      setQuery(null);
    }
  }, [query, queryResult])
   
  return (
    <div className={styles.container}>
      <SearchBar setQuery={setQuery} />
      <SearchDivider />
      <div className={styles.search}>
        {queryResult.map(item => (
          <SearchCard key={item.id} track={item} />
        ))}
      </div>
    </div>
  );
}