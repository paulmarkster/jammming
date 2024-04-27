import React, { useState, useEffect } from 'react';
import './Search.css';
import SearchBar from './SearchBar';
import SearchDivider from './SearchDivider';
import SearchCard from './SearchCard';
import { getRefreshToken } from '../spotify/spotifyOAuth';
import { spotifySearch } from '../spotify/spotifyAPI';

export default function Search() {

  // Create a state for search query returned by the SearchBar child component.
  const [query, setQuery] = useState(null);
  // Create a state for search query results to initiate the render of the returned search list.
  const [queryResult, setQueryResult] = useState([]);

  useEffect(() => {

    // Check to see if a query is available. 
    // This protects against initiating an empty search request to server on initial component mount.
    if (query) {

      // Check to ensure there is a user logged into Spotify.
      if (sessionStorage.getItem('client_id')) {

        // Refresh tokens (only if required) and send search query to Spotify.
        getRefreshToken().then(() => {
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
    <div id='main-content'>
      <SearchBar setQuery={setQuery} />
      <SearchDivider />
      <div id='search-container'>
        {queryResult.map(item => (
          <SearchCard key={item.id} track={item} />
        ))}
      </div>
    </div>
  );
}