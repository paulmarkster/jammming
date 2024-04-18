import React from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {



    return (
        <div id='searchbar'>
            <div id='searchbar-icon'><SearchIcon /></div>
            <input id='searchbar-input' placeholder='Search Spotify library...' />
        </div>
    );
}