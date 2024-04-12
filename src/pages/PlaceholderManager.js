import React from 'react';
import './Placeholder.css';

export function PlaceholderManager() {
    return (
        <div className='content'>
            <img className='image' src={require('./Manager.jpg')} alt='Ego driven manager'/>
            <p className='text'>Don't harass my staff!  He's working on it!!!</p>
        </div>
    );
}