import React from 'react';
import './SearchCard.css';

export default function SearchCard({track}) {

  return (
    <div id='search-card'>
        <img id='search-card-icon' src={track.album.images[2].url} alt='Album cover' />
        <div id='search-card-text'>
          <p id='song-title'>{track.name}</p>
          <p id='artist-album'>{track.artists[0].name} | {track.album.name}</p>
        </div>
    </div>
  );
}