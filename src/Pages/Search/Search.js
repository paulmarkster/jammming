import React, { useState } from 'react';
import styles from './Search.module.css';
import SearchBar from './SearchBar';
import SearchDivider from './SearchDivider';
import SearchCard from './SearchCard';

export default function Search() {

  // State for search results array initially returned by SearchBar, and manipulated later in SearchCard.
  const [query, setQuery] = useState([]);
   
  return (
    <div className={styles.container}>
      <SearchBar setQuery={setQuery} />
      <SearchDivider />
      <div className={styles.search}>
        {query.map(item => (
          <SearchCard key={item.id} track={item} />
        ))}
      </div>
    </div>
  );
}