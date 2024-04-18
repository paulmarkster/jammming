import React from 'react';
import './Search.css';
import SearchBar from './SearchBar';
import SearchDivider from './SearchDivider';

export default function Search() {
    return (
        <div id='main-content'>
            <SearchBar />
            <SearchDivider />
        </div>
    );
}